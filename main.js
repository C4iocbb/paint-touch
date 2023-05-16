
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
widthOfLine = 2;

var posicaox, posicaoy;

var width=screen.width;
var nova_altura=screen.height-300;
var nova_largura=screen.width-70;

if (width<992){

    doucument.getElementById("myCanvas").width=nova_largura;
    doucument.getElementById("myCanvas").height=nova_altura;
}
canvas.addEventListener("touch",toque)

function toque (e){
    posicaox=e.touches[0].clientX-canvas.offsetLeft;
    posicaoy=e.touches[0].clientY-canvas.offsetTop;
    
}

canvas.addEventListener("touchMove",linha)

function linha (e){
    tracox=e.touches[0].clientX-canvas.offsetLeft
    tracoy=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;

    console.log("Ultima posição das coordenadas x e y = ");
    console.log("x = " + posicaox + "y = " + posicaoy);
    ctx.moveTo(posicaox,posicaoy);

    console.log("Posição atual das coordenadas x e y = ");
    console.log("x  = " + tracox + "y = " + tracoy);
    ctx.lineTo(tracox,tracoy);
    ctx.stroke();
        

    posicaox = tracox; 
    posicaoy = tracoy;
}
