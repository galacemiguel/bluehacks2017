

$(document).ready(function() {

  $.ajax({
    url: "http://localhost:9999/project/viewproject",
    type: "GET",
    data: {
       projectID:1
     },

    success: function(response) {
       $("#project-cost").text("PHP "+response.cost);
       $("#project-about-h").text(response.local_government_name+ " Local Government");
       $("#project-about-p").text(response.description);
       $("#project-contact").text(response.contact_number);
       $("#project-cover-title").text(response.name);
       $("#project-cover-city").text(response.local_government_name);
       $("#project-cover-upvotes").text("+"+response.upvotes);
       $("#project-cover-downvotes").text("-"+response.downvotes);


       },
      error: function(xhr) {
        console.log("Error");

      }
    });
  $.ajax({
    url: "http://localhost:9999/project/updates",
    type: "GET",
    data: {
       projectID:1
     },

    success: function(response) {
      $.each(response, function(index,value){
      addUpdate(value.imageLocation, value.updateNumber, value.title, value.description, value.poster, value.dateUploaded);
      
       });


       },
      error: function(xhr) {
        console.log("Error");

      }
    });

    $('#project-cover-upvotes').click(function(e) {  
    $.ajax({
    url: "http://localhost:9999/project/vote",
    type: "GET",
    data: {
       projectID:1,
       userID:1,
       vote:1
     },

    success: function(response) {
       
    },
      error: function(xhr) {
        console.log("Error");

      }
    });

    window.location.reload();
      });

     $("#project-cover-downvotes").click(function(e){
    $.ajax({
    url: "http://localhost:9999/project/vote",
    type: "GET",
    data: {
       projectID:1,
       userID:1,
       vote:0
     },

    success: function(response) {
       
    },
      error: function(xhr) {
        console.log("Error");

      }
    });
     window.location.reload();
     });

function addUpdate(imageLocation ,updateNumber,  title, description, poster, dateUploaded){
  var x = '<div class="project-feedback-card">\
          <div class="project-feedback-img" id=pic'+ updateNumber+'></div>\
          <div class="project-feedback-text">\
            <span class="project-feedback-date">'+dateUploaded +'</span>\
            <h3 class="project-feedback-h">'+title +'</h3>\
            <span class="project-feedback-author">'+poster+'</span>\
            <p class="project-feedback-p">'+description+'</p>\
          </div>\
        </div>';
$(".project-feedback").append(x);

  var img = "url(" + imageLocation + ")";
  $('#pic'+updateNumber).css("background-image",img);
  $('#pic'+updateNumber).css("background-size","cover");
  $('#pic'+updateNumber).css("no-repeat","no-repeat");
  $('#pic'+updateNumber).css("background-position","center center");


};


});


