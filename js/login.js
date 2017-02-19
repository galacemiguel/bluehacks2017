$(document).ready(function() {

$('#login-form').on('submit', login());

function login(){
	$.ajax({
    url: "http://localhost:9999/main/login",
    type: "GET",
    data: {
        username:$("#username-field").val(),
       	password:$("#password-field").val()
        
     },

    success: function(response) {
        
        window.location.href = "feed.php?id="+response;
       },
      error: function(xhr) {
        console.log("Error");

      }
    });
};

});