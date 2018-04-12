var score = 0; // set score to 0
var total = 5; // total number of questions
var point = 2; // points per correct answer
var highest = total * point;

// initializer 
function init(){
	// set correct answers
	sessionStorage.setItem('a1','b');
	sessionStorage.setItem('a2','d');
	sessionStorage.setItem('a3','c');
	sessionStorage.setItem('a4','a');
	sessionStorage.setItem('a5','b');
}


$(document).ready(function() {
	// hide all questions
	$('.questionForm').hide();

	// show first question
	$('#q1').show();

	$('.questionForm #submit').click(function() {
		// get data attributes
		var current = $(this).parents('form:first').data('question');
		var next = $(this).parents('form:first').data('question')+1;

		// hide all questions
		$('.questionForm').hide();
		// show next question
		$('#q'+next+'').fadeIn(300);
		process(''+current+'');
		return false;
	});
});
	// $('#q1 #submit').click(function() {
	// 	$('.questionForm').hide();
	// 	process('q1');
	// 	$('#q2').fadeIn(300);
	// 	return false;
	// });

	// $('#q2 #submit').click(function() {
	// 	$('.questionForm').hide();
	// 	process('q2');
	// 	$('#q3').fadeIn(300);
	// 	return false;
	// });

	// $('#q3 #submit').click(function() {
	// 	$('.questionForm').hide();
	// 	process('q3');
	// 	$('#q4').fadeIn(300);
	// 	return false;
	// });

	// $('#q4 #submit').click(function() {
	// 	$('.questionForm').hide();
	// 	process('q4');
	// 	$('#q5').fadeIn(300);
	// 	return false;
	// });

	// $('#q5 #submit').click(function() {
	// 	$('.questionForm').hide();
	// 	process('q5');
	// 	$('#results').fadeIn(300);
	// 	return false;
	// });


// process the answers
function process(n) {
	// if(q == "q"+n) {
		var submitted = $('input[name=q'+n+']:checked').val();
		if(submitted == sessionStorage.getItem('a'+n+'')) {
			score = score + point;
		}

		if(n == total) {
			$('#results').html('<h3>Your Final Score is: ' + score + ' out of '+highest+'</h3><a href="index.html">Take Quiz Again!</a>');
			if(score == highest) {
				$('#results').append('<p>You are an HTML5 master</p>');
			} else if (score == highest - point || score == highest - point - point) {
				$('#results').append('<p>Good Job</p>');
			}
		}
		return false;
	// }

	// if(q == "q2") {
	// 	var submitted = $('input[name=q2]:checked').val();
	// 	if(submitted == sessionStorage.a2) {
	// 		score++;
	// 	}
	// }

	// if(q == "q3") {
	// 	var submitted = $('input[name=q3]:checked').val();
	// 	if(submitted == sessionStorage.a3) {
	// 		score++;
	// 	}
	// }

	// if(q == "q4") {
	// 	var submitted = $('input[name=q4]:checked').val();
	// 	if(submitted == sessionStorage.a4) {
	// 		score++;
	// 	}
	// }

	// if(q == "q5") {
	// 	var submitted = $('input[name=q5]:checked').val();
	// 	if(submitted == sessionStorage.a5) {
	// 		score++;
	// 	}
	// 	$('#results').html('<h3>Your Final Score is: ' + score + ' out of 5</h3><a href="index.html">Take Quiz Again!</a>');
	// }
	
}


// add event listener
window.addEventListener('load',init(),false);