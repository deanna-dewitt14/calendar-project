// VARIABLES 
var currentHour = 11  //new Date().getHours();
var hourPointer = currentHour
var hourMap = [
	null, null, null, null, null, null, null, null, null, 
	'nine', 'ten', 'eleven', 'twelve', 'one', 'two', 'three', 'four', 'five'];

init(currentHour);

// jQuery event handlers
$( "#currentDay").html(moment(new Date()).format('dddd, MMMM Do')); //inject todays date
$( "#nineSave" ).on( "click", function(e){handleSave(e);});
$( "#tenSave" ).on( "click", function(e){handleSave(e);});
$( "#elevenSave" ).on( "click", function(e){handleSave(e);});
$( "#twelveSave" ).on( "click", function(e){handleSave(e);});
$( "#oneSave" ).on( "click", function(e){handleSave(e);});
$( "#twoSave" ).on( "click", function(e){handleSave(e);});
$( "#threeSave" ).on( "click", function(e){handleSave(e);});
$( "#fourSave" ).on( "click", function(e){handleSave(e);});
$( "#fiveSave" ).on( "click", function(e){handleSave(e);});

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

function handleSave(e) {
	let targetTextarea = document.getElementsByName(e.target.id.slice(0, -4));


// TODO: create a map for local storage
// place saved elements into map
// recall any saved elements on init


	console.log('targetButton: ' + targetTextarea[0].value);
}
