$(function () {
	if ($('#s1-right').css('display') == 'inline-block')  {
		$('#sections').fullpage({
			continuousVertical: false
		});
	}

	$('a[section]').click(function (event) {
		$.fn.fullpage.moveTo($(this).attr('section'));
		event.preventDefault();
	});
});