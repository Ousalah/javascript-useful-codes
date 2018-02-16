/*
  Project Name: Youtube Playlist Progression
  Description: Get the total time and the number of videos of a playlist, and your progress (How many videos you have finished) 
  Author: Mohamed Ousalah
  Author URI: http://MohamedOusalah.com
  Version: 1.0

  How to use it :
  	1) Go to any playlist you want to get your progress on it.
  	2) Open the browser console (Ctrl + Shift + I).
  	3) Then copy and pass this code on it.
*/

// 1) ##### get all lectures #####
lectures = document.querySelectorAll("#overlays .ytd-thumbnail-overlay-time-status-renderer");
// varialble to store totla time of all lectures 
lectures_total_time = 0;
// get total time of all lectures
for (var i = 0, len = lectures.length; i < len; i++) {
	// increment total time, and replace (:) with (.)
	lectures_total_time += parseFloat((lectures[i].innerHTML).replace(":", "."));
}
// fixe the format of the total time , to remove the decimal part
lectures_total_time = lectures_total_time.toFixed(0);
// get total hours of all lectures
var lectures_hours = Math.floor( lectures_total_time / 60);
// get total minutes of all lectures
var lectures_minutes = lectures_total_time % 60;
// reformat hours and minutes ex: if 5 => 05  and if 12 => 12
lectures_hours = lectures_hours < 10 ? "0" + lectures_hours : lectures_hours;
lectures_minutes = lectures_minutes < 10 ? "0" + lectures_minutes : lectures_minutes;

// 2) ##### get all watched lectures #####
watched = document.querySelectorAll("#overlays #progress");
// varialble to store totla time of all completed lectures
completed_total_time = 0;
// variable to store total of all completed lectures
completed_count = 0;
// get total time of all completed lectures
for (var i = 0, len = watched.length; i < len; i++) {
	// check if the lecture completed
	if(watched[i].style.width == '100%'){
		// increment total time of completed lectures, and replace (:) with (.)
		completed_total_time += parseFloat((watched[i].parentNode.parentNode.childNodes[1].childNodes[0].innerHTML).replace(":", "."));
		completed_count++;
	}
}
// fixe the format of the total time , to remove the decimal part
completed_total_time = completed_total_time.toFixed(0);
// get total hours of all completed lectures
var completed_hours = Math.floor( completed_total_time / 60);
// get total minutes of all completed lectures
var completed_minutes = completed_total_time % 60;
// reformat hours and minutes ex: if 5 => 05  and if 12 => 12
completed_hours = completed_hours < 10 ? "0" + completed_hours : completed_hours;
completed_minutes = completed_minutes < 10 ? "0" + completed_minutes : completed_minutes;

// 3) ##### show the results (you can use "console.log"  or "alert") #####
number_of_videos = document.querySelectorAll("#stats .ytd-playlist-sidebar-primary-info-renderer")[0].innerHTML;
// check if this value separed by (space) or (&nbsp;), then split it
number_of_videos = number_of_videos.indexOf("&nbsp;") !== -1 ? Number(number_of_videos.split("&nbsp;")[0]) : Number(number_of_videos.split(" ")[0]);
// check if the final result was correct
if (number_of_videos == lectures.length) {
	// get number of no completed lectures and reformat it ex: if 5 => 05  and if 12 => 12
	var not_completed_lectures = watched.length - completed_count;
	not_completed_lectures = not_completed_lectures < 10 ? "0" + not_completed_lectures : not_completed_lectures;
	
	// reformat "completed_count" and "lectures_count" ex: if 5 => 05  and if 12 => 12, etc ...
	completed_count = completed_count < 10 ? "0" + completed_count : completed_count;
	completed_count = completed_count < 100 ? "0" + completed_count : completed_count;
	var lectures_count = lectures.length;
	lectures_count = lectures_count < 10 ? "0" + lectures_count : lectures_count;
	lectures_count = lectures_count < 100 ? "0" + lectures_count : lectures_count;

	// get and show the final result
	result_message = "#######################################\n";
	result_message += "#                                     #\n";
	result_message += "#  " + completed_count + "/" + lectures_count + " completed lectures         #\n";
	result_message += "#                                     #\n";
	result_message += "#  " + completed_hours + ":" + completed_minutes + "/" + lectures_hours + ":" + lectures_minutes + " completed hours        #\n";
	result_message += "#                                     #\n";
	result_message += "#  " + not_completed_lectures + " lectures not completed          #\n";
	result_message += "#                                     #\n";
	result_message += "#######################################";
	console.log("%c" + result_message, "background: #222; color: #bada55; font-size: 16px; text-decoration: none;");

	// if the final result was not correct then show error message
} else {
	alert("There's something wrong, please refresh the page and try again.");
}
