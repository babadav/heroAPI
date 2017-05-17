var HeroApi = (function(){
	var shared = {};
	var resultsContainer = {};

	function populate(hero){
		console.log(hero);
		for (var i = hero.data.results.length - 1; i >= 0; i--) {
			var heroDiv = $('<div>');
			var name = $('<h1>');
			var thumbnail = $('<img>');
			var notFoundImg = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";


			$(heroDiv).addClass('hero-div');
			console.log(hero.data.results[i].name);
			$(name).html(hero.data.results[i].name);

			// if(hero.data.results[i].thumbnail.path == notFoundImg){
			// 	$(thumbnail).hide();
			// 	$(name).hide();
			// } else {
				$(thumbnail).attr('src', hero.data.results[i].thumbnail.path + '.' + hero.data.results[i].thumbnail.extension);
			// }
			
			$(heroDiv).append(thumbnail);
			$(heroDiv).append(name);	
			$('.results-container').append(heroDiv);
		}

	}

	function setupListeners(){
		var url = 'https://gateway.marvel.com/v1/public/';
		var apiKey = '1462a753c71ee4965b382fa71c3ef8f5';

		$('.button-1').on('click', function(e){
			e.preventDefault();
			var offset = 0;
			for (var i = 1; i >= 0; i--) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSGVyb0FwaSA9IChmdW5jdGlvbigpe1xuXHR2YXIgc2hhcmVkID0ge307XG5cdHZhciByZXN1bHRzQ29udGFpbmVyID0ge307XG5cblx0ZnVuY3Rpb24gcG9wdWxhdGUoaGVybyl7XG5cdFx0Y29uc29sZS5sb2coaGVybyk7XG5cdFx0Zm9yICh2YXIgaSA9IGhlcm8uZGF0YS5yZXN1bHRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHR2YXIgaGVyb0RpdiA9ICQoJzxkaXY+Jyk7XG5cdFx0XHR2YXIgbmFtZSA9ICQoJzxoMT4nKTtcblx0XHRcdHZhciB0aHVtYm5haWwgPSAkKCc8aW1nPicpO1xuXHRcdFx0dmFyIG5vdEZvdW5kSW1nID0gXCJodHRwOi8vaS5hbm5paGlsLnVzL3UvcHJvZC9tYXJ2ZWwvaS9tZy9iLzQwL2ltYWdlX25vdF9hdmFpbGFibGVcIjtcblxuXG5cdFx0XHQkKGhlcm9EaXYpLmFkZENsYXNzKCdoZXJvLWRpdicpO1xuXHRcdFx0Y29uc29sZS5sb2coaGVyby5kYXRhLnJlc3VsdHNbaV0ubmFtZSk7XG5cdFx0XHQkKG5hbWUpLmh0bWwoaGVyby5kYXRhLnJlc3VsdHNbaV0ubmFtZSk7XG5cblx0XHRcdC8vIGlmKGhlcm8uZGF0YS5yZXN1bHRzW2ldLnRodW1ibmFpbC5wYXRoID09IG5vdEZvdW5kSW1nKXtcblx0XHRcdC8vIFx0JCh0aHVtYm5haWwpLmhpZGUoKTtcblx0XHRcdC8vIFx0JChuYW1lKS5oaWRlKCk7XG5cdFx0XHQvLyB9IGVsc2Uge1xuXHRcdFx0XHQkKHRodW1ibmFpbCkuYXR0cignc3JjJywgaGVyby5kYXRhLnJlc3VsdHNbaV0udGh1bWJuYWlsLnBhdGggKyAnLicgKyBoZXJvLmRhdGEucmVzdWx0c1tpXS50aHVtYm5haWwuZXh0ZW5zaW9uKTtcblx0XHRcdC8vIH1cblx0XHRcdFxuXHRcdFx0JChoZXJvRGl2KS5hcHBlbmQodGh1bWJuYWlsKTtcblx0XHRcdCQoaGVyb0RpdikuYXBwZW5kKG5hbWUpO1x0XG5cdFx0XHQkKCcucmVzdWx0cy1jb250YWluZXInKS5hcHBlbmQoaGVyb0Rpdik7XG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBzZXR1cExpc3RlbmVycygpe1xuXHRcdHZhciB1cmwgPSAnaHR0cHM6Ly9nYXRld2F5Lm1hcnZlbC5jb20vdjEvcHVibGljLyc7XG5cdFx0dmFyIGFwaUtleSA9ICcxNDYyYTc1M2M3MWVlNDk2NWIzODJmYTcxYzNlZjhmNSc7XG5cblx0XHQkKCcuYnV0dG9uLTEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHZhciBvZmZzZXQgPSAwO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdCQuYWpheCh7XG5cdFx0XHRcdFx0dXJsOiB1cmwgKyAnY2hhcmFjdGVycz9hcGlrZXk9JyArIGFwaUtleSArICcmb2Zmc2V0PScgKyBvZmZzZXRcblx0XHRcdFx0fSlcblx0XHRcdFx0LmRvbmUocG9wdWxhdGUpO1xuXG5cdFx0XHRcdC8vIGlmICggaSA8IDc0ICkge1xuXHRcdFx0XHQvLyBcdG9mZnNldCs9MjA7XG5cdFx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHRcdC8vIFx0b2Zmc2V0Kz00O1xuXHRcdFx0XHQvLyB9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblxuXG5cdH1cblxuXHRmdW5jdGlvbiBpbml0KCl7XG5cdFx0c2V0dXBMaXN0ZW5lcnMoKTtcblx0fVxuXHRzaGFyZWQuaW5pdCA9IGluaXQ7XG5cblx0cmV0dXJuIHNoYXJlZDtcbn0oKSk7XG5cbkhlcm9BcGkuaW5pdCgpOyJdfQ==
