$(document).ready(function() {

// assigned variables //

let randomNumber = Math.floor((Math.random() * 120) + 19);
document.getElementById("Random-Number").innerHTML = randomNumber;


let wins = 0;
let losses = 0;

let pinkGem = Math.floor((Math.random() * 12) + 1);
let blueGem = Math.floor((Math.random() * 12) + 1);
let redGem = Math.floor((Math.random() * 12) + 1);
let yellowGem = Math.floor((Math.random() * 12) + 1);


let GemTotal = 0;
console.log(GemTotal);


// resets the game when player wins/losses // 

function startOver () {
	randomNumber = Math.floor((Math.random() * 120) + 19);
	document.getElementById("Random-Number").innerHTML = randomNumber;
	pinkGem = Math.floor((Math.random() * 12) + 1);
	blueGem = Math.floor((Math.random() * 12) + 1);
	redGem = Math.floor((Math.random() * 12) + 1);
	yellowGem = Math.floor((Math.random() * 12) + 1);
	GemTotal = 0;
	$('#gemTotal').text('Your Total Score is: ' + GemTotal);


}

// click events for each crystal // 

$('#Pink-Gem').on('click', function() {
console.log(pinkGem);
GemTotal = pinkGem + GemTotal;
$('#gemTotal').text('Your Total Score is: ' + GemTotal);
if (GemTotal === randomNumber) {
	wins ++;
	$('#wins').text('Wins: ' + wins);
	startOver();
}

else if (GemTotal > randomNumber) {
	losses ++;
	$('#losses').text('Losses: '+ losses);
  startOver();
}
});

$('#Blue-Gem').on('click', function() {
console.log(blueGem);
GemTotal = blueGem + GemTotal;
$('#gemTotal').text('Your Total Score is: ' + GemTotal);

if (GemTotal === randomNumber) {
	wins ++;
	$('#wins').text('Wins: ' + wins);
	startOver();
}

else if (GemTotal > randomNumber) {
	losses ++;
	$('#losses').text('Losses: '+ losses);
	startOver();
}
});

$('#Red-Gem').on('click', function() {
console.log(redGem);
GemTotal = redGem + GemTotal;
$('#gemTotal').text('Your Total Score is: ' + GemTotal);
if (GemTotal === randomNumber) {
	wins ++;
	$('#wins').text('Wins: ' + wins);
	startOver();
}

else if (GemTotal > randomNumber) {
	losses ++;
	$('#losses').text('Losses: '+ losses);
	startOver();
}
});

$('#Yellow-Gem').on('click', function() {
console.log(yellowGem);
GemTotal = yellowGem + GemTotal;
$('#gemTotal').text('Your Total Score is: ' + GemTotal);
if (GemTotal === randomNumber) {
	wins ++;
	$('#wins').text('Wins: ' + wins);
	startOver();
}

else if (GemTotal > randomNumber) {
	losses ++;
	$('#losses').text('Losses: '+ losses);
	startOver();
}
});



  





});


