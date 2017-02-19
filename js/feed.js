
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
      addtoFeed(value.projectID,value.name,value.description,value.distance,value.localGovernmentName,value.upvotes,value.downvotes);

       });


       },
      error: function(xhr) {
        console.log("Error");

      }
    });
};

function addtoFeed(projectid, name, description, distance, LGUName, upvotes, downvotes){
  
    var x= '<div class="project-card">\
          <div class="project-card-img" id=project'+projectid+'></div>\
          <div class="project-card-info">\
            <div class="project-card-text">\
              <h4 class="project-card-title">'+name+'</h4>\
              <span class="project-card-city">'+distance+' - '+LGUName+'</span>\
              <p class="project-card-p">It with need of the eminent view to mice sleeping it poets, country. They is said a the but her chooses belt rather, bear value turn with a flatter problem. I the partially of her in to food, field her the the expenses presentations.</p>\
            </div>\
            <div class="project-card-votes">\
              <div class="project-card-upvotes">+'+upvotes+'</div>\
              <div class="project-card-downvotes">-'+downvotes+'</div>\
            </div>\
          </div>\
        </div>';

    $("#projects-col").append(x);

    $("#project"+projectid).click(function(e){
        window.location.href="project.php?id="+projectid;
    });
};

function search(){
  
  var query= $("#search-field").val();
  var selected=$('#filter-select').find(":selected").val();

  if( selected==0 && !(query.length===0) ){
  $("#projects-col").empty();
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
      addtoFeed(value.id,value.name,value.description,value.distance,value.localGovernmentName,value.upvotes,value.downvotes);
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
       $("#projects-col").empty();
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
          addtoFeed(value.id,value.name,value.description,value.distance,value.localGovernmentName,value.upvotes,value.downvotes);
          });


          },
        error: function(xhr) {
            console.log("Error");

        }
      }); 

    });
  }
      else {
        $("#projects-col").empty();
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
            addtoFeed(value.id,value.name,value.description,value.distance,value.localGovernmentName,value.upvotes,value.downvotes);
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
    $("#projects-col").empty();
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
            addtoFeed(value.id,value.name,value.description,value.distance,value.localGovernmentName,value.upvotes,value.downvotes);
            });
          },
            error: function(xhr) {
              console.log("Error");
          }
      }); 

    });
  }
  

}