function preload(){
    song = loadSound("s1.mp3");
    song2 = loadSound("s2.mp3");
}
function setup(){
    canvas = createCanvas(700, 500);
    canvas.center()

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 700, 500);

}