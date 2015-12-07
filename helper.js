if(!localStorage["lily"])
{
	alert("小助手当前并不运行在Chrome插件状态！");
}


// global value
current_radio_value = 0;
all_name_list = new Array();
left_list = new Array();
gold_list = new Array();
silver_list = new Array();
progress_list = new Array();
bronze_list = new Array();
absent_list = new Array();

//original_array = ['田欣宁(Candy1)','陈梓盈(CoCo)','常桐溪(Nichole)','王凯伊(Cathy)','杨熙之(Sam)','刘子煊(Candy2)','沈僖卓(Lion)','杨明仪(Lucy)','赵心悦(Claier)','贺悦宸(David)','韩雨恒(Tommy)','陈若依(Eva)','陈锐恒(Henry)','田思垚(Emily)','杨俊妍(Angela)','刘昀奕(Amy)','余浩洋(Jason','Yu)','张文硕(Andy)','裴效源(Perry)','傅子睿(Tony)','欧阳丝雨(Sissie)','王嘉悦(Dora)','赵天翔(Jimmy)','连翊萱(Angel)'];
//console.log("all_name_list length: " + original_array.length)

window.onload = function()
{
	console.log(document.title);


	//all_name_list = original_array;
/*
	{
	// fake init
		var i;
		for(i=0;i<10;i++)
			all_name_list.push("宝贝"+ i);
	}
*/

	left_list = all_name_list;// 应该是deep copy
	list_chosen_list();
	list_left_list();
	document.getElementById("preview_btn").addEventListener("click", preview);
	document.getElementById("radio_gold").addEventListener("click", function(){switch_board("gold")});
	document.getElementById("radio_silver").addEventListener("click", function(){switch_board("silver")});
	document.getElementById("radio_progress").addEventListener("click", function(){switch_board("progress")});
	document.getElementById("radio_bronze").addEventListener("click", function(){switch_board("bronze")});
	document.getElementById("radio_absent").addEventListener("click", function(){switch_board("absent")});

	document.getElementById("manual_input_btn").addEventListener("click", read_from_textbox);


	if(all_name_list.length == 0)
	{
		alert("当前请先使用最下方的手工名单录入.");
	}

}


//switch board list
function switch_board(cur_radio)
{
 	// confirm 
 	confirm_edit();

 	// switch
 	document.getElementById("radio_status").innerHTML = cur_radio;
 	if(cur_radio == "gold")	current_radio_value = 0;
 	else if(cur_radio == "silver") current_radio_value = 1;
 	else if(cur_radio == "progress") current_radio_value = 2;
 	else if(cur_radio == "bronze") current_radio_value = 3;
 	else if(cur_radio == "absent") current_radio_value = 4;
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
	if(display_list.length == 0)
	{
		chosen_tmp.innerHTML = "当前为空";	
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
	var unchosen = document.getElementById("unchosen_list").children;

	if(chosen.length == 0 && unchosen.length == 0)
	{
		console.log("confirm_edit with empty display.")
		return;
	}

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


function preview()
{
	console.log("preview");
	if(all_name_list.length == 0)
	{
		alert("请先使用最下方的手工名单录入.");
	}

	confirm_edit();
	if(left_list.length > 0)
	{
		var ask = confirm("未勾选的宝贝儿: " + left_list + ".\n\n要将他们都放入银牌榜吗？");
		if (ask == true) {
		    silver_list = silver_list.concat(left_list);
		} else {
		    return;
		}
	}
	localStorage["all_name_list"] = all_name_list;
	localStorage["gold_list"]  = gold_list;
	localStorage["silver_list"]  = silver_list;
	localStorage["progress_list"]  = progress_list;
	localStorage["bronze_list"]  = bronze_list;
	localStorage["absent_list"]  = absent_list;
	window.open('template.html');
}


function read_from_textbox()
{
	var minput_str = document.getElementById("m_input").value;
	var minput_array = minput_str.split(" ");
	all_name_list = minput_array;
	console.log("手工录入：" + all_name_list + "  " + all_name_list.length);
	//console.log("minput_str：" + minput_str);
	var minput_array2 = minput_str.split(" ");
	left_list = minput_array2;
	console.log("手工录入：" + left_list + "  " + left_list.length);

	switch_board("gold");
}
