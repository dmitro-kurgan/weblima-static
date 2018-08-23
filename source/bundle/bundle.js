import '../components/scss/style.scss';

// import '../components/js/bootstrap.min'

import 'slick-carousel';

var slickGames = $('.slick-games')

slickGames.slick({
	// infinite: true,
	fade: true,
	arrows: false,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1
});