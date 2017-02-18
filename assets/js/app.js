$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() == 0) {
			$("#filter-card").removeClass("scrolled");
		} else {
			$("#filter-card").addClass("scrolled");
		}
	});

	$("#add-feedback-btn").on("click", function() {
		$("#overlay").show();
		$("#add-feedback-card").addClass("active");
	});

	$("#overlay").on("click", function() {
		$(this).hide();
		$("#add-feedback-card").removeClass("active");
	})
});