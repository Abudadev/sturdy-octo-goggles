song = "";

function preload(){
 song = loadSound("LIMBO.mp3");
}

function setup(){
    canvas = createCanvas(300,450);
    canvas.position(500,300)

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,350,250);
}

function play(){
    song.play();
}