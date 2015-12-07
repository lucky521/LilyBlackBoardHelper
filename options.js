// Saves options to localStorage.

// check if newUrl has been in the localStorage
/*
function checkExisted(newUrl){
	var num = localStorage["count"];
	for(var i=0; i< parseInt(num); ++i){
		var urli = "url" + i;
		var url = localStorage[urli];
		if(newUrl==url) return true;
	}
	return false;
}

//  format all the input url
function format_url(url) {
	if(!url)
		return url;

	return url;
}

function save_redirecturl_option() {
	var url = document.getElementById("redirectUrl").value;
	url = format_url(url);
	if(url)	{
		localStorage["redirectUrl"] = url;
	}
	else
		alert("Sorry, you have to enter a redirect URL.");

	repaint_options_page();
}


function restore_defaulturl_option() {
	localStorage["redirectUrl"] = localStorage["default_redirectUrl"];

	repaint_options_page();
}


function save_time_option() {
	var select1 = document.getElementById("starttime");
	var starttimevalue = select1.options[select1.options.selectedIndex].value;

	var select2 = document.getElementById("endtime");
	var endtimevalue = select2.options[select2.options.selectedIndex].value;

	if(parseInt(starttimevalue) <= parseInt(endtimevalue)) {
		localStorage["starttime"] = starttimevalue;
		localStorage["endtime"] = endtimevalue;
	}
	else
		alert("Sorry, you got a wrong time.");

	repaint_options_page();
}


function restore_defaulttime_option() {
	localStorage["starttime"]  = localStorage["default_starttime"];
	localStorage["endtime"] = localStorage["default_endtime"];

	repaint_options_page();
}


// XXX:An algorithm to rebuild the whole list written by myself, I love it!!!
// Attention I should keep the list continuous when I delete urls randomly, so...
function delete_oneurl_option() {
	var s = document.getElementById("currenturllist");
	var left, right;
	left = 0;
	right = s.length - 1;
	if(left == right)
		localStorage["count"] = 0;
	else {
		while(left < right){
			while(left < right && s.options[right].selected)
				right--;
			while(left < right && !s.options[left].selected)
				left++;

			if(left < right)
			{
				localStorage["url" + left] = localStorage["url" + right];
				localStorage["url" + right] = "";
				left++;
				right--;
			}
		}
		if(right == left && s.options[right].selected)
			localStorage["count"] = right;
		else
			localStorage["count"] = right+1;
	}
	repaint_options_page();
}


function add_oneurl_option() {	
	var url = document.getElementById("blockUrl").value;  //get the url
	url = format_url(url);
	if(url) {
		var existed = checkExisted(url);
		if(!existed){	// add url when it is not existed in the localStorage
			var num = localStorage["count"];
			var urli = "url" + num;
			localStorage[urli] = url;
			localStorage["count"] = parseInt(num) + 1;
		}
	}
	else
		alert("Sorry, you have to enter an block URL.");

	repaint_options_page();
}


function clear_allurl_option() {
	var num = localStorage["count"];
	for(var i=0; i<parseInt(num); ++i){
		var urli = "url" + i;
		localStorage[urli] = "";
	}
	localStorage["count"] = 0;

	repaint_options_page();
}


//Repaint UI
function repaint_options_page() {
	document.getElementById("default_redirectUrl").innerHTML = localStorage["redirectUrl"];
	document.getElementById("default_starttime").innerHTML = localStorage["starttime"];
	document.getElementById("default_endtime").innerHTML = localStorage["endtime"];
	document.getElementById("listnum").innerHTML = localStorage["count"];
	var i;
	//clear currenturl select
	var select_num = document.getElementById("currenturllist").length;
	for(i=0;i<parseInt(select_num);i++){
		document.getElementById("currenturllist").remove(0);
	}

	var num = localStorage["count"];
	for(i=0;i<parseInt(num);i++){
		var tmp = document.createElement('option');
		tmp.text = localStorage["url" + i];
		tmp.value = "url" + i;
		document.getElementById("currenturllist").add(tmp);
	}

}


// handle the event
document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#btn_save_redirectUrl').addEventListener('click', save_redirecturl_option);  //通过id找到相应元素,执行响应的函数
	document.querySelector('#btn_todefault_url').addEventListener('click', restore_defaulturl_option);

	document.querySelector('#btn_save_blocktime').addEventListener('click', save_time_option);
	document.querySelector('#btn_todefault_time').addEventListener('click', restore_defaulttime_option);

	document.querySelector('#btn_save_newurl').addEventListener('click', add_oneurl_option);

	document.querySelector('#btn_save_removeurl').addEventListener('click', delete_oneurl_option);
	document.querySelector('#btn_clearall').addEventListener('click', clear_allurl_option);

	window.addEventListener('load', repaint_options_page);
});

*/
