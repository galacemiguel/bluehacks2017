
if (navigator.geolocation) {
  
  navigator.geolocation.getCurrentPosition(function(position) {
  var latitude= position.coords.latitude; 
  var longitude=position.coords.longitude;

  queryFeed(longitude, latitude);
  
});

} 
else {
  alert('Geolocation is not supported in your browser');
}

function queryFeed(longitude, latitude){
	$.ajax({
    url: "http://localhost:9999/project/view",
    type: "GET",
    data:{
        longitude:longitude,
       	latitude:latitude
    },

    success: function(response) {
       $.each(response, function(index,value){
      addtoFeed(value.id,value.name,value.description,value.distance,value.rating);

       });


       },
      error: function(xhr) {
        console.log("Error");

      }
    });
};

function addtoFeed(projectid, name, description, distance, rating){
    var x='<div class="project-card">\
          <div class="project-card-img"></div>\
          <div class="project-card-text">\
            <h4 class="project-card-title">'+name+'</h4>\
            <span class="project-card-city">Quezon City, Metro Manila</span>\
            <p class="project-card-p">'+description+'</p>\
          </div>\
        </div>';

    $(".project-container").append(x);


};

function search(){
  
  var query= $("#search-field").val();
  var selected=$('#filter-select').find(":selected").val();

  if( selected==0 && !(query.length===0) ){
  $(".project-container").empty();
  navigator.geolocation.getCurrentPosition(function(position) {
  var latitude= position.coords.latitude; 
  var longitude=position.coords.longitude;
  
  $.ajax({
    url: "http://localhost:9999/project/sort-tag",
    type: "GET",
    data:{
        longitude:longitude,
        latitude:latitude,
        tag:query
    },

    success: function(response) {
       $.each(response, function(index,value){
      addtoFeed(value.id,value.name,value.description,value.distance,value.rating);
       });


       },
      error: function(xhr) {
        console.log("Error");

      }
    }); 

  });
  }
  else if(selected!=0 && query.length===0){
      if(selected==1){ //search by distance
        $(".project-container").empty();
        navigator.geolocation.getCurrentPosition(function(position) {
        var latitude= position.coords.latitude; 
        var longitude=position.coords.longitude;
  
        $.ajax({
        url: "http://localhost:9999/project/sort-distance",
        type: "GET",
        data:{
            longitude:longitude,
            latitude:latitude,
        },

        success: function(response) {
          $.each(response, function(index,value){
          addtoFeed(value.id,value.name,value.description,value.distance,value.rating);
          });


          },
        error: function(xhr) {
            console.log("Error");

        }
      }); 

    });
  }
      else {
        $(".project-container").empty();
        navigator.geolocation.getCurrentPosition(function(position) {
        var latitude= position.coords.latitude; 
        var longitude=position.coords.longitude;
  
        $.ajax({
          url: "http://localhost:9999/project/sort-rating",
          type: "GET",
          data:{
              longitude:longitude,
              latitude:latitude
          },

          success: function(response) {
            $.each(response, function(index,value){
            addtoFeed(value.id,value.name,value.description,value.distance,value.rating);
            });
          },
            error: function(xhr) {
              console.log("Error");
          }
      }); 

    });
      }
      

  }
  else{
    $(".project-container").empty();
        navigator.geolocation.getCurrentPosition(function(position) {
        var latitude= position.coords.latitude; 
        var longitude=position.coords.longitude;
  
        $.ajax({
          url: "http://localhost:9999/project/sort-both",
          type: "GET",
          data:{
              longitude:longitude,
              latitude:latitude,
              tag:query,
              selected:selected
          },

          success: function(response) {
            $.each(response, function(index,value){
            addtoFeed(value.id,value.name,value.description,value.distance,value.rating);
            });
          },
            error: function(xhr) {
              console.log("Error");
          }
      }); 

    });
  }
  

}