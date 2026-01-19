var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function getRandomNumber() {
  	return Math.floor(Math.random() * 256);		// returns a random number between 0 to 255
  	// Math.floor() removes the decimal portion of a number, and Math.random() generates 
  	// a decimal value between 0 and 1 (inclusive of 0, but not 1).
}

function rgbToHex(r, g, b) {
  return (
    "#" +												// 
    [r, g, b]											// puts the numbers into an array (e.g. [255, 0, 128])
      .map(x => x.toString(16).padStart(2, "0"))		// toString(16) converts each number into a hexadecimal 
      .join("")											// padStart(2, "0") ensures each value has 2 characters and adds "0" to the start if it does not  
  );													// .join("") joins them together (e.g. ["ff", "00", "80"] to "ff0080")
}


function generateRandomGradient() {
  var r1 = getRandomNumber();
  var g1 = getRandomNumber();
  var b1 = getRandomNumber();
  var r2 = getRandomNumber();
  var g2 = getRandomNumber();
  var b2 = getRandomNumber();

  var hex1 = rgbToHex(r1, g1, b1);
  var hex2 = rgbToHex(r2, g2, b2);

  color1.value = hex1;
  color2.value = hex2;

  setGradient();
}

color1.addEventListener("input", setGradient);		
color2.addEventListener("input", setGradient);
random.addEventListener("click", generateRandomGradient);

setGradient();