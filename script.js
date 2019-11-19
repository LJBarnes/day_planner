
$(document).ready(function () {
    $("#currentDay").text("Today is: " + moment().format('MMMM Do YYYY'));


    var column1hours = ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    var hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
    var containerDiv = $('.container');
    // changed format to 24 hour/military hour because my if statements weren't working/things were getting weird with a 12 hr format
    // but I can't figure out how to get local storage to work if I substitute in column1hours (12 hr format)
    // even when I change the numbers to match "9AM", etc. it won't save the key.
    var currentTime = moment().format('HH');

    // var plannerDiv = $('.planner');


    function buildLoop() {
        // this loop creates/appends the HTML columns and rows
        for (var i = 0; i < hours.length; i++) {

            // create row
            var row = $("<div class='row'></div>");
            // create column1 with .hour class
            var column1 = $("<div class='col-sm-1 hour time-block'>" + hours[i] + "</div>");

            // create column2 with conditionals so color code can work
            if (currentTime === hours[i]) {
                var column2 = $("<div class='col-sm-10 planner present'></div>");
            }
            else if (currentTime > hours[i]) {
                var column2 = $("<div class='col-sm-10 planner past'></div>");
            }
            else {
                var column2 = $("<div class='col-sm-10 planner future'></div>");

            }
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

        }
        getSavedNotes();
        console.log("workingA");


        $(".saveBtn").click(function () {
            console.log("click");
            var time = $(this).siblings("div.time-block").text();
            console.log(time);
            console.log("workingz");
            var input = $(this).siblings("div.planner").children("textarea").val();
            console.log(input);

            localStorage.setItem(time, input);

        })
    }

    function getSavedNotes() {
        //essentially saying "textarea" value(go to local storage and get matching (time)    
        $("#09").val(localStorage.getItem("09"));
        $("#10").val(localStorage.getItem("10"));
        $("#11").val(localStorage.getItem("11"));
        $("#12").val(localStorage.getItem("12"));
        $("#13").val(localStorage.getItem("13"));
        $("#14").val(localStorage.getItem("14"));
        $("#15").val(localStorage.getItem("15"));
        $("#16").val(localStorage.getItem("16"));
        $("#17").val(localStorage.getItem("17"));

    }
    buildLoop();
    console.log("workingB");
    console.log(currentTime);
})

