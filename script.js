arr = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var count = Math.floor(Math.random()*6);
var count2 = Math.floor(Math.random()*6);
document.getElementsByClassName("img1")[0].setAttribute("src",arr[count]);
document.getElementsByClassName("img2")[0].setAttribute("src",arr[count2]);
if(count>count2) document.getElementsByTagName("h2")[0].textContent ="Player 1 is the winner";
else if(count<count2) document.getElementsByTagName("h2")[0].textContent ="Player 2 is the winner";
else document.getElementsByTagName("h2")[0].textContent ="Its a draw";