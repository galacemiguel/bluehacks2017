$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() == 0) {
			$("#filter-card").removeClass("scrolled");
		} else {
			$("#filter-card").addClass("scrolled");
		}
	});
});