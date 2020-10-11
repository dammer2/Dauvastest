// U. Dammer. Version 1.5. Liestal  6.6.2020

var xmax,ymax; //Canvasgrösse 
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
xmax=window.innerWidth;
ctx.canvas.width=xmax;
ymax=window.innerHeight;
ctx.canvas.height=ymax;

//fullScreen();			// sorgt dafür, dass die Canvas das ganze Browserfenster ausfüllt




/*
var xmax, ymax										// Bildschirmgrösse in Pixeln, Ursprung oben links
function fillRect(x1,y1,w,h)						// ausgefülltes Rechteck: x1,y1, width, height
function rect(x1,y1,w,h)							// ohne Füllung, siehe setLineWidth
function fillRectCenter(xM,yM,width,height)			// zentriertes, ausgefülltes Rechteck: x,y: Zentrum des Rechtecks
function rectCenter(x,y,width,height)				// ohne Füllung, siehe setLineWidth
function fillRectCenterRotate(x,y,width,height,angle);  // ...gedreht um Winkel alpha im Uhrzeigersinn
function rectCenterRotate(x,y,width,height,angle);		// ...gedreht um Winkel alpha im Uhrzeigersinn
function fillRectRotate(x,y,width,height,angle);		// gedreht um den unteren linken Eckpunkt
function rectRotate(x,y,width,height,angle);			// gedreht um den unteren linken Eckpunkt

function fillTriangle(x1,y1,x2,y2,x3,y3)			// Drreieck aus 3 Punkte
function triangle(x1,y1,x2,y2,x3,y3)						
function fillEquiTriangle(x1,y1,a)					// gleichseitiges Dreieck
function equiTriangle(x,y,a)
						
function line(x1,y1,x2,y2)

function fillCircle(x,y,radius)
function circle(x,y,radius)
function fillOval(x,y,rx,ry);
function oval(x,y,rx,ry);
fillOvalRotate(x,y,rx,ry,alpha);

function drawText(x,y,text, size);
function drawTextFont(x,y,text,size,font)
function fillPoly(flatArray)						// Polygon e.g. [0,0,100,100,70,0]
function poly(flatArray)

function setFillColor(farbe)						// z.B. "FF2288" im Hex Format oder "blue"
function setFillColorRGB(r,g,b)						
function setLineColor(farbe)
function setLineColorRGB(r,g,b)
function setLineWidth(d)
function setBackgroundColorRGB(r,g,b)
function setBackgroundColor(farbe)					// siehe auch http://tomheller.de/theholycymbal/html-farben.html
function clearScreen()
fullScreen();										// passt canvas dem Fenster an

Profidokumentation: https://www.w3schools.com/html/html5_canvas.asp and https://www.w3schools.com/tags/ref_canvas.asp
*/


function fillEquiTriangle(x,y,a){
	fillTriangle(x,y,x+a,y,x+a/2, y-Math.sqrt(3)*a/2);
}

function equiTriangle(x,y,a){
	triangle(x,y,x+a,y,x+a/2, y-Math.sqrt(3)*a/2);
}

function fillTriangle(x1,y1,x2,y2,x3,y3){
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.lineTo(x3,y3);
	ctx.closePath();
	ctx.fill();
}

function triangle(x1,y1,x2,y2,x3,y3){
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.lineTo(x3,y3);
	ctx.closePath();
	ctx.stroke();
}

function fillRect(x1,y1,w,h){						// Mitte, Breite, Höhe
	ctx.fillRect(x1,y1,w,h);
}

function fillRectCenterRotate(x,y,width,height,alpha){						
	ctx.save();
	ctx.translate(x,y);	
	ctx.rotate(alpha*Math.PI/180);
	ctx.fillRect(-width/2,-height/2,width, height);
	ctx.restore();
}

function fillRectRotate(x,y,width,height,alpha){						
	ctx.save();
	ctx.translate(x,y);	
	ctx.rotate(alpha*Math.PI/180);
	ctx.fillRect(0,0,width, height);
	ctx.restore();
}

function rectCenterRotate(x,y,width,height,alpha){						
	ctx.save();
	ctx.translate(x,y);	
	ctx.rotate(alpha*Math.PI/180);
	ctx.strokeRect(-width/2,-height/2,width, height);
	ctx.restore();
}

function rectRotate(x,y,width,height,alpha){										
	ctx.save();
	ctx.translate(x, y);	
	ctx.rotate(alpha*Math.PI/180);
	//ctx.strokeRect(-width/2,-height/2,width, height);
	ctx.strokeRect(0,0,width, height);
	ctx.restore();
}

function rect(x1,y1,w,h){						// Mitte, Breite, Höhe
	ctx.strokeRect(x1,y1,w,h);
}

function rectCenter(x,y,width,height){						// Mitte, Breite, Höhe
	rect(x-0.5*width, y-0.5*height,width, height);
}

function fillRectCenter(x,y,width,height){						// Mitte, Breite, Höhe
	ctx.fillRect(x-0.5*width, y-0.5*height,width, height);
}

function setFillColor(farbe){
	ctx.fillStyle = farbe;
}

function setLineColor(farbe){
	ctx.strokeStyle =farbe;
    ctx.stroke();
}

function setLineWidth(d){
	ctx.lineWidth=d;
}

function setFillColorRGB(r,g,b){
	var farbe="rgb("+r+","+g+","+b+")";
	ctx.fillStyle = farbe;
	}
	
function setLineColorRGB(r,g,b){
	var farbe="rgb("+r+","+g+","+b+")";
	ctx.strokeStyle =farbe;
    //ctx.stroke();
	}
	
function line(x1,y1,x2,y2){
	ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}


	
function fullScreen(){
	xmax=window.innerWidth;
	ctx.canvas.width=xmax;
	ymax=window.innerHeight;
	ctx.canvas.height=ymax;
}

function fillCircle(x,y,a){
	ctx.beginPath();
	ctx.arc(x,y,a,0,Math.PI*2,true);
	ctx.closePath();
	ctx.fill();
}

function circle(x,y,a){
	ctx.beginPath();
	ctx.arc(x,y,a,0,Math.PI*2,true);
	ctx.closePath();
    ctx.stroke();
}

function drawText(x,y,text,a){
	ctx.font=a+"px Georgia";
	ctx.fillText(text,x,y);
}

function drawTextFont(x,y,text,a,font){
	ctx.font=a+"px "+font;
	ctx.fillText(text,x,y);
}

function setBackgroundColorRGB(r,g,b){
	document.getElementById("myCanvas").style.backgroundColor = "rgb("+r+","+g+","+b+")";
	}
 
function setBackgroundColor(farbe){
	document.getElementById("myCanvas").style.backgroundColor =farbe;
}

function fillOval(x,y,rx,ry){
      ctx.save();
      ctx.translate(x,y);
      ctx.scale(1,ry/rx);
      ctx.beginPath();
      ctx.arc(0, 0, rx, 0, 2 * Math.PI, false);
      ctx.restore();
      ctx.fill();     
}
 
 function oval(x,y,rx,ry){
      ctx.save();
      ctx.translate(x,y);
      ctx.scale(1,ry/rx);
      ctx.beginPath();
      ctx.arc(0, 0, rx, 0, 2 * Math.PI, false);
      ctx.restore();
      ctx.stroke();
}

function fillOvalRotate(x,y,rx,ry,alpha){
      ctx.save();
      ctx.translate(x,y);
	  ctx.rotate(alpha*Math.PI/180);
      ctx.scale(1,ry/rx);
      ctx.beginPath();
      ctx.arc(0, 0, rx, 0, 2 * Math.PI, false);
      ctx.restore();
      ctx.fill();     
}

function fillPoly(flatArray){		// e.g. [0,0,100,100,50,0]
	// copy array
	var shape = flatArray.slice(0);
	ctx.beginPath();
	ctx.moveTo(shape.shift(), shape.shift());
	while(shape.length) {
	  ctx.lineTo(shape.shift(), shape.shift());
	}
	ctx.closePath();
	ctx.fill();
}

function poly(flatArray){		// e.g. [0,0,100,100,50,0]
	// copy array
	var shape = flatArray.slice(0);
	ctx.beginPath();
	ctx.moveTo(shape.shift(), shape.shift());
	while(shape.length) {
	  ctx.lineTo(shape.shift(), shape.shift());
	}
	ctx.closePath();
	ctx.stroke();
}

function clearScreen(){
	ctx.clearRect(0,0,xmax,ymax);
}

/*
// Maus und Canvas
c.addEventListener('mousedown',function(evt){setDot(evt)},false);
//c.addEventListener('mousemove',function(evt){setDot(evt)},false);

			
			
			function setDot(evt){
				var mousePos=getMousePos(c,evt);
				circle(mousePos.x, mousePos.y,10);
			}
			function getMousePos(c,evt){
				var rect=c.getBoundingClientRect();
				return {								//Objekt zur Parameterübergabe
				x:evt.clientX-rect.left,
				y:evt.clientY-rect.top
				};
			}
*/

/* Tastatur und Canvas

//Jquerie ist nötig! Vielleicht geht es auch einfacher
src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
$(document).keydown(onKeyDown);		
$(document).keyup(onKeyUp);
			
function onKeyDown(evt){
	console.log(evt.keyCode);
}

function onKeyUp(evt){
	console.log(evt.keyCode);
}

*/


