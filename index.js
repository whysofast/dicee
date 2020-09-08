var randomNumber1 = Math.floor(Math.random()*6 + 1);
img1string = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random()*6 + 1);
img2string = "images/dice" + randomNumber2 + ".png";

if (randomNumber1>randomNumber2){
    h1string = "Player 1 Wins!";
} else if (randomNumber1<randomNumber2){
    h1string = "Player 2 Wins!";
} else{
    h1string = "Draw!";
}

document.querySelector("h1").textContent = h1string;
document.querySelector(".img1").setAttribute("src",img1string);
document.querySelector(".img2").setAttribute("src",img2string);

