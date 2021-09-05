var css = document.querySelector("h3");
var color1 =document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button")

body.style.background ="linear-gradient(to right, "+ color1.value + ", " + color2.value + ")";
css.textContent = body.style.background +";"

function setGradient(){
	console.log(color1.value)
	body.style.background ="linear-gradient(to right, "+ color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background +";"
}

function randomNumber(){
	color1 =  randomRgb();
	color2 = randomRgb();
	body.style.background ="linear-gradient(to right, "+ color1+ ", " + color2 + ")";
}

function randomRgb() {
  
    return 'rgb(' + Math.round(Math.random()*256) + ',' + Math.round(Math.random()*256) + ',' + Math.round(Math.random()*256) + ')';
}


color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
button.addEventListener("click",randomNumber);
