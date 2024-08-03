document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('quiz-start-btn');
    const quizForm = document.getElementById('quiz-form');
    const timerDisplay = document.getElementById('quiz-timer');
    const restartButton = document.getElementById('quiz-restart-btn');
    const nextButton = document.querySelector('.quiz__next');
    const resultElement = document.getElementById('quiz-result');
    let quizData = [];
    let currentQuestionIndex = 0;
    let timer;
    let seconds = 0;
    let correctAnswersCount = 0;
    let userAnswered = false;

    // Fetch quiz data
    fetch('./dados/dados.json')
        .then(response => response.json())
        .then(data => {
            quizData = data;
            displayQuestion();
        })
        .catch(error => console.error('Error fetching quiz data:', error));

    // Event listeners
    startButton.addEventListener('click', startQuiz);
    restartButton.addEventListener('click', restartQuiz);
    nextButton.addEventListener('click', () => {
        if (userAnswered) {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                displayQuestion();
            } else {
                endQuiz();
            }
            resultElement.classList.add('hide'); 
            userAnswered = false;
        } else {
            alert('Por favor, selecione uma resposta.');
        }
    });

    function startQuiz() {
        startButton.classList.add('hide');
        quizForm.classList.remove('hide');
        resultElement.textContent = ''; 
        resultElement.classList.add('hide'); 
        startTimer();
    }

    function restartQuiz() {
        currentQuestionIndex = 0;
        seconds = 0;
        correctAnswersCount = 0;
        timerDisplay.textContent = '00:00';
        resultElement.textContent = ''; 
        resultElement.classList.add('hide');
        displayQuestion();
        startButton.classList.remove('hide');
        quizForm.classList.add('hide');
        clearInterval(timer);
    }

    function displayQuestion() {
        const questionData = quizData[currentQuestionIndex];
        const questionElement = document.querySelector('.quiz__question');
        const difficultyElement = document.querySelector('.quiz__dificuldade');
        const answersElements = document.querySelectorAll('.quiz__answer');
        
        questionElement.innerHTML = `<span class="quiz__number">${currentQuestionIndex + 1}.</span> ${questionData.pergunta}`;
        difficultyElement.textContent = questionData.nivel;
        
        answersElements.forEach((answerElement, index) => {
            const input = answerElement.querySelector('input');
            const label = answerElement.querySelector('label');
            input.checked = false;
            label.textContent = questionData.respostas[index];
            input.dataset.correct = questionData.respostas[index] === questionData.resposta_correta;

            // change event listener
            input.addEventListener('change', handleAnswerChange);
        });
    }

    function handleAnswerChange(event) {
        const selectedAnswer = event.target;
        const isCorrect = selectedAnswer.dataset.correct === 'true';
        if (isCorrect) {
            resultElement.textContent = 'Acertou !!';
            resultElement.classList.remove('hide'); 
            correctAnswersCount++;
        } else {
            resultElement.textContent = 'Errou !!';
            resultElement.classList.remove('hide'); 
        }
        userAnswered = true; 
    }

    function startTimer() {
        timer = setInterval(() => {
            seconds++;
            const minutes = Math.floor(seconds / 60);
            const secs = seconds % 60;
            timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }, 1000);
    }

    function endQuiz() {
        clearInterval(timer);
        resultElement.textContent = `Quiz concluído! Você acertou ${correctAnswersCount} de ${quizData.length} perguntas.`;
        resultElement.classList.remove('hide'); 
        restartQuiz();
    }
});
