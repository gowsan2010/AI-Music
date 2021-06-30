var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;
function preload(){
    song = loadSound("s1.mp3");
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
        console.log("leftWrist X = " + leftWristX + "leftWrist Y = " + leftWristY + "rightWrist X = " + rightWristX + "rightWrist Y = " + rightWristY);
    }
}