
// init
/*
    localStorage["all_name_list"] = all_name_list;
    localStorage["gold_list"]  = gold_list;
    localStorage["silver_list"]  = silver_list;
    localStorage["progress_list"]  = progress_list;
    localStorage["bronze_list"]  = bronze_list;
    localStorage["absent_list"]  = absent_list;
*/

function download(){

	console.log("download");

	saveAs(
      new Blob(
          [(new XMLSerializer).serializeToString(document)])
    , "preview.txt"
	);
	
	saveAs(
      new Blob(
          [(new XMLSerializer).serializeToString(document)]
        , {type: "application/xhtml+xml;charset=" + document.characterSet}
    )
    , "preview.xhtml"
	);
}

// replace template elements from localStorage
window.onload = function()
{
	if(localStorage["lily"])
	{
		document.getElementById("all_name_list").innerHTML = localStorage["all_name_list"].toString();
		document.getElementById("gold_list").innerHTML = localStorage["gold_list"].toString();
		document.getElementById("silver_list").innerHTML = localStorage["silver_list"].toString();
		document.getElementById("progress_list").innerHTML = localStorage["progress_list"].toString();
		document.getElementById("bronze_list").innerHTML = localStorage["bronze_list"].toString();
		document.getElementById("absent_list").innerHTML = localStorage["absent_list"].toString();
	}
	else
	{
		alert("小黑板助手当前并不在运行Chrome插件状态！");
		return;
	}

	download();

}