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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSGVyb0FwaSA9IChmdW5jdGlvbigpe1xuXHR2YXIgc2hhcmVkID0ge307XG5cdHZhciByZXN1bHRzQ29udGFpbmVyID0ge307XG5cblx0ZnVuY3Rpb24gcG9wdWxhdGUoaGVybyl7XG5cdFx0Y29uc29sZS5sb2coaGVybyk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBoZXJvLmRhdGEucmVzdWx0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGhlcm9EaXYgPSAkKCc8ZGl2PicpO1xuXHRcdFx0dmFyIG5hbWUgPSAkKCc8aDE+Jyk7XG5cdFx0XHR2YXIgZGVzY3JpcHRpb24gPSAkKCc8cD4nKTtcblx0XHRcdHZhciB0aHVtYm5haWwgPSAkKCc8aW1nPicpO1xuXHRcdFx0dmFyIG5vdEZvdW5kSW1nID0gXCJodHRwOi8vaS5hbm5paGlsLnVzL3UvcHJvZC9tYXJ2ZWwvaS9tZy9iLzQwL2ltYWdlX25vdF9hdmFpbGFibGVcIjtcblxuXG5cdFx0XHQkKGhlcm9EaXYpLmFkZENsYXNzKCdoZXJvLWRpdicpO1xuXHRcdFx0Y29uc29sZS5sb2coaGVyby5kYXRhLnJlc3VsdHNbaV0uZGVzY3JpcHRpb24pO1xuXHRcdFx0JChuYW1lKS5odG1sKGhlcm8uZGF0YS5yZXN1bHRzW2ldLm5hbWUpO1xuXG5cdFx0XHQkKHRodW1ibmFpbCkuYXR0cignc3JjJywgaGVyby5kYXRhLnJlc3VsdHNbaV0udGh1bWJuYWlsLnBhdGggKyAnLicgKyBoZXJvLmRhdGEucmVzdWx0c1tpXS50aHVtYm5haWwuZXh0ZW5zaW9uKTtcblx0XHRcdFxuXHRcdFx0JChoZXJvRGl2KS5hcHBlbmQodGh1bWJuYWlsKTtcblx0XHRcdCQoaGVyb0RpdikuYXBwZW5kKG5hbWUpO1x0XG5cdFx0XHQkKCcucmVzdWx0cy1jb250YWluZXInKS5hcHBlbmQoaGVyb0Rpdik7XG5cblx0XHRcdCQoaGVyb0Rpdikub24oJ2NsaWNrJywgZXhwYW5kSW5mb1dpbmRvdyk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZXhwYW5kSW5mb1dpbmRvdyhlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRjb25zb2xlLmRpcihlLmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0dmFyIGhlcm9Db250YWluZXIgPSBlLmN1cnJlbnRUYXJnZXQ7XG5cdFx0XHR2YXIgaGVyb0ltZyA9IGhlcm9Db250YWluZXIuY2hpbGRyZW5bMF07XG5cdFx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblxuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0c0NvbnRhaW5lcik7XG5cdFx0XHR2YXIgeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZXJvLWRpdicpO1xuXHRcdFx0Y29uc29sZS5sb2coeSk7XG5cblx0XHRcdC8vIGZvciAodmFyIGkgPSAwOyBpIDwgeS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Ly8gXHRpZiAoeVtpXS5jbGFzc0xpc3QgIT09ICdhY3RpdmUnKSB7XG5cblx0XHRcdC8vIFx0XHQkKGhlcm9Db250YWluZXIpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdC8vIFx0XHQvL1R3ZWVuTWF4LnRvKGhlcm9Db250YWluZXIsIDEsIHt3aWR0aDogJzEwMCUnfSk7XG5cdFx0XHQvLyBcdFx0Ly9Ud2Vlbk1heC50byhoZXJvSW1nLCAxLCB7d2lkdGg6ICczMCUnfSk7XG5cdFx0XHQvLyBcdH0gZWxzZSBpZiAoeVtpXS5jbGFzc0xpc3QgPT0gJ2FjdGl2ZScpIHtcblx0XHRcdC8vIFx0XHQkKGhlcm9Db250YWluZXIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdC8vIFx0XHQvL1R3ZWVuTWF4LnRvKGhlcm9Db250YWluZXIsIDEsIHt3aWR0aDogJzMwJSd9KTtcblx0XHRcdC8vIFx0XHQvL1R3ZWVuTWF4LnRvKGhlcm9JbWcsIDEsIHt3aWR0aDogJzEwMCUnfSk7XG5cblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gfVxuXHRcdFx0XG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBzZXR1cExpc3RlbmVycygpe1xuXHRcdHZhciB1cmwgPSAnaHR0cHM6Ly9nYXRld2F5Lm1hcnZlbC5jb20vdjEvcHVibGljLyc7XG5cdFx0dmFyIGFwaUtleSA9ICcxNDYyYTc1M2M3MWVlNDk2NWIzODJmYTcxYzNlZjhmNSc7XG5cblx0XHQkKCcuYnV0dG9uLTEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHZhciBvZmZzZXQgPSAwO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxOyBpKyspIHtcblx0XHRcdFx0JC5hamF4KHtcblx0XHRcdFx0XHR1cmw6IHVybCArICdjaGFyYWN0ZXJzP2FwaWtleT0nICsgYXBpS2V5ICsgJyZvZmZzZXQ9JyArIG9mZnNldFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuZG9uZShwb3B1bGF0ZSk7XG5cblx0XHRcdFx0Ly8gaWYgKCBpIDwgNzQgKSB7XG5cdFx0XHRcdC8vIFx0b2Zmc2V0Kz0yMDtcblx0XHRcdFx0Ly8gfSBlbHNlIHtcblx0XHRcdFx0Ly8gXHRvZmZzZXQrPTQ7XG5cdFx0XHRcdC8vIH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdFxuXG5cblxuXHR9XG5cblx0ZnVuY3Rpb24gaW5pdCgpe1xuXHRcdHNldHVwTGlzdGVuZXJzKCk7XG5cdH1cblx0c2hhcmVkLmluaXQgPSBpbml0O1xuXG5cdHJldHVybiBzaGFyZWQ7XG59KCkpO1xuXG5IZXJvQXBpLmluaXQoKTsiXX0=
