var hours = ["9AM", "10Am", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var containerDiv = $('.container');

// this loop creates/appends the HTML columns and rows
for (var i = 0; i < hours.length; i++) {

// create row
var row = $("<div class='row'></div>"); 
// create column1 with .hour class
var column1 =$("<div class='col-sm-1 hour time-block'>" +hours[i]+ "</div>");

// create column2 with textarea
var column2 =$("<div class='col-sm-10'></div>");

// create column3 with .saveBtn class
var column3 = $("<div class='col-sm-1 saveBtn'></div>");

// create text area to add to columns
var textarea = $("<textarea></textarea><");

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



