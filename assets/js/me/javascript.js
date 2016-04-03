$(document).ready(function () {
	$('.btn').on('click', function (event) {
		event.stopPropagation();
		event.preventDefault();
		if ($(this).closest('aside').find(".view").is(":hidden")) {
			$(this).addClass("highlight");
			$(this).closest('aside').find(".view").show("slow");
		}
		else {
			$(this).closest('aside').find(".view").hide("slow");
			$(this).removeClass("highlight");
		}
	});
});
