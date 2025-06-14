// Function Declaration
function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";

    // Retrieve the user's answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = "";
    if (selectedOption) {
        userAnswer = selectedOption.value;
    }

    // Compare and provide feedback
    const feedback = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
