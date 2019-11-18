$(document).ready(function () {

    $("#currentDay").text("Today is: "+ moment().format('MMMM Do YYYY'));
    
    // Global Variables
    var hours = ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM"]
    var containerDiv = $('.container');
    var currentTime = moment().format('hA');
    // var plannerDiv = $('.planner');
    

    function buildLoop() {
        // this loop creates/appends the HTML columns and rows
        for (var i = 0; i < hours.length; i++) {

            // create row
            var row = $("<div class='row'></div>");
            // create column1 with .hour class
            var column1 = $("<div class='col-sm-1 hour time-block'>" + hours[i] + "</div>");

            // create column2 with textarea
            var column2 = $("<div class='col-sm-10 planner'></div>");
            // $('.planner').attr("id", );

            // create column3 with .saveBtn class
            var column3 = $("<div class='col-sm-1 saveBtn'></div>");

            // create text area to add to columns
            var textarea = $("<textarea></textarea><");
            textarea.attr("id", hours[i]);

            // Save button icon to add to column 3
            var saveIcon = $("<i class='fas fa-save fa-2x'></i>");
            // append col1 to row
            row.append(column1);

            // append col2 to row
            row.append(column2);

            // append textarea to col2
            column2.append(textarea);
            // append col3 to row
            row.append(column3);
            // append button to column 3 with icon inside
            column3.append(saveIcon);

            // append all to container div
            containerDiv.append(row)

            if (currentTime === hours[i]) {
                $(".planner").addClass("present");
            }

            else if (currentTime => hours[i]) {
                $(".planner").addClass("past");
            }
            // // this one breaks the code, have no idea why
            //  else if (currentTime =< hour[i]) {
            //     $(".planner").addClass("future");
            // }

        }
        getSavedNotes();
        console.log("workingA");
        $(".saveBtn").click(function () {
            var time = $(this).siblings("div.time-block").text();
            console.log(time);
            console.log("click");
            var input = $(this).siblings("div.planner").children("textarea").val();
            console.log(input);
    
            localStorage.setItem(time, input);
    
        })
    }

   function getSavedNotes() {
    //"textarea" value(go to local storage and get )    
   $("#9AM").val(localStorage.getItem("9AM"));
   $("#10AM").val(localStorage.getItem("10AM"));
   $("#11AM").val(localStorage.getItem("11AM"));
   $("#12PM").val(localStorage.getItem("12PM"));
   $("#1PM").val(localStorage.getItem("1PM"));
   $("#2PM").val(localStorage.getItem("2PM"));
   $("#3PM").val(localStorage.getItem("3PM"));
   $("#4PM").val(localStorage.getItem("4PM"));
   $("#5PM").val(localStorage.getItem("5PM"));
    
    }
    buildLoop();
    console.log("workingB");
    console.log(currentTime);
})

