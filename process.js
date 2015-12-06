// global value
current_radio_value = 0;
all_name_list = new Array();
left_list = new Array();
gold_list = new Array();
silver_list = new Array();
progress_list = new Array();
bronze_list = new Array();
absent_list = new Array();

{
// fake init
	var i;
	for(i=0;i<20;i++)
		all_name_list.push("宝贝"+ i);
	//console.log("init all name" + all_name_list);
	left_list = all_name_list;// 应该是deep copy
	list_chosen_list();
	list_left_list();
}


//switch board list
function switch_board(cur_radio)
{
 	// confirm 
 	confirm_edit();

 	// switch
 	value = cur_radio.value;
 	document.getElementById("radio_status").innerHTML = value;
 	if(value == "gold")	current_radio_value = 0;
 	else if(value == "silver") current_radio_value = 1;
 	else if(value == "progress") current_radio_value = 2;
 	else if(value == "bronze") current_radio_value = 3;
 	else if(value == "absent") current_radio_value = 4;
 	else console.log("Error!");

 	// display 
 	list_chosen_list();
 	list_left_list();
 	update_boards();

}

// 列出当前榜单的chosen list
function list_chosen_list()
{
	// clear display list first
	var chosen_tmp = document.getElementById("chosen_list");
	while (chosen_tmp.hasChildNodes()) {
		chosen_tmp.removeChild(chosen_tmp.lastChild);
	}
	var display_list;
	switch(current_radio_value)
	{
		case 0:
			display_list = gold_list;
			break;
		case 1:
			display_list = silver_list;
			break;
		case 2:
			display_list = progress_list;
			break;
		case 3:
			display_list = bronze_list;
			break;
		case 4:
			display_list = absent_list;
			break;
		default:
			console.log("Error!");
	}
	var i;
	for(i in display_list)
	{
		var dataSpan = document.createElement('span');
		dataSpan.innerHTML = " | <span>" + display_list[i] + "</span>";
		dataSpan.id = "board_span_id_" + i;
		var dataInput = document.createElement('input');
		dataInput.type = "checkbox";
		dataInput.id = "board_checkbox_id_" + i;
		dataInput.checked = true;
		dataSpan.appendChild(dataInput);
		/*
			<span id="c1">
			babyname <input type="checkbox" id="myCheck1">
			</span>
		*/
		chosen_tmp.appendChild(dataSpan);
	}
	

}
// show unchosen list
function list_left_list()
{
	// clear display list first
	var unchosen_tmp = document.getElementById("unchosen_list");
	while (unchosen_tmp.hasChildNodes()) {
    		unchosen_tmp.removeChild(unchosen_tmp.lastChild);
	}
	var i;
	for(i in left_list)
	{
		var dataSpan = document.createElement('span');
		dataSpan.innerHTML = " |  <span>"  + left_list[i] + "</span>";
		dataSpan.id = "unchosen_span_id_" + i;
		var dataInput = document.createElement('input');
		dataInput.type = "checkbox";
		dataInput.id = "unchosen_checkbox_id_" + i;
		dataSpan.appendChild(dataInput);
		/*
			<span id="c1">
			babyname<input type="checkbox" id="myCheck1">
			</span>
		*/
		unchosen_tmp.appendChild(dataSpan);
	}
}

// 按照这一次的check box状态，刷新该榜单人员名单
function confirm_edit()
{
	// 把chosen_list 和 unchosen_list 下面的所有checkbox状态读一遍
	var new_board_list = new Array();
	var new_left_list = new Array();
	var chosen = document.getElementById("chosen_list").children;
	for(var i=0;i<chosen.length;i++)
	{
		if(chosen[i].children[1].checked == true)
		{
			new_board_list.push(chosen[i].children[0].innerHTML);
		} else
		{
			new_left_list.push(chosen[i].children[0].innerHTML);
		}
	}
	var unchosen = document.getElementById("unchosen_list").children;
	for(var i=0;i<unchosen.length;i++)
	{
		if(unchosen[i].children[1].checked == true)
		{
			new_board_list.push(unchosen[i].children[0].innerHTML);
		} else
		{
			new_left_list.push(unchosen[i].children[0].innerHTML);
		}
	}
	
	switch(current_radio_value)
	{
		case 0:
			gold_list = new_board_list;
			break;
		case 1:
			silver_list = new_board_list;
			break;
		case 2:
			progress_list = new_board_list;
			break;
		case 3:
			bronze_list = new_board_list;
			break;
		case 4:
			absent_list = new_board_list;
			break;
		default:
			console.log("Error!");
	}
	left_list = new_left_list;
}

function update_boards()
{
	var i;
	var tmp = document.getElementById("gold_board");
	while (tmp.hasChildNodes()) {
    		tmp.removeChild(tmp.lastChild);
	}
	var tmp = document.getElementById("silver_board");
	while (tmp.hasChildNodes()) {
    		tmp.removeChild(tmp.lastChild);
	}
	var tmp = document.getElementById("progress_board");
	while (tmp.hasChildNodes()) {
    		tmp.removeChild(tmp.lastChild);
	}
	var tmp = document.getElementById("bronze_board");
	while (tmp.hasChildNodes()) {
    		tmp.removeChild(tmp.lastChild);
	}
	var tmp = document.getElementById("absent_board");
	while (tmp.hasChildNodes()) {
    		tmp.removeChild(tmp.lastChild);
	}
	for(i in gold_list)
	{
		var dataSpan = document.createElement('span');
		dataSpan.innerHTML = " | " + gold_list[i];
		document.getElementById("gold_board").appendChild(dataSpan);
	}
	for(i in silver_list)
	{
		var dataSpan = document.createElement('span');
		dataSpan.innerHTML = " | " + silver_list[i];
		document.getElementById("silver_board").appendChild(dataSpan);
	}
	for(i in progress_list)
	{
		var dataSpan = document.createElement('span');
		dataSpan.innerHTML = " | " + progress_list[i];
		document.getElementById("progress_board").appendChild(dataSpan);
	}
	for(i in bronze_list)
	{
		var dataSpan = document.createElement('span');
		dataSpan.innerHTML = " | " + bronze_list[i];
		document.getElementById("bronze_board").appendChild(dataSpan);
	}
	for(i in absent_list)
	{
		var dataSpan = document.createElement('span');
		dataSpan.innerHTML = " | " + absent_list[i];
		document.getElementById("absent_board").appendChild(dataSpan);
	}
}

function output()
{


}
