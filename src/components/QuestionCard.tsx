import React from 'react';
import Parser from 'html-react-parser';
import { AnswerObject } from '../App';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNum: number;
    totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNum, totalQuestions }) => (
    <Wrapper>
        <p className='number'>
            Question: {questionNum} / {totalQuestions}
        </p>
        <p>{Parser(question)}</p>
        <div>
            {answers.map((answer) => (
                <ButtonWrapper
                    key={answer}
                    correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}
                >
                    <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                        <span>{Parser(answer)}</span>
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
);

export default QuestionCard;