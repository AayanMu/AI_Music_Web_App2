sound1="";
sound2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
    sound1= loadSound("harry_potter_theme.mp3");
    sound1.setVolume(1);
    sound1.rate(1);

    sound2= loadSound("metamorphosis_slowed.mp3");
    sound2.setVolume(1);
    sound2.rate(1);
    }
    
    function setup(){
    canvas=createCanvas(700,600);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    
    PoseNet= ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotPoses);
    }
    
    function modelLoaded(){
        console.log("Model has been loaded");
    }
    
    function draw(){
    image(video, 0,0, 700,600);
    }
    
    function play_music(){
    sound.play();
    }
    
    function gotPoses(results){
        if(results.length > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
    
        console.log("Left WristX: " +leftWristX, "Left WristY: "+ leftWristY, "Right WristX"+ rightWristX, "Right WristY"+ rightWristY);
    }
    }