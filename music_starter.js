
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  //colorMode(HSB, 100);
  background(154, 192, 252);
  rectMode(CENTER);
  strokeWeight (9);

console.log(counter);

// }

  // console.log(vocal);

  //   testing loop code

  // storkeFill(255);

  // var drumMap = map(drum, 0,100, 5,70); //parseInt

  // if(bass<=20){
  //   vocalMap = map(vocal, 0,20, 20,40);
  // }
  // else{
  //   vocalMap = map(vocal, 20, 100, 40, 200);
  // }

  // var lengthOfLine = 300;
  // var LineStart = 100;
  // var lineEnd = LineStart+lengthOfLine;
  // // let strokeColour = lerpColour();
  // stroke(drumMap,100,100);

  // for(var i = 0; i <= drumMap; i++){
  //   var lineStep = i*20;
  //   line(LineStart, lineStep, lineEnd, lineStep);


    for(var i = 1; i <= 5; i++){
      // console.log("ENTERED");
      let flower_size = bass + 50 ;
    //basic white flower
// var flowerMap = map(drum, 0,100, 5,70); //parseInt

push();


translate(160*i, 630);
stroke(9, 105, 9);
strokeWeight(2);

stroke(9, 105, 9);
strokeWeight(5);
line(10,15,10,300);

rotate(-20);
fill(9, 105, 9); //green
ellipse(30, 0, 55,15); // leaf4
rotate(-30);
ellipse(30, 0, 45,12); // leaf



stroke(255, 140, 148);
strokeWeight(0);
if (flower_size > 65){
fill(255,255,255)//white
}
else {
fill(157, 105, 240)//purple
}

rotate(85);

ellipse(0, 0, 25,flower_size, 50 + bass); // petal
ellipse(0, 0, 25,flower_size,50 + bass); // petal


rotate(55);
ellipse(0, 0, 25,flower_size,50 + bass); //petal
rotate(70);
ellipse(0, 0, 25,flower_size,50 + bass); //petal

fill(252, 177, 0); //yellow

push();
stroke(255, 140, 148);
strokeWeight(0);
circle(0, 0, 30); // middle
pop();



let myYellow = color(255, 255, 0);
let myOrange = color(255, 165, 0);
// let myY = color(255, 255, 0);
// let myO = color(255, 165, 0);


// Draw an ellipse in the center of the canvas
let diameter = 40;

for(let i = bass-30; i <= diameter; i++){
// Map the colorVariable to a gradient between yellow (color(255, 255, 0)) and orange (color(255, 165, 0))
let colorVariable = map(i, 0, diameter, 0, 1); // Variable to control the gradient color
let lerpedColor = lerpColor(myOrange, myYellow, colorVariable);
// console.log(lerpedColor);
noFill();
stroke(lerpedColor);
strokeWeight(1);
ellipse(width / 500, height / 650, i, i);
}

pop();

// if(words>=20){
//     vocalMap = map(vocal, 0,20, 20,40);
//   }
//   else{
//     vocalMap = map(vocal, 20, 100, 40, 200);
//   }

  }



//clouds

  
  fill(255)
  push();
  translate (400,50);
  ellipse(width/4, height/3 + 100, 100, 50+bass)
  ellipse(width/3, height/3 + 100, 100, 50+bass)
  ellipse(width/2.6, height/3.2 + 100, 100, 50+bass)
  ellipse(width/4, height/3.1 + 100, 100, 50+bass)
  ellipse(width/3.4, height/3.4 + 100, 100, 50+bass)
  ellipse(width/3.1, height/3.6 + 100, 100, 50+bass)
  pop();
  

  fill(255)
  push();
  translate (-80,100);
  ellipse(width/4, height/3 + 100, 100, 50+bass)
  ellipse(width/3, height/3 + 100, 100, 50+bass)
  ellipse(width/2.5, height/3 + 100, 100, 50+bass)
  ellipse(width/2.6, height/3.4 + 100, 100, 50+bass)
  ellipse(width/3.4, height/3.4 + 100, 100, 50+bass)
  ellipse(width/3, height/3.8 + 100, 100, 50+bass)
  pop();

  fill(255)
  push();
  translate (180,-180);
  ellipse(width/4, height/3 + 100, 100, 50+bass)
  ellipse(width/3, height/3 + 100, 100, 50+bass)
  ellipse(width/2.5, height/3 + 100, 100, 50+bass)
  ellipse(width/2.6, height/3.4 + 100, 100, 50+bass)
  ellipse(width/3.6, height/3.4 + 100, 100, 50+bass)
  ellipse(width/3.1, height/3.6 + 100, 100, 50+bass)
  pop();




  
  // fill(255)
  // ellipse(width/2, height/2 + 200, 200, 50+vocal)

  // fill('#FFC0CB')
  // ellipse(width/2, height/2 + 200, 120, 20+vocal)

  //   var ballSize = map(bass, 0,50, 40,150);

  //   var drumHight = map(drum, -50,100, height,0*ballSize/2);

  //   fill(235, 52, 52);
  //   ellipse(width/5, drumHight, ballSize);




    

textFont('Georgia'); // please use CSS safe fonts
  textSize(24);

   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
 

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   fill(255, 255, 0);
 
   // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);





  // testing background picture

  fill('#3CB043')
  stroke(124, 252, 0);
  strokeWeight(0);
  triangle(50, 900, 150, 800, 200, 900);

  triangle(150, 900, 250, 800, 400, 900);

  triangle(250, 900, 350, 800, 400, 900);

  triangle(350, 900, 450, 800, 500, 900);

  triangle(450, 900, 500, 800, 600, 900);

  triangle(550, 900, 600, 800, 650, 900);

  triangle(600, 900, 700, 800, 800, 900);

  triangle(700, 900, 800, 800, 900, 900);
  
  triangle(800, 900, 880, 800, 1000, 900);

  fill(255)
  stroke(255, 140, 148);
  strokeWeight(90);
  noFill();
  rect(width/2, height/2, 900+ drum, 860  +drum)
  
  stroke(255, 240, 148);
  strokeWeight(15);
  noFill();
  rect(width/2, height/2, 800+ drum, 760  +drum)

  fill('#008000')
  // rect(width/3, height/2, 50+ bass, 50 +bass)
  // rect(width/3*2, height/2, 50+ bass, 50 +bass) 
  
 

  

  // fill(255)
  // ellipse(width/2, height/2 + 200, 200, 50+vocal)

  // fill('colorVariable')
  // ellipse(width/2, height/2 + 200, 120, 20+vocal)

    var ballSize = map(bass, 0,50, 40,50);

    var drumHight = map(other, -150,100, height,0*ballSize/9);

    //bird
    push ();
    translate (700,80);
    scale(0.5);
    fill(41, 38, 145);
    stroke(255, 140, 148);
    strokeWeight(0);
    ellipse(140, drumHight+150, 120);
    ellipse(220, drumHight+110, 80);
    triangle(20, drumHight+100, 20, drumHight+200, 100, drumHight+150);
    

    fill(235, 152, 52);
    stroke(255, 140, 148);
    triangle(250, drumHight+90, 260, drumHight+120, 300, drumHight+90);


    fill(255);
    stroke(255, 140, 148);
    ellipse(230, drumHight+100, 15);


    pop();

    


    if(counter < 100 || counter > 1000 ) {

    // colour changing sun 
    

    let myYellow = color(255, 255, 0);
    let myOrange = color(252, 80, 61);
    // let myY = color(255, 255, 0);
    // let myO = color(255, 165, 0);
  
  
  // Draw an ellipse in the center of the canvas
  let diameter = 150;
  
  for(let i = 1; i <= diameter; i++){
    // Map the colorVariable to a gradient between yellow (color(255, 255, 0)) and orange (color(255, 165, 0))
    let colorVariable = map(i, 0, diameter, 0, 1); // Variable to control the gradient color
    let lerpedColor = lerpColor(myOrange, myYellow, colorVariable);
    // console.log(lerpedColor);
    noFill();
    stroke(lerpedColor);
    strokeWeight(1);
    ellipse(width / 5, height / 4, i, i);
  }

  noStroke();

  // Change the color gradually
  // colorVariable += 0.005;
  // if (colorVariable > 1) {
  //   colorVariable = 0;
  // }
}
  else 
 {
  let myBlue = color(32, 106, 245);
  let myPurple = color(91, 12, 156);
  // let myY = color(255, 255, 0);
  // let myO = color(255, 165, 0);


// Draw an ellipse in the center of the canvas
let diameter = 150;

for(let i = 1; i <= diameter; i++){
  // Map the colorVariable to a gradient between yellow (color(255, 255, 0)) and orange (color(255, 165, 0))
  let colorVariable = map(i, 0, diameter, 0, 1); // Variable to control the gradient color
  let lerpedColor = lerpColor(myPurple, myBlue, colorVariable);
  // console.log(lerpedColor);
  noFill();
  stroke(lerpedColor);
  strokeWeight(1);
  ellipse(width / 5, height / 4, i, i);
}

noStroke();
}

}


