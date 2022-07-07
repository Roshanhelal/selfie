var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
speak();

setTimeout(function(){
    take_snapshot();
    save();
},10000);

    }
   
}

function speak(){
    var synth=window.speechSynthesis;
    var speak_data="taking your selfie in 10 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);

}

function take_snapshot(){
    Webcam.snap(
        function(data_uri){
document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">' ;
        }
        
    );
}

function save(){
    link=document.getElementById("link")
    image=document.getElementById("selfie_image").src;
    link.href=image
    link.click();
}


Webcam.set({
    width:360,
    heigth:250,
    image_format:'png',
    png_quality:90
}



);

var camera=document.getElementById("camera");
Webcam.attach(camera);