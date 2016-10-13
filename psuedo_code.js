/*

Goal:
-make a game **
-will have one user **
-user will be provided an image **
-user will select an answer (multiple choice) **
-user will submit their answer **
-validation of right/wrong **
-switch to next image (replay!!) **
-kill switch, something to end the game



Possible Additions:
-scoreboard
-reduce score based on time taken to answer
-set timer, goal is to get score of 100 in the shortest amount of time
*/


/*
Multiple Choice:
-radio buttons, with four options

Submit Button:
-<button> or <input type="submit">
-remove default function

Validate Answer:
-we have user's answer
-we have a correct answer
-if user_answer === correct answer..... DO SOMETHING!
-if user_answer != correct answer....DO SOMETHING ELSE!


*/

var pictureOne = {	//picture object to store everything for picture 1
	questionPool: ['option1','option2','option3','option4'], //contains multiple choice options
	correctAnswer: 'option2', //contains the correct option
	picturePath: 'assets/ourPictures/apple.png' //contains the path to our picture
}

var pictureTwo = {	//picture object to store everything for picture 1
	questionPool: ['option1','option2','option3','option4'], //contains multiple choice options
	correctAnswer: 'option2', //contains the correct option
	picturePath: 'assets/ourPictures/orange.png' //contains the path to our picture
}


//We need 'something' to equal an 'option' in our array, in our object