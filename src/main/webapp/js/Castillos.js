function Castillos(){};

Castillos.init = function(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	
	context.fillRect(10, 10, 50, 50);
};
