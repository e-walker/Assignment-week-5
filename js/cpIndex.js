$(document).ready(function() {

    //get input from user via field #city-type
    //convert to lower case
    //store converted input in variable "city"
	function changeDisplay() {
		var city = $('#city-type').val().toLowerCase();

		console.log("city");
		//if city = nyc, new york city or new york, then change the background to an image of New York.
		if (city === 'nyc' || city === 'new york city' || city === 'new york') {
			$('body').css('background-image', 'url(images/nyc.jpg)');
		}
		//if city = sf, san francisco or bay area, then change the background to an image of San Francisco.
		else if (city === 'sf' || city === 'san francisco' || city === 'bay area') {
			$('body').css('background-image', 'url(images/sf.jpg)');
		}
		//if city = la, los angeles or lax, then change the background to an image of Los Angeles.
		else if (city === 'la' || city === 'los angeles' || city === 'lax') {
			$('body').css('background-image', 'url(images/la.jpg)');
		}
		//if city = austin or atx, then change the background to an image of Austin.
		else if (city === 'austin' || city === 'atx') {
			$('body').css('background-image', 'url(images/austin.jpg)');
		}
		//if city = sydney or syd, then change the background to an image of Sydney.
		else if (city === 'sydney' || city === 'syd') {
			$('body').css('background-image', 'url(images/sydney.jpg)');
		}

		return false;

	}

	// run this function when user submits the form
	$('#searchForm').submit(changeDisplay);


});