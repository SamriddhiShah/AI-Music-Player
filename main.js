
leftWristY = 0;

rightWristY = 0;


volume = 0;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 400, 400);
    fill('#F87217');
    stroke('#F87217');
   

 if(leftWristY> rightWristY){
chosen="find";
play();
 }
 else{
     chosen="not-find";
     play();
 }

}



song = "";
music = "";

function preload() {
    song = loadSound("move.mp3");
    music=loadSound("find.mp3");

}

function play() {
    if (chosen == "find") {
        song.play();
        document.getElementById("song-name").innerHTML=" Find Yourself in The Song";
    } else {
        music.play();
        
        document.getElementById("song-name").innerHTML=" Get Moving";
    }


}

function modelLoaded() {
    console.log("MODEL LOADED! YIPEE!");
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
      
        leftWristY = result[0].pose.leftWrist.y;

        rightWristX = result[0].pose.rightWrist.x;
        

     
        console.log(scoreLeftWrist);

        console.log("l wrist= " + leftWristX + "  " + leftWristY);
        console.log("r wrist= " + rightWristX + "  " + rightWristY);

    }

}