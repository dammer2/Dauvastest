console.log(xmax,ymax)
var d=30, a=50;        //Distanz, Kantenlänge
var x,y;                // Koordinaten: Kreismittelpunkt, Rechteck oben links, Dreieck unten rechts
/*
//Kreis
setFillColor("red");
x=d+a; y=d+a;
fillCircle(x,y,a);

//Quadrat
setFillColor("blue");
x=d; y=2*d+2*a;
fillRect(x,y,2*a,2*a);

//Dreieck
x=d; y=3*d+5.7*a;
setFillColor("green");
fillEquiTriangle(x,y,2*a);

//Kreis
setFillColor("red");
x=d+a; y=d+a;
for (var i=0; i<5; i++){
    fillCircle(x,y,a);
    x=x+2*a+d;
}       


//Quadrat
setFillColor("blue");
x=d; y=2*d+2*a;
for (var i=0; i<5; i++){
    fillRect(x,y,2*a,2*a);
    x=x+2*a+d;
}

//Dreieck
x=d; y=3*d+5.7*a;
setFillColor("green");
for (var i=0; i<5; i++){
   fillEquiTriangle(x,y,2*a);
    x=x+2*a+d;
}

//Kreis
setFillColor("red");
x=d+a; y=d+a;
var r=a;
for (var i=0; i<5; i++){
    fillCircle(x,y,r);
    x=x+2*a+d;
    r=r*0.9;
}       


//Quadrat
setFillColor("blue");
x=d; y=2*d+2*a;
var a_hier=a;
for (var i=0; i<5; i++){
    fillRect(x,y,2*a_hier,2*a_hier);
    x=x+2*a+d;
    a_hier=a_hier*0.8
}

//Dreieck
x=d; y=3*d+5.7*a;
a_hier=a;
setFillColor("green");
for (var i=0; i<5; i++){
   fillEquiTriangle(x,y,2*a_hier);
    x=x+2*a+d;
    a_hier=a_hier-20;
}

//Kreis
setFillColor("red");
x=d+a; y=d+a;
var r=a;
for (var i=0; i<6; i++){
    fillCircle(x,y,r);
    x=x+2*r+d;
    r=r*0.9;
}       


//Quadrat
setFillColor("blue");
x=d; y=2*d+2*a;
var a_hier=a;
for (var i=0; i<6; i++){
    fillRect(x,y,2*a_hier,2*a_hier);
    x=x+2*a_hier+d;
    a_hier=a_hier*0.8
}

//Dreieck
x=d; y=3*d+5.7*a;
a_hier=a;
setFillColor("green");
for (var i=0; i<6; i++){
   fillEquiTriangle(x,y,2*a_hier);
    x=x+2*a_hier+d;
    a_hier=a_hier-10;
}

//Kreis

x=d+a; y=d+a;
for (var i=0; i<5; i++){
    setFillColorRGB(255, 40*i,0);
    fillCircle(x,y,a);
    x=x+2*a+d;
}       


//Quadrat

x=d; y=2*d+2*a;
for (var i=0; i<5; i++){
    setFillColorRGB(0, 50*i,255);
    fillRect(x,y,2*a,2*a);
    x=x+2*a+d;
}

//Dreieck
x=d; y=3*d+5.7*a;

for (var i=0; i<5; i++){
    setFillColorRGB(50, 255,50*i);
    fillEquiTriangle(x,y,2*a);
    x=x+2*a+d;
}


//Kreis
var lineWidth=1;
x=d+a; y=d+a;
for (var i=0; i<5; i++){
    setLineWidth(lineWidth+=4);
    setLineColorRGB(255, 40*i,0);
    circle(x,y,a);
    x=x+2*a+d;
}       


//Quadrat
lineWidth=15;
x=d; y=2*d+2*a;
for (var i=0; i<5; i++){
    setLineWidth(lineWidth-=3);
    setLineColorRGB(0, 50*i,255);
    rect(x,y,2*a,2*a);
    x=x+2*a+d;
}

//Dreieck
x=d; y=3*d+5.7*a;
lineWidth=5;
for (var i=0; i<5; i++){
    setLineColorRGB(50, 255,50*i);
    equiTriangle(x,y,2*a);
    x=x+2*a+d;
}
*/

//Kreis
setFillColor("red");
x=d+a; y=d+a;
for (var i=0; i<5; i++){
    fillOval(x,y,a-i*10,a);
    x=x+2*a+d;
}       


//Quadrat
setFillColor("blue");
x=d; y=2*d+2*a;
for (var i=0; i<5; i++){
    fillRect(x,y,2*a-i*20,2*a);
    x=x+2*a+d;
}

//Dreieck
x=d; y=3*d+5.7*a;
setFillColor("green");
for (var i=0; i<5; i++){
   fillEquiTriangle(x,y,2*a);
    x=x+2*a+d;
}