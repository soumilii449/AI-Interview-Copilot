import InterviewTimer from "./InterviewTimer";
import ProgressBar from "./ProgressBar";
import { useState } from "react";
import api from "../services/api";

import QuestionCard from "./QuestionCard";
import EvaluationCard from "./EvaluationCard";

function QuestionList() {

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [evaluation, setEvaluation] = useState(null);
    const [loading, setLoading] = useState(false);

    const generateQuestions = async () => {

        try {

            const response = await api.post("/generate-questions");

            setQuestions(response.data.questions);
            setCurrentIndex(0);
            setEvaluation(null);

        } catch (error) {

            console.log(error);
            alert("Failed to generate questions.");

        }

    };

    const submitAnswer = async (answer) => {

        try {

            setLoading(true);

            const response = await api.post("/evaluate-answer", {

                question: questions[currentIndex],
                answer: answer

            });

            setEvaluation(response.data);

        } catch (error) {

            console.log(error);
            alert("Evaluation failed.");

        } finally {

            setLoading(false);

        }

    };

    const nextQuestion = () => {

        if (currentIndex < questions.length - 1) {

            setCurrentIndex(currentIndex + 1);
            setEvaluation(null);

        }

    };

    return (

        <div>

            <button onClick={generateQuestions}>
                Generate Interview Questions
            </button>

            <br /><br />

            {questions.length > 0 && (

                <>

                    <InterviewTimer />

                    <br />

                    <h2>
                        Question {currentIndex + 1} of {questions.length}
                    </h2>

                    <ProgressBar
                        current={currentIndex + 1}
                        total={questions.length}
                    />

                    <br />

                    <QuestionCard
                        question={questions[currentIndex]}
                        onSubmit={submitAnswer}
                        loading={loading}
                    />

                    <EvaluationCard
                        evaluation={evaluation}
                    />

                    {/* Next Question Button */}
                    {evaluation && currentIndex < questions.length - 1 && (

                        <button onClick={nextQuestion}>
                            Next Question →
                        </button>

                    )}

                    {/* Interview Completed */}
                    {evaluation && currentIndex === questions.length - 1 && (

                        <div style={{ marginTop: "30px" }}>

                            <h2>🎉 Interview Completed!</h2>

                            <p>
                                Congratulations! You have successfully completed all the interview questions.
                            </p>

                            <button
                                onClick={() => {

                                    setQuestions([]);
                                    setCurrentIndex(0);
                                    setEvaluation(null);

                                }}
                            >
                                Start New Interview
                            </button>

                        </div>

                    )}

                </>

            )}

        </div>

    );

}

export default QuestionList;