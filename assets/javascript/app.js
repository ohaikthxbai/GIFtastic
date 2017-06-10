/* 
SUDOWOODO (pseudocode)
utilize the GIPHY api to generate gifs based on the user's search

create an array of content
	searched content will be added to the array
each element from the array will be a button
	previously searched content will become buttons
searched content should bring up gifs related to what the user searched

*/

$(document).ready(function() {
// content array
var advTime = ['Finn the Human', 'Jake the Dog', 'BMO', 'Princess BubbleGum', 'Ice King', 'Lemongrab'];
//console.log(advTime);

// displaying the content
function displayStuffs() {
	// clearing the gif section
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
    	// assigning response to a variable for convenience
    	var apiData = response.data;
    	//testing
    	//console.log(apiData[1].images);
    	for (i = 0; i < apiData.length; i++) {
        // create a div to hold the gifs
        var advDiv = $('<div class="adv-char">');
        // store rating
        var rating = apiData[i].rating;
        // create an html element to display the rating
        var paraTing = $('<p>').text("Rating: " + rating);
        // create an img element
        var advGif = $('<img>');
        // adding properties to the gif
       	advGif.attr({
       		//"src": apiData[i].images.fixed_height_still.url,
       		"src": apiData[i].images.fixed_height.url,
       		"data-animated": apiData[i].images.fixed_height.url,
       		"data-still": apiData[i].images.fixed_height_still.url,
       		"data-state": "still"
       	});
       	advDiv.append(paraTing);
       	advDiv.append(advGif);
       	console.log(advGif);
       	/* 
       	note: prepending vs appending
       	prepend inserts as FIRST child
       	append inserts as LAST child
		*/
       	$("#at-gifs").prepend(advDiv);
       }
    });
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
	$('#at-gifs').empty();
}

//
$(document).on("click", ".math", displayStuffs);

// display the buttons
renderButtons();

});
