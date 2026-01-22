const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';

let originalart;

function preload() {
  originalart = loadImage("take-flight-smallest-res2.jpg")
}

function setup() {
  createCanvas( 109, 82);
}

function draw() {
  background(0);
  // image(originalart, 0, 0, width, height);

//what is the size of the squares(pixels)?
let w = width / originalart.width;
let h = height / originalart.height;

 originalart.loadPixels();

//pixel array 
for (let i = 0; i < originalart.width; i++){
  for (let j = 0; j < originalart.height; j++){
    const pixelIndex = (i + j * originalart.width) * 4;
    const r = originalart.pixels[pixelIndex + 0];
    const g = originalart.pixels[pixelIndex + 1];
    const b = originalart.pixels[pixelIndex + 2];
    const avg = (r + g + b) / 3;

    noStroke();
    fill(avg);
    //square(i * w, j * h, w);
    // text('G', i * w + w * 0.5, j * h + h * 0.5);


  //mappung brightness to ASCII characters in density string 
  const len = density.length;
  const charIndex = floor(map(avg,0,255,len,0));

  textSize(w);
    textAlign(CENTER, CENTER);
  text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5)

  function changeFont(text, Courier) {
  text.style.fontFamily = Courier;
}

  }
}
}

