var SpeechRecognition= window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var textbox=document.getElementById("textbox");
function start(){
document.getElementById("textbox").innerHTML="";
recognition.start();
}
recognition.onresult=function run(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    textbox.innerHTML=content;
    speak();
}
camera=document.getElementById("camera");
function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    var utterthis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        speak_data = "Taking your next Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        img_id="selfie1";
        take_snapshot();
    },5000);

    setTimeout(function(){
        speak_data = "Taking your next Selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        img_id="selfie2";
        take_snapshot();

    },10000);

    setTimeout(function(){
        img_id="selfie3";
        take_snapshot();
        
    },15000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});

function take_snapshot(){
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>';
        }

        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>';
        }

        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'"/>';
        }
    });
}
