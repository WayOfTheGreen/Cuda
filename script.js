$(document).ready(function(){
	/**======================
		PORTFOLIO
	=======================*/
	$("#web-items").hide();
	$("#app-items").hide();
	$("#icons-items").hide();

    $("#all").click(function(){
        $("#web-items").hide();
        $("#app-items").hide();
		$("#icons-items").hide();	
        $("#all-items").show();
    });

    $("#web").click(function(){
        $("#all-items").hide();
        $("#app-items").hide();
		$("#icons-items").hide();	
        $("#web-items").show();
    });

    $("#apps").click(function(){
        $("#all-items").hide();
        $("#web-items").hide();
		$("#icons-items").hide();	
        $("#app-items").show();
    });

    $("#icons").click(function(){
        $("#all-items").hide();
        $("#app-items").hide();
		$("#web-items").hide();	
        $("#icons-items").show();
    });
});