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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSGVyb0FwaSA9IChmdW5jdGlvbigpe1xuXHR2YXIgc2hhcmVkID0ge307XG5cdHZhciByZXN1bHRzQ29udGFpbmVyID0ge307XG5cblx0ZnVuY3Rpb24gcG9wdWxhdGUoaGVybyl7XG5cdFx0Y29uc29sZS5sb2coaGVybyk7XG5cdFx0Zm9yICh2YXIgaSA9IGhlcm8uZGF0YS5yZXN1bHRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHR2YXIgbmFtZSA9ICQoJzxoMT4nKTtcblx0XHRcdHZhciB0aHVtYm5haWwgPSAkKCc8aW1nPicpO1xuXHRcdFx0dmFyIG5vdEZvdW5kSW1nID0gXCJodHRwOi8vaS5hbm5paGlsLnVzL3UvcHJvZC9tYXJ2ZWwvaS9tZy9iLzQwL2ltYWdlX25vdF9hdmFpbGFibGVcIjtcblxuXHRcdFx0Y29uc29sZS5sb2coaGVyby5kYXRhLnJlc3VsdHNbaV0ubmFtZSk7XG5cdFx0XHQkKG5hbWUpLmh0bWwoaGVyby5kYXRhLnJlc3VsdHNbaV0ubmFtZSk7XG5cblx0XHRcdGlmKGhlcm8uZGF0YS5yZXN1bHRzW2ldLnRodW1ibmFpbC5wYXRoID09IG5vdEZvdW5kSW1nKXtcblx0XHRcdFx0JCh0aHVtYm5haWwpLmhpZGUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGh1bWJuYWlsKS5hdHRyKCdzcmMnLCBoZXJvLmRhdGEucmVzdWx0c1tpXS50aHVtYm5haWwucGF0aCArICcuJyArIGhlcm8uZGF0YS5yZXN1bHRzW2ldLnRodW1ibmFpbC5leHRlbnNpb24pO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQkKCdib2R5JykuYXBwZW5kKHRodW1ibmFpbCk7XG5cdFx0XHQkKCdib2R5JykuYXBwZW5kKG5hbWUpO1x0XG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBzZXR1cExpc3RlbmVycygpe1xuXHRcdHZhciB1cmwgPSAnaHR0cHM6Ly9nYXRld2F5Lm1hcnZlbC5jb20vdjEvcHVibGljLyc7XG5cdFx0dmFyIGFwaUtleSA9ICc3ZTRjNWM0MjMxNzlkZDY1ZGEzYmQwOTgyOWVlZWU3OCc7XG5cblx0XHQkKCcuYnV0dG9uLTEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHZhciBvZmZzZXQgPSAwO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDc1OyBpID49IDA7IGktLSkge1xuXHRcdFx0XHQkLmFqYXgoe1xuXHRcdFx0XHRcdHVybDogdXJsICsgJ2NoYXJhY3RlcnM/YXBpa2V5PScgKyBhcGlLZXkgKyAnJm9mZnNldD0nICsgb2Zmc2V0XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5kb25lKHBvcHVsYXRlKTtcblxuXHRcdFx0XHRpZiAoIGkgPCA3NCApIHtcblx0XHRcdFx0XHRvZmZzZXQrPTIwO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG9mZnNldCs9NDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gJCgnLmJ1dHRvbi0yJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cdFx0Ly8gXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Ly8gXHQkLmFqYXgoe1xuXHRcdC8vIFx0XHR1cmw6IHVybCArICdjaGFyYWN0ZXInXG5cdFx0Ly8gXHR9KVxuXHRcdC8vIH0pXG5cblx0fVxuXG5cdGZ1bmN0aW9uIGluaXQoKXtcblx0XHRzZXR1cExpc3RlbmVycygpO1xuXHR9XG5cdHNoYXJlZC5pbml0ID0gaW5pdDtcblxuXHRyZXR1cm4gc2hhcmVkO1xufSgpKTtcblxuSGVyb0FwaS5pbml0KCk7Il19
