var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;
var scoreleftwrist = 0;
var scorerightwrist = 0;
var song1;
var song2;
var songplay = "";
var songplay2 = "";
function preload(){
    song1 = loadSound("s1.mp3");
    song2 = loadSound("s2.mp3");
}
function setup(){
    canvas = createCanvas(700, 500);
    canvas.center()

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 700, 500);
    stroke("red");
    fill("red");
    songplay = song1.isPlaying();
    if (scoreleftwrist > 0.2){
        song2.stop();
        circle(leftWristX, leftWristY, 20);
        song1.play();
        if (songplay==true){
            document.getElementById("playing").innerHTML = "A Mysterious music";
        }
    }
    songplay2 = song2.isPlaying();
    if (scorerightwrist > 0.2){
        song1.stop();
        circle(rightWristX, rightWristY, 20);
        if(songplay2==false){
            song2.play();
        }
        else{
            document.getElementById("playing").innerHTML = "Mixing'em up";
        }
    }
}
function playsong(){
    song1.play();
    song1.setVolume(2);
}
function modelLoaded(){
    console.log("Model Loaded!");
}
function gotPoses(results){
    if (results.length > 0){
        leftWristX = results[0].pose.leftWrist.x;
       leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        scoreleftwrist = results[0].pose.keypoints[9].score;
       scorerightwrist = results[0].pose.keypoints[10].score;
       console.log("leftWrist X = " + leftWristX + "leftWrist Y = " + leftWristY + "rightWrist X = " + rightWristX + "rightWrist Y = " + rightWristY);
   }
}