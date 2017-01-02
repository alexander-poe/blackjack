$(function(){
	draw = () => {
		return Math.floor(Math.random() * 52 + 1)
	}
	getValue = card => {
		if (card % 13 === 0 ) return 10;
		if (card % 13 === 10) return 10;
		if (card % 13 === 11) return 10;
		if (card % 13 === 1 ) return 11; 
		return card % 13;
	}
	var card1   = draw();
	var card2   = draw();
	var hit     = draw();
	var p2Card1 = draw();
	var p2Card2 = draw();
	var p2hand  = getValue(p2Card1) + getValue(p2Card2);
	var hit     = draw();
	getScore = () => {
		return getValue(card1) + getValue(card2);
	}
		
	//alternative with currying?? 
	const getP1Results = () => {
		var p2final = $('.score').text();
		return p2final;
	}
	const getP2Results = () => {
		var p1final = $('.score2').text();
		return p1final;
	}

	winner = ( p1, p2 ) => {
		if ( p1 > 21 ) return 'player one bust';
		if ( p2 > 21 ) return 'player two bust';
		if ( p1 > p2 ) return 'player one wins!';
		return 'player two wins';
	}


	//event listeners
	$('.welcome').on('click', function() {
		$('.play-game').removeClass('hidden');
		$('.welcome').addClass('hidden');
	})
	$('.draw').on('click', function() {
		$('.score').html(getScore());
		$('.hit').removeClass('hidden');
		$('.draw').hide();
	})
	$('.hit').on('click', function() {
		let currentScore = getScore();
		let hitAmount    = getValue(hit);
		let newTotal     = currentScore + hitAmount;
		$('.score').html(newTotal);
		getP1Results();

	})
	$('.draw2').on('click', function() {
		$('.score2').html(p2hand);
		$('.hit2').removeClass('hidden');
		$('.draw2').hide();
	})
	$('.hit2').on('click', function() {
		var withHit = p2hand +  getValue(hit);
		$('.score2').html(withHit);
		getP2Results();
	})
	$('.final').on('click', function() {
		var winningText = winner(getP1Results, getP2Results);
		$('.results').html(winningText);
	})

})

