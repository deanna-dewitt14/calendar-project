// VARIABLES 
var currentHour = 11  //new Date().getHours();
var hourPointer = currentHour
var hourMap = [
	null, null, null, null, null, null, null, null, null, 
	'nine', 'ten', 'eleven', 'twelve', 'one', 'two', 'three', 'four', 'five'];

init(currentHour);

// jQuery event handlers
$( "#currentDay").html(moment(new Date()).format('dddd, MMMM Do')); //inject todays date
$( "#nineSave" ).on( "click", handleSave(evt));
$( "#tenSave" ).on( "click", handleSave(evt));
$( "#elevenSave" ).on( "click", handleSave(evt));
$( "#twelveSave" ).on( "click", handleSave(evt));
$( "#oneSave" ).on( "click", handleSave(evt));
$( "#twoSave" ).on( "click", handleSave(evt));
$( "#threeSave" ).on( "click", handleSave(evt));
$( "#fourSave" ).on( "click", handleSave(evt));
$( "#fiveSave" ).on( "click", handleSave(evt));


/* setInterval(function() {
	currentHour = new Date().getHours();
	if(currentHour != hourPointer && currentHour < 18 && currentHour > 8) {
		changeHourColor(currentHour);
		hourPointer = currentHour;
	}
	console.log('currentHour: ' + currentHour);
}, 60000); */


//FUNCTIONS

function init(hour) {
	$('textarea[name=' + hourMap[hour] + ']').removeClass( "past" ).addClass( "present" );
	for (let index = hour + 1; index < 18; index++) {
		$('textarea[name=' + hourMap[index] + ']').removeClass( "past" ).addClass( "future" );
	}
}

function changeHourColor(hour) {
	$('textarea[name=' + hourMap[hour] + ']').removeClass( "future" ).addClass( "present" );
	$('textarea[name=' + hourMap[hour-1] + ']').removeClass( "present" ).addClass( "past" );
}


