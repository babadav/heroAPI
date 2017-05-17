var HeroApi = (function(){
	var shared = {};
	var resultsContainer = {};

	function populate(hero){
		console.log(hero);
		for (var i = hero.data.results.length - 1; i >= 0; i--) {
			var name = $('<h1>');
			var thumbnail = $('<img>');
			var notFoundImg = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";

			console.log(hero.data.results[i].name);
			$(name).html(hero.data.results[i].name);

			if(hero.data.results[i].thumbnail.path == notFoundImg){
				$(thumbnail).hide();
			} else {
				$(thumbnail).attr('src', hero.data.results[i].thumbnail.path + '.' + hero.data.results[i].thumbnail.extension);
			}
			
			$('body').append(thumbnail);
			$('body').append(name);	
		}

	}

	function setupListeners(){
		var url = 'https://gateway.marvel.com/v1/public/';
		var apiKey = '7e4c5c423179dd65da3bd09829eeee78';

		$('.button-1').on('click', function(e){
			e.preventDefault();
			var offset = 0;
			for (var i = 75; i >= 0; i--) {
				$.ajax({
					url: url + 'characters?apikey=' + apiKey + '&offset=' + offset
				})
				.done(populate);

				if ( i < 74 ) {
					offset+=20;
				} else {
					offset+=4;
				}
			}
		});

		// $('.button-2').on('click', function(e){
		// 	e.preventDefault();
		// 	$.ajax({
		// 		url: url + 'character'
		// 	})
		// })

	}

	function init(){
		setupListeners();
	}
	shared.init = init;

	return shared;
}());

HeroApi.init();