lectures = document.querySelectorAll("#overlays .ytd-thumbnail-overlay-time-status-renderer");
lectures_total_time = 0;
lectures_count = 0;
for (var i = 0, len = lectures.length; i < len; i++) {
	lectures_total_time += parseFloat(lectures[i].innerHTML);
	lectures_count++; 
}
var lectures_hours = Math.floor( lectures_total_time / 60);
var lectures_minutes = lectures_total_time % 60;
lectures_hours = lectures_hours < 10 ? "0" + lectures_hours : lectures_hours;
lectures_minutes = lectures_minutes < 10 ? "0" + lectures_minutes : lectures_minutes;

watched = document.querySelectorAll("#overlays #progress");
completed_total_time = 0;
completed_count = 0;
for (var i = 0, len = watched.length; i < len; i++) {
	if(watched[i].style.width == '100%'){
		completed_total_time += parseFloat(watched[i].parentNode.parentNode.childNodes[1].childNodes[0].innerHTML);
		completed_count++;
	}
}
var completed_hours = Math.floor( completed_total_time / 60);
var completed_minutes = completed_total_time % 60;
completed_hours = completed_hours < 10 ? "0" + completed_hours : completed_hours;
completed_minutes = completed_minutes < 10 ? "0" + completed_minutes : completed_minutes;
console.log(completed_count + "/" + lectures_count + " completed lectures \n\n" + completed_hours + ":" + completed_minutes + "/" + lectures_hours + ":" + lectures_minutes + " completed hours \n\n" + (watched.length - completed_count) + " no completed lectures");
