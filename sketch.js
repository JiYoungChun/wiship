var sb;
var img, litup;
var lightup = false; 
var send = false;
var xpos = 50;

function setup() { 
createCanvas(1500, 1000);
   img = loadImage("papership.png"); 
   litup= loadImage("litupship.png");

	sb = new Spacebrew.Client();
	sb.name("JiYoung");
	sb.addPublish("lightup","boolean", "false");
	sb.addPublish("send","boolean","false");
	sb.addSubscribe("color","boolean");
	sb.addSubscribe("sendIsTrue","boolean");
	
	// setup listeners
	sb.onBooleanMessage = onBooleanMessage;
	sb.onStringMessage = onStringMessage;
	sb.onRangeMessage = onRangeMessage;
	sb.connect();
	console.log(sb.server);
} 


function draw() { 


  background(150,200,250);
  fill(0);
  rect(0,0,100,1000);
  rect(1000,0,1500,1000);
  fill(250);
  rect(50,300,50,50);
  rect(50,400,50,50);
  rect(950,350,50,50);
  rect(950,150,50,50);
  rect(950,550,50,50);
  fill(0);
  textSize(11);
  textStyle(NORMAL);
  text("light up",60,330);
  text("send",60,430);
  text("Seoul",960,380);
  text("New York", 950,580);
  text("Harbin", 960,180);
  fill(150,200,250);
  textSize(20);
  textStyle(ITALIC);
  text("WISHIP",1300,850);

  	noStroke();
  	image(img,xpos, 350,100,50);

if (mouseIsPressed && mouseX> 50 &&mouseX <100 && mouseY >300 &&mouseY <350) {
  	sb.send("lightup", "boolean", "true");
  	// lightup= true; 
  }
 if (mouseIsPressed && mouseX> 50 &&mouseX <100 && mouseY >400 &&mouseY <450) {
  	sb.send("send", "boolean", "true");
  	// send= true; 
 }

  if (lightup){
  	console.log(" light up ");
  	image(litup, xpos, 350, 100,50);
  }
  if (send){
  	console.log("send");
  xpos+= 5;	
  if (xpos >1000){
  	xpos=1000;

  	fill(255); 
  	textSize(13);
  	text("I want to be a successful media artist!", 1100,380);
  	
  }

  }
  
}


function onBooleanMessage( name, value ){

	console.log("Boolean: "+name+":"+value);
	
  if(name == 'color'){
  	if(value){
  		console.log(value);
  		lightup = true;
  	} else {
  		console.log('lightup what?')
  	}
  }

  if (name == 'sendIsTrue'){
  	if(value){
  		console.log(value);
  		send =true;
  	} else {
  		console.log('send what?')
  	}
  }

}

function onStringMessage( name, value ){
	console.log("String: "+name+":"+value);
}

function onRangeMessage( name, value ){
	console.log("Range: "+name+":"+value);
}