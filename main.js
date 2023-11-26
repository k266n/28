nosex=0;
nosey=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
canvas=createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoded);
poseNet.on('pose', gotPose);
}
function draw(){
image(video, 0, 0, 300, 300 );
image(clown_nose, nosex-25, nosey-15, 60, 50);
}
function take_snapshot(){
    save("myimage.png");
}

function modelLoded(){
    console.log("PoseNet is initalized")
}


function gotPose(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = "+ results[0].pose.nose.x);
        console.log("nose y = "+ results[0].pose.nose.y);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
    }
}
