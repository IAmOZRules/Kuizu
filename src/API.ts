import { shuffleArray } from "./utils";

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
    EARY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    
    // const endpoint = `https://quizapi.io/api/v1/questions?apiKey=${api_key}&category=linux&difficulty=${difficulty}&limit=${amount}`
    
    // await the fetch from endpoint, then await the conversion to JSON
    const data = await (await fetch(endpoint)).json()

    return data.results.map((question: any) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }));
}