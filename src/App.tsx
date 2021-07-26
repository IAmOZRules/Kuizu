import React, { useState } from 'react';
import { fetchQuizQuestions, Difficulty, QuestionState } from './API';
import { Wrapper } from './App.styles';
import './App.css';

//Components
import QuestionCard from './components/QuestionCard';

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

// Constants
const TOTAL_QUESTIONS = 10;

const App = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    const startTrivia = async () => {
        setLoading(true);
        setGameOver(false);

        const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.MEDIUM);
        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false)
    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            // Get answer from user
            const answer = e.currentTarget.value;

            // Check if answer is correct
            const correct = questions[number].correct_answer === answer;

            // Increment score if answer is correct
            if (correct) {
                setScore(prev => prev + 1)
            }

            // Save answer in the array for user answers
            const AnswerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            }
            setUserAnswers(prev => [...prev, AnswerObject])
        }
    }

    const nextQuestion = () => {
        // I mean, seriously?
        const nextQuestion = number + 1;

        if (nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true);
        } else {
            setNumber(nextQuestion);
        }
    }

    return (
        <Wrapper>
            <h1>TS-REACT QUIZ</h1>

            {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                <button className="start" onClick={startTrivia}>Start Quiz</button>
            ) : null}

            {!gameOver ?
                <div className="score">
                    <p>Score: </p>
                    <p className="display-score">{score}</p>
                </div> : null}

            {loading && <p className="loading-msg">Loading Questions...</p>}
            {!loading && !gameOver && userAnswers.length !== TOTAL_QUESTIONS && (
                <QuestionCard
                    key={number}
                    questionNum={number + 1}
                    totalQuestions={TOTAL_QUESTIONS}
                    question={questions[number].question}
                    answers={questions[number].answers}
                    userAnswer={userAnswers ? userAnswers[number] : undefined}
                    callback={checkAnswer}
                />
            )}
            {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
                <button className="next" onClick={nextQuestion}>Next Question</button>
            ) : null}

        </Wrapper>

    );
}

export default App;