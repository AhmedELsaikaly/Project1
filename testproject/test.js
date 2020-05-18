var questionIndex = 0;
var result = 0;

function newQuestion(){
var q = questions[questionIndex];
$('#mainQ').text((questionIndex + 1) + '.' + questions[questionIndex]['question'])
$('#cho1').text(q['option1'])
$('#cho2').text(q['option2'])
$('#cho3').text(q['option3'])
if(questions[questionIndex]["photos"]!== ''){
$('#pic').prepend('<img id="theImg" width=200px/>')
$("#theImg").attr("src",questions[questionIndex]["photos"]);
}
}


$("#nextquestion").click(function () {

	if($('input[type=radio]:checked').length === 0){
		alert('Please select your answer!');
	}
	
	var answer = $('input[type=radio]:checked').val();
	if(questions[questionIndex]['answer'] === answer){
		result += 1;
		
	}

	var selectedOption = document.querySelector('input[type=radio]:checked');
	selectedOption.checked = false;
	questionIndex = questionIndex+1;
	if(questionIndex === questions.length-1){
		$("#nextquestion").text('Finish')
		
	}
	if(questionIndex === questions.length){
		document.getElementById('questionContainer').style.display = "none";
         document.getElementById('result').style.display = '';
       document.getElementById('result').textContent = 'Your Score: ' + result;
       

	}
	$("#theImg").remove()
	newQuestion(questionIndex);
})

newQuestion(questionIndex);