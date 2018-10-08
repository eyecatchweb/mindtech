	(function(){

	var unit = 100;
	var canvas, context, canvas2, context2,height, width, xAxis, yAxis, draw;

	function init() {
		canvas = document.getElementById("sineCanvas");
		canvas.width = document.documentElement.clientWidth; 
		canvas.height = 300;
		context = canvas.getContext("2d");
		height = canvas.height;
		width = canvas.width;
		xAxis = Math.floor(height/2);
		yAxis = 0;

		draw();
	}
	function draw(){
		context.clearRect(0, 0, width, height);

		drawWave('#f79233', 1, 3, 0);

		// Update the time and draw again
		draw.seconds = draw.seconds + .009;
		draw.t = draw.seconds*Math.PI;
		setTimeout(draw, 35);
	};
	draw.seconds = 0;
	draw.t = 0;

	function drawWave(fillcolor, alpha, zoom, delay) {
		context.fillStyle = fillcolor;
		context.globalAlpha = alpha;

		context.beginPath(); 
		drawSine(draw.t / 0.5, zoom, delay);
		context.lineTo(width + 10, height); 
		context.lineTo(0, height); 
		context.closePath() 
		context.fill(); 
	}

	function drawSine(t, zoom, delay) {
		var x = t; 
		var y = Math.sin(x)/zoom;
		context.moveTo(yAxis, unit*y+xAxis); 

		// Loop to draw segments 
		for (i = yAxis; i <= width + 10; i += 10) {
			x = t+(-yAxis+i)/unit/zoom;
			y = Math.sin(x - delay)/3;
			context.lineTo(i, unit*y+xAxis);
		}
	}

	init();

})();

