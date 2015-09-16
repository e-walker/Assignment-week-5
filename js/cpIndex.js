$(document).ready(function() {
    console.log( "ready" );

var city = $('#city-type').val().toLowerCase();

console.log("city");

//$('#submit-btn').click(changeDisplay);

$('#submit-btn').submit(function() {
	return false;
})

function changeDisplay () {

if (city === 'nyc' || city === 'new york city' || city === 'new york') {
	$('body').css('background-image', 'url(../images/nyc.jpg)');
}

else if (city === 'sf' || city === 'san francisco' || city === 'bay area') {
	$('body').css('background-image', 'url(../images/sf.jpg)');
}

else if (city === 'la' || city === 'los angeles' || city === 'lax') {
	$('body').css('background-image', 'url(../images/la.jpg)');
}

else if (city === 'austin' || city === 'atx') {
	$('body').css('background-image', 'url(../images/austin.jpg)');
}

else if (city === 'sydney' || city === 'syd') {
	$('body').css('background-image', 'url(../images/sydney.jpg)');
}

}


});