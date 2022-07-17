canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=1;
ctx.rect(150,143,430,200)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=1;
ctx.arc(290,190,40,0,2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=1;
ctx.arc(330,190,40,0,2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=1;
ctx.arc(380,190,40,0,2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=1;
ctx.arc(310,220,35,0,2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=1;
ctx.arc(370,220,35,0,2*Math.PI)
ctx.stroke();








