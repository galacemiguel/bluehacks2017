
<?php
$target_dir = "images/";
$target_file = $target_dir . basename($_FILES["userpicture"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["userpicture"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}

// Check if file already exists
//if (file_exists($target_file)) {
    //echo "Sorry, file already exists.";
    //$uploadOk = 0;
//}
// Check file size
//if ($_FILES["userpicture"]["size"] > 500000) {
   // echo "Sorry, your file is too large.";
    //$uploadOk = 0;
//}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    $temp = explode(".", $_FILES["userpicture"]["name"]);
    $newfilename = $_GET["id"] . '.' . end($temp);
    if ( move_uploaded_file($_FILES["userpicture"]["tmp_name"], $target_dir . $newfilename)) {
        echo "The file ". basename( $_FILES["userpicture"]["name"]). " has been uploaded.";


        $servername = "localhost:3306/bluehacks2017";
        $username = "root";
        $password = "";
        $dbname = "bluehacks2017";

        // Create connection
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        // Check connection
        if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
        }
        $id = $_GET["id"];
        $sql = 'UPDATE user SET picture_location="uploads/'. $newfilename .'" WHERE id='.$id;

        if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
        } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }

        mysqli_close($conn);


    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>
