$(function(){
	var picture1 = {
		correctAnswer: 'unicorn',
		picturePath: 'assets/unicorn.jpg'
	}
	var picture2 = {
		questionPool: ['toad','reptile man','chameleon','iguana'],
		correctAnswer: 'iguana',
		picturePath: 'assets/iguana.jpg'
	}
	var picture3 = {
		questionPool: ['Pomeranian','Beagle','pug loaf','Baby Kangaroo'],
		correctAnswer: 'pug loaf',
		picturePath: 'assets/pugloaf.jpg' 
	}
	
	//This array holds all our picture objects (this is done for indexing purposes)
	var pictureArray = [picture1, picture2, picture3];

	//This counter lets us iterate through pictureArray
	var counter = 0;

	//This variable holds the user's current score
	var score = 0;

	//This variable starts the timer at 15 seconds
	var seconds;

	//When any input elements are clicked, enable the submit button
	if ($('input#option1').is(':checked')) {
		$('label[for=option1').css('color', 'limegreen');
	}


	$('input').on('click', function(){
		$('#submit').removeAttr("disabled");
	})

	//When the submit button is clicked....
	$('#submit').on('click', function(){
		//define variables that are used to compare the user's choice with the correct choice
		var userChoice = $('input:checked').val();
		var correctAnswer = pictureArray[counter].correctAnswer;

		//zoom out on image and reset our radio/submit buttons
		$('img').addClass('slowTransition');
		$('#submit').attr("disabled", "disabled")
		$('input').prop('checked', false);
		
		//Run validateFunction after 2.5 seconds
		setTimeout(validateFunction, 1000);

		//this function reverts our zoom and shows us if the user is right or wrong
		function validateFunction() {
			$('img').removeClass('slowTransition');
			$('.rightContainerOverlay').css('opacity', '1');
			$('.rightContainerOverlay').css('z-index', '5');
			if (correctAnswer != userChoice) {
				$('h1').html('You chose wrong!');
			} else {
				$('h1').html('You win!');
				score += seconds * 10;
			}
		}	
	})	
	//When the continue button is clicked...
	$('#cont').on('click', function(){
		//increase our counter so the next index of pictureArray is selected
		counter += 1;
		$('.rightContainerOverlay').css('opacity', '0');
		$('.rightContainerOverlay').css('z-index', '-5');
		$('.level p').html(`${counter+1}`);
		$('.score p').html(`${score}`);
		//Loop through all our labels and inputs and update their content with new options + pictures
		if (counter < pictureArray.length) {
			for (var i = 1; i <= 4; i++) {
				$(`label[for=option${i}]`).html(`${pictureArray[counter].questionPool[i-1]}`);
				$(`input[id=option${i}]`).val(`${pictureArray[counter].questionPool[i-1]}`);
				$('#picture').attr("src", `${pictureArray[counter].picturePath}`);
			} 
		} else {
			$('.endOverlay').css('opacity', '1');
			$('.endOverlay').css('z-index', '10');
			$('#endScore').html(score);
		}	
	})

	// if (counter == pictureArray.length) {
	// 	//do something
		// $('.endOverlay').css('opacity', '1');
		// $('.endOverlay').css('z-index', '-10');
	// }

 	$('.startButton').on('click', function() {
 		$('.startOverlay').css('opacity', '0');
 		$('.startOverlay').css('z-index', '-10');
 		seconds = 16;

		var countdown = setInterval(function() {
	      // Update the timer text with the number of seconds
	      $('.timer p').html(seconds -= 1);
	    
	      if (seconds == 0) {
	      	clearTimeout(countdown);
	      }
	      $('#submit').on('click', function() {
	      	clearTimeout(countdown);
	      })
	    },1000);
 	})

    $('#cont').on('click', function() {
		seconds = 16;

		var countdown = setInterval(function() {
	      // Update the timer text with the number of seconds
	      $('.timer p').html(seconds -= 1);
	    
	      if (seconds == 0) {
	      	clearTimeout(countdown);
	      }
	      $('#submit').on('click', function() {
	      	clearTimeout(countdown);
	      })
	    },1000);
    })
});