var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);

var image1 = document.querySelector("img.img1").setAttribute("src","images/dice"+randomNumber1+".png");
var image2 = document.querySelector("img.img2").setAttribute("src","images/dice"+randomNumber2+".png");

var heading = document.querySelector("h1");

if(randomNumber1 > randomNumber2){   
    heading.innerHTML = ("Player One is WINNER!!");
}
else if(randomNumber1 < randomNumber2){   
    heading.innerHTML = ("Player Two is WINNER!!");
}
else{
    heading.innerHTML = ("Draw!");
} 