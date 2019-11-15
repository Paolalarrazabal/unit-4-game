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
	
	
	
	

	
	// click events for each crystal // 
	
	$('#Pink-Gem').on('click', function() {
	
	GemTotal = pinkGem + GemTotal;

	$('#gemTotal').text('Score so far: ' + GemTotal);
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

	GemTotal = blueGem + GemTotal;
	$('#gemTotal').text('Score so far: ' + GemTotal);
	
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
	
	GemTotal = redGem + GemTotal;
	$('#gemTotal').text('Score so far: ' + GemTotal);
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
	
	GemTotal = yellowGem + GemTotal;
	$('#gemTotal').text('Score so far: ' + GemTotal);
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
	
	// Restarts game and assigns new values // 
	
	function startOver () {
		randomNumber = Math.floor((Math.random() * 120) + 19);
		document.getElementById("Random-Number").innerHTML = randomNumber;
		pinkGem = Math.floor((Math.random() * 12) + 1);
		blueGem = Math.floor((Math.random() * 12) + 1);
		redGem = Math.floor((Math.random() * 12) + 1);
		yellowGem = Math.floor((Math.random() * 12) + 1);
		GemTotal = 0;
		$('#gemTotal').text('Score so far: ' + GemTotal);
	

		// logging restart values // 

		console.log('this is the score so far: ' + GemTotal);
		console.log('this is the target number: ' + randomNumber);
		console.log('pink: ' + pinkGem);
		console.log('blue: ' + blueGem);
		console.log('red: ' + redGem);
		console.log('yellow: ' + yellowGem);

	}
	
	// logging initial values // 

	console.log('this is the score so far: ' + GemTotal);
	console.log('this is the target number: ' + randomNumber);
	console.log('pink: ' + pinkGem);
	console.log('blue: ' + blueGem);
	console.log('red: ' + redGem);
	console.log('yellow: ' + yellowGem);
	
	
	
	
	});


