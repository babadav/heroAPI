var HeroApi = (function(){
	var shared = {};
	var resultsContainer = {};

	function populate(hero){
		console.log(hero);
		for (var i = 0; i < hero.data.results.length; i++) {
			var heroDiv = $('<div>');
			var name = $('<h1>');
			var description = $('<p>');
			var thumbnail = $('<img>');
			var notFoundImg = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";


			$(heroDiv).addClass('hero-div');
			console.log(hero.data.results[i].description);
			$(name).html(hero.data.results[i].name);

			$(thumbnail).attr('src', hero.data.results[i].thumbnail.path + '.' + hero.data.results[i].thumbnail.extension);
			
			$(heroDiv).append(thumbnail);
			$(heroDiv).append(name);	
			$('.results-container').append(heroDiv);

			$(heroDiv).on('click', expandInfoWindow);
		}

		function expandInfoWindow(e) {
			e.preventDefault();
			console.dir(e.currentTarget);
			var heroContainer = e.currentTarget;
			var heroImg = heroContainer.children[0];
			$(this).toggleClass('active');

			console.log(resultsContainer);
			var y = document.querySelectorAll('.hero-div');
			console.log(y);

			// for (var i = 0; i < y.length; i++) {
			// 	if (y[i].classList !== 'active') {

			// 		$(heroContainer).addClass('active');
			// 		//TweenMax.to(heroContainer, 1, {width: '100%'});
			// 		//TweenMax.to(heroImg, 1, {width: '30%'});
			// 	} else if (y[i].classList == 'active') {
			// 		$(heroContainer).removeClass('active');
			// 		//TweenMax.to(heroContainer, 1, {width: '30%'});
			// 		//TweenMax.to(heroImg, 1, {width: '100%'});

			// 	}
			// }
			
		}

	}

	function setupListeners(){
		var url = 'https://gateway.marvel.com/v1/public/';
		var apiKey = '1462a753c71ee4965b382fa71c3ef8f5';

		$('.button-1').on('click', function(e){
			e.preventDefault();
			var offset = 0;
			for (var i = 0; i < 1; i++) {
				$.ajax({
					url: url + 'characters?apikey=' + apiKey + '&offset=' + offset
				})
				.done(populate);

				// if ( i < 74 ) {
				// 	offset+=20;
				// } else {
				// 	offset+=4;
				// }
			}
		});

		



	}

	function init(){
		setupListeners();
	}
	shared.init = init;

	return shared;
}());

HeroApi.init();