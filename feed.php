<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title></title>
	<meta name="description" content="" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<script src="js/jquery-3.1.1.min.js"></script>
	<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link type="text/css" rel="stylesheet" href="assets/css/materialize.min.css" media="screen,projection"/>
	<link rel="stylesheet" href="assets/css/styles.css" />
	<script defer src="assets/js/app.js"></script>
</head>

<body id="feed">
	<nav class="site-nav">
		<img class="logo" src="assets/images/logo.png" />
		<ul>
			<li>My Projects</li>
			<li>My Account</li>
			<li>Log Out</li>
		</ul>
	</nav>
	<div id="feed-content">
		<h3 id="feed-h">Projects</h3>
		<div id="feed-h-line"></div>
		<section id="feed-grid">
			<div id="projects-col">
				
				
			</div>
			<div id="filter-col">
				<div id="filter-card">
					<form id="filter-form" onsubmit="search()">
						<h4 id="filter-h">Filter</h4>
						<select id="filter-select">
							<option selected value=0 > -- select an option -- </option>
							<option value =1>By Distance</option>
							<option value =2>By Rating </option>
						</select>
						<input id="search-field" type="text" placeholder="Search&hellip;" />
						<div id="filter-btn-container">
							<input id="filter-submit" type="submit" />
						</div>
					</form>
				</div>
			</div>
		</section>
	</div>
	<a class="add-btn btn-floating btn-large waves-effect waves-light" href="new-project.html"><i class="material-icons">add</i></a>

	<script type="text/javascript" src="assets/js/materialize.min.js"></script>

<? php
$uid=$_GET["uid"];
?>

<script>var projectID = "<?=$id ?>";</script>
<script src="js/feed.js"></script>

</body>
</html>