let canvas;
let ctx;
let fullCanvasHeight;
let fullCanvasWidth;
let currentX;
let currentY;
let xUp;
let yUp;

function setEyeCatchers(){
    canvas = document.getElementById("eyecatcher");
    ctx = canvas.getContext("2d");
    fullCanvasHeight = canvas.getBoundingClientRect().height;
    fullCanvasWidth = canvas.getBoundingClientRect().width;
    currentX = 0;
    currentY = 0;
    xUp = true;
    yUp = true;
}

function eyecatch(){
    ctx.clearRect(0, 0, fullCanvasWidth, fullCanvasHeight);
    if(currentX == 0) console.log(fullCanvasHeight + ", " + fullCanvasWidth);

    ctx.beginPath();
    ctx.moveTo(currentX, currentY);

    xUp? currentX +=10 : currentX-=10;
    yUp? currentY +=10 : currentY-=10;

    ctx.lineTo(currentX, currentY);
    
    if(currentX >= fullCanvasWidth){xUp = false;}
    if(currentX <= 0){xUp = true;}

    if(currentY >= fullCanvasHeight){yUp = false;}
    if(currentY <= 0){yUp = true;}

    ctx.stroke();

    setTimeout(eyecatch, 500);
}

const divAnimated = document.getElementById("eyecatcherCSS");
let counter = 5;
let counter2 = 10;
let upCount = true;
let x = 0;
function eyecatch2(){
    /*" + "closest-side at " + (x) + "% 55%" + 
     ", */
    divAnimated.style.backgroundImage = "repeating-radial-gradient(red " + counter + "%, yellow "+ (counter+5) + "%, green "+ (counter+10) + "%)";
    //divAnimated.style.backgroundImage = "conic-gradient(from " + (counter*3) + "deg, red " + counter + "deg, yellow "+ (counter*2) + "deg, green "+ (counter*4) + "deg, red "
    //                                    + (counter*6) + "deg)";
    // if(upCount){
    //     counter++;
    //     x+=2;
    //  } else {
    //     counter--;
    //     x-=2;
    //  }
    // counter2+=2;
    // if(counter == 50) {
    //     upCount = false;
    //     counter2 = 10;
    // }
    // if(counter == 5) {
    //     upCount = true;
    //     counter2 = 100;
    // }
    counter--;
    setTimeout(eyecatch2, 100);
}