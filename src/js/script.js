$(".menu").click(function (e) {
	e.preventDefault(), $(this).toggleClass("is-active"),
		$(".nav").toggleClass("opened"), $("html").toggleClass("overflow");
	$(".nav__link").click(function (e) {
		e.preventDefault();
		if ($(window).width() <= 991) {
			$(".header__nav").removeClass("opened");
			$("html").removeClass("overflow");
			$(".menu").removeClass("is-active");
		}
	})
})



$('.question__block').click(function () {
	let container = $(this).parents('.question');
	let answer = container.find('.question__answer');
	let trigger = container.find('.question__arrow');

	answer.slideToggle(200);

	if (trigger.hasClass('question__rotated')) {
		trigger.removeClass('question__rotated');
	} else {
		trigger.addClass('question__rotated');
	}

	if (container.hasClass('expanded')) {
		container.removeClass('expanded');
	} else {
		container.addClass('expanded');
	}
});



jQuery(document).ready(($) => {
	$('.accordion__block').click(function () {
		$(this).find('.accordion__close').toggleClass('open');
		$(this)
			.next('.accordion__open')
			.slideToggle('fast', () => {

			});
	})})
