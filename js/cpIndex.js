$(document).ready(function() {
    console.log( "ready" );


var city = $('#city-type').val().toLowerCase();

console.log("city")

if (city === 'nyc' || city === 'new york city' || city === 'new york') {
	$('body').css('background-image', 'url(../images/nyc.jpg)');
}

else if (city === 'sf' || city === 'san francisco' || city === 'bay area') {


}

else if (city === 'la' || city === 'los angeles' || city === 'lax') {


}


else if (city === 'austin' || city === 'atx') {


}

else if (city === 'sydney' || city === 'syd') {


}




});