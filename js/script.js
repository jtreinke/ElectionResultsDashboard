$(document).ready(function() {

	color_change ();

	function color_change() {
	$("#one").delay(0500).animate({"background-color": "#f43636"},0500);
    $("#one").delay(1000).animate({"background-color": "#673ab7"},0500);
    $("#one").delay(1500).animate({"background-color": "#3f51b5"},0500);
    $("#one").delay(2000).animate({"background-color": "#3f51b5"},0500,color_change);
}

});

	

 