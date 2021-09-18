var img;
var status="";
function preload(){
    img=loadImage('waterbottle.jpeg');
}
function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status : detecting objects";
}
function draw(){
    image(img, 0, 0 ,620,420);
}
function modelLoaded(){
    status=true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}