$(document).ready(function() {


let randomNumber = Math.floor((Math.random() * 120) + 19);
document.getElementById("Random-Number").innerHTML = randomNumber;

let pinkGem = 0;
let blueGem = 0;
let redGem = 0;
let yellowGem = 0;
let wins = 0;
let losses = 0;

pinkGem = Math.floor((Math.random() * 12) + 1);
blueGem = Math.floor((Math.random() * 12) + 1);
redGem = Math.floor((Math.random() * 12) + 1);
yellowGem = Math.floor((Math.random() * 12) + 1);





$('#Pink-Gem').on('click', function() {
console.log(pinkGem);


});

$('#Blue-Gem').on('click', function() {
console.log(blueGem);

});

$('#Red-Gem').on('click', function() {
console.log(redGem);

});

$('#Yellow-Gem').on('click', function() {
console.log(yellowGem);

});



  





});


