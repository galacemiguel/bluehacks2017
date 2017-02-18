$('#login-form').on('submit', login());

function login(){
	$.ajax({
    url: "http://localhost:9999/main/login",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({
        username:$("#username-field").val(),
       	password:$("#password-fi").val()
        
     }),

    success: function(response) {
        if(response==1){
        //window.location.href = "login.html";
        console.log("SUCCESS");
        }
        else{
        //$("#eError").show(); 
        console.log("FAIL");
        }
       },
      error: function(xhr) {
        console.log("Error");

      }
    });
}
