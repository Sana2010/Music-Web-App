song = "";

scoreLeftWrist = 0;
scoreRightWrist = 0;

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload()
{
song1 = loadSound("Kiss and Makeup.mp3");
song2 = loadSound("Safari.mp3");
}

function setup()
{
canvas = createCanvas(450,400);
canvas.position(355,100);

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
console.log('poseNet is initialized');
}

function draw()
{
image(video,0,0,450,400);

fill("#9999ff");
stroke("#80bfff");

if(scoreRightWrist > 0.2)
{
circle(rightWristX,rightWristY,20);

if(rightWristY > 0 && rightWristY <= 100)
{
document.getElementById("Kiss_and_Makeup").innerHTML = "Kiss and Makeup is playing";
song1.play();
song.setVolume(1);
song.rate(1);
}

if(rightWristY > 100 && rightWristY <= 200)
{
document.getElementById("Kiss_and_Makeup").innerHTML = "Kiss and Makeup is playing";
song1.play();
song.setVolume(1);
song.rate(1);
}

if(rightWristY > 200 && rightWristY <= 300)
{
document.getElementById("Kiss_and_Makeup").innerHTML = "Kiss and Makeup is playing";
song1.play();
song.setVolume(1);
song.rate(1);
}

if(rightWristY > 300 && rightWristY <= 400)
{
document.getElementById("Kiss_and_Makeup").innerHTML = "Kiss and Makeup is playing";
song1.play();
song.setVolume(1);
song.rate(1);
}

if(rightWristY > 400 && rightWristY <= 500)
{
document.getElementById("Kiss_and_Makeup").innerHTML = "Kiss and Makeup is playing";
song1.play();
song.setVolume(1);
song.rate(1);
}
}

if(scoreLeftWrist > 0.2)
{
circle(leftWristX,leftWristY,20);

if(leftWristY > 0 && leftWristY <= 100)
{
document.getElementById("Safari").innerHTML = "Safari is playing";
song2.play();
song.setVolume(1);
song.rate(1);
}

if(leftWristY > 100 && leftWristY <= 200)
{
document.getElementById("Safari").innerHTML = "Safari is playing";
song2.play();
song.setVolume(1);
song.rate(1);
}

if(leftWristY > 300 && leftWristY <= 400)
{
document.getElementById("Safari").innerHTML = "Safari is playing";
song2.play();
song.setVolume(1);
song.rate(1);
}

if(leftWristY > 400 && leftWristY <= 500)
{
document.getElementById("Safari").innerHTML = "Safari is playing";
song2.play();
song.setVolume(1);
song.rate(1);
}
}
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);

scoreRightWrist = results[0].pose.keypoints[10].score;
scoreLeftWrist = results[0].pose.keypoints[9].score;
console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);

leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
}
}
