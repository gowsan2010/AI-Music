function setup(){
    canvas = createCanvas(700, 500);
    canvas.center()

    video = createCapture(VIDEO);
}
function draw(){
    image(video, 0, 0, 700, 500);
    video.hide();
}