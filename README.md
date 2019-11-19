# day_planner
A simple calendar app for scheduling your work day.

# About
This work day scheduler was created using HTML, CSS, and Jquery so that users can better manage their time and increase their productivity. This planner makes it easy to schedule meetings, appointments, and add notes. Users can see their day at a glance and hours of the day (displayed in military time) are color coded so the user can easily see the present, past and future hours of their schedule. The color code key is as follows: Red = Present Hour, Gray = Past Hour, Green = Future Hour.

# How it works
This web application creates HTML dynamically by utilizing Jquery and a for loop to create the 9 row, 3 column layout. When the user clicks inside the middle column, they access a textarea which allows them to type in their notes and appointments. By clicking on the save button in the last column, the user stores their notes in local storage and the note is still available upon refreshing the page. To delete a note, the user can simply delete it in the text area, type something new, and save the new item by clicking the save button again. 

![scheduler](https://user-images.githubusercontent.com/53705501/69108789-bf7dca00-0a43-11ea-9fd6-5cf0acc9f7ec.png)


