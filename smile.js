    let smileCanvas = document.getElementById("myCanvas1");
    let smileContext = smileCanvas.getContext("2d");
    function drawSmile() {
        smileContext.fillStyle = "rgb(144,238,144)";
        smileContext.strokeStyle = "green";
        smileContext.beginPath();
        smileContext.fillRect(5,5,495,600);
        smileContext.fill();
        smileContext.stroke();

        //face
        smileContext.fillStyle = "yellow";
        smileContext.strokeStyle = "black";
        smileContext.beginPath();
        smileContext.arc(250, 250, 170, 0, Math.PI*2);
        smileContext.fill();
        smileContext.stroke();

        //left eye
        smileContext.fillStyle = "black";
        smileContext.strokeStyle = "black";
        smileContext.beginPath();
        smileContext.arc(190, 190, 15, 0, Math.PI*2);
        smileContext.fill();
        smileContext.stroke();

        //right eye
        smileContext.fillStyle = "black";
        smileContext.strokeStyle = "black";
        smileContext.beginPath();
        smileContext.arc(310, 190, 15, 0, Math.PI*2);
        smileContext.fill();
        smileContext.stroke();

        //nose
        smileContext.strokeStyle = "black";
        smileContext.moveTo(250,240);
        smileContext.lineTo(250,290);
        smileContext.stroke();

        //mouth
        smileContext.strokeStyle = "black";
        smileContext.beginPath();
        smileContext.arc(250, 300, 50, 0, Math.PI);
        smileContext.stroke();

        smileContext.font = '30px serif';

smileContext.fillText('The Canvas brought me to life!', 30, 500);
    }
    drawSmile();