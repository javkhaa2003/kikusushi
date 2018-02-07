// array of questions and answers
var questions = [
	{
		question0: "what's 2 + 2?",
		answer: 4
	},
	{
		question: "What house was Harry Potter in?",
		answer: "gryffindor"
	},
	{
		question: "What's 10 / 5?",
		answer: 2
	},
	{
		question: "Finish this sentence: winter is ______?",
		answer: "coming"
	},
	{
		question: "Who is the youngest Lannister sibling",
		answer: "tyrion"
	},
	{
		question: "Where does Jorah Mormont's family live?",
		answer: "bear island"
	},
	{
		question: "How many dragons does Daenerys Targaryen have?",
		answer: 3
	},
	{
		question: "How many hands does Jaime Lannister have after book 3?",
		answer: 1
	},
	{
		question: "Did Tyrion commit regicide or patricide?",
		answer: "both"
	},
	{
		question: "How many Direwolves do the starks find?",
		answer: 6
	}
];

// loop through each questions
for(var i = 0; i < questions.length; i++) {
	// store each question value
	var question = questions[i].question;
	// store each element to add question too
	var el = document.getElementById('question' + [i]);

	// check what question and element is being selected
	console.log(question, el);

	// update text content of each element
	el.textContent = question;
}

// check results when the user submits quiz
function testResults() {
	// store variables to update correct and incorrect totals
	var correct = 0;
	var incorrect = 0;

	// loop through questions array
	for(var i = 0; i < questions.length; i++) {
		// store each correct answer
		var answer = questions[i].answer;
		// store each user answer
		var guess = document.getElementById('answer' + [i]).value;
		// store element to add a class if correct or incorrect
		var questionSpot = document.getElementById('question' + [i]);

		// check if the user answer matches the correct answer
		if(answer == guess) {
			// update class on questionSpot
			questionSpot.className = 'correct';
			// add one to correct
			correct++;
		} else {
			// update class on questionSpot
			questionSpot.className = 'incorrect';
			// add one to incorrect
			incorrect++;
		};
	};

	// update correct and incorrect values
	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;
}
