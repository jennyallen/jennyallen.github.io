$(document).ready(function() {
 	var silhouette = $("#silhouette").val();
	var submit = $("#submit_button");
	var x, price, rentalprice;

	submit.click(function() {
		silhouette = $("#silhouette").val();
		
		for (var i = 1; i <= 3; i ++) {
			x = "./images/" + silhouette + "/" + i + ".jpg";
			price = Math.floor(Math.random() * 10000);
			rentalprice = Math.floor(price/10);
			$("#column" + i).empty();
			$("#column" + i).append("<img src=\"" + x + "\">");
			$("#column" + i).append("<div> Retail Price = $" + price + " </div>");
			$("#column" + i).append("<div> Rental Price = $" + rentalprice + " </div>");
		}
    });

});s