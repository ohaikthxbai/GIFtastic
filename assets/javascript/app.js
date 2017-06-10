/* 
SUDOWOODO (pseudocode)
utilize the GIPHY api to generate gifs based on the user's search

create an array of content
	searched content will be added to the array
each element from the array will be a button
	previously searched content will become buttons
searched content should bring up gifs related to what the user searched

*/

// content array
var advTime = ['Finn the Human', 'Jake the Dog', 'BMO', 'Princess BubbleGum', 'Ice King', 'Lemongrab'];
//console.log(advTime);

// displaying the content
function displayStuffs() {
	// clear it
	reset();
    //
    var search = $(this).attr("data-name");
    //
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=adventure+time+" + search + "&rating=pg-13&limit=10&api_key=dc6zaTOxFJmzC";
    //
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function(response) {
        //
        var advDiv = $('<div class="character">');
        //
    })
}

// rendering the buttons
function renderButtons() {
	//
    $("#at-buttons").empty();
    // loop through advTime array
    for (var i = 0; i < advTime.length; i++) {
    	// create a button
        var atButt = $("<button>");
        // math class! get it..?
        atButt.addClass("math");
        // Adding a data-attribute
        atButt.attr("data-name", advTime[i]);
        // Providing the initial button text
        atButt.text(advTime[i]);
        // Adding the button to the buttons-view div
        $("#at-buttons").append(atButt);
    }
}

// adding user input to the array
$("#submit-button").on("click", function(event) {
        event.preventDefault();
        // declare variable, reads and assigns user input as value
        var input = $("#user-input").val().trim();

        // add the user input into the array
        advTime.push(input);

        // call function to turn input into a button
        renderButtons();
      });

// resetting the display
function reset() {
	$('#at-section').empty();
}
// display the buttons
renderButtons();
