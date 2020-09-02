function setup(){
    canvas= createCanvas(300,300);
    canvas.position(450,257);
    classifier=ml5.imageClassifier('MobileNet', modelLoaded);
    video=createCapture(VIDEO);
    video.hide();

    
}

function modelLoaded(){
    console.log('Modal has Successfully loaded!!');


}

function draw(){
    image(video,0,0,300,200);
    classifier.classify(video,gotResult);
    
}

function preload(){
}

function gotResult(error, result){
    if (error){
        console.log(error);

    }
    else{
        console.log(result[0].label);
        document.getElementById("obj_result").innerHTML=result[0].label;
        document.getElementById("acc_result").innerHTML=result[0].confidence.toFixed(3);
    }
}