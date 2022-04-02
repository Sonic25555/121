var draw_circle="";
var draw_rectangle="";
var draw_square="";
var x=0;
var y=0;
var SpeechRecognition =window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="System is listening - Please speak :";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("status").innerHTML="Speech has been recognised as :"+content;
    if(content == "Circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing circle";
        draw_circle="set";
    }
    if(content == "rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing rectangle";
        draw_rectangle="set";
    }
    if(content == "Square"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing square";
        draw_square="set";
    }
    
}
function setup(){
    canvas=createCanvas(900,600);
}
function draw(){
    if(draw_circle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Circle is drawn!";
        draw_circle="";
    }
    if(draw_rectangle=="set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="Rectangle is drawn!";
        draw_rectangle="";
    }
    if(draw_square=="set"){
        rect(x,y,40,40);
        document.getElementById("status").innerHTML="Square is drawn!";
        draw_square="";
    }
}
