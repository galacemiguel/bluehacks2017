<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title></title>
	<meta name="description" content="" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

	<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<<script src="js/jquery-3.1.1.min.js"></script>
	<script src="js/project.js"></script>
	<link type="text/css" rel="stylesheet" href="assets/css/materialize.min.css" media="screen,projection"/>
	<link rel="stylesheet" href="assets/css/styles.css" />
	<script defer src="assets/js/app.js"></script>
</head>

<body id="project">
	<nav class="site-nav">
		<img class="logo" src="assets/images/logo.png" />
		<ul>
			<li>My Projects</li>
			<li>My Account</li>
			<li>Log Out</li>
		</ul>
	</nav>
	<section id="project-content">
		<div id="project-cover">
			<div id="project-cover-info">
				<div id="project-cover-hs">
					<h1 id="project-cover-title"></h1>
					<h2 id="project-cover-city"></h2>
				</div>
				<div id="project-cover-votes">
					<div id="project-cover-upvotes"></div>
					<div id="project-cover-downvotes"></div>
				</div>
			</div>
		</div>
		<div id="project-info">
			<div id="project-timeline">
				<div id="project-timeline-bar">
					<div id="project-timeline-progress"></div>
				</div>
				<span id="project-start">Jan 2016</span>
				<span id="project-end">May 2017</span>
			</div>
			<div id="project-about">
				<div id="project-about-card">
					<h4 id="project-about-h"></h4>
					<span id="project-contact"></span>
					<p id="project-about-p">
						
					</p>
					<div id="project-cost-container">
						<p id="project-cost"></p>
					</div>
				</div>
			</div>
			<div class="project-feedback">
				
			</div>
		</div>
	</section>
	<div id="overlay"></div>
	<div id="add-feedback-card">
		<form id="add-feedback-form">
			<input id="add-feedback-title" type="text" placeholder="Title" />
			<textarea id="add-feedback-description" placeholder="Write something&hellip;"></textarea>
			<div id="add-feedback-form-btns">
				<input id="add-feedback-submit" type="submit" />
				<form action="#">
					<div class="file-field input-field">
						<div class="btn">
							<span>File</span>
							<input type="file">
						</div>
						<div class="file-path-wrapper">
							<input class="file-path validate" type="text">
						</div>
					</div>
				 </form>
			</div>
		</form>
	</div>
	<a class="add-btn btn-floating btn-large waves-effect waves-light" id="add-feedback-btn"><i class="material-icons">add</i></a>

	<script type="text/javascript" src="assets/js/materialize.min.js"></script>


</body>
</html>