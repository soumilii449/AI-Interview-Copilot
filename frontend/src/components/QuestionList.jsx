import { useState } from "react";
import api from "../services/api";

function QuestionList() {

    const [questions, setQuestions] = useState([]);

    const generateQuestions = async () => {

        try {

            const response = await api.post("/generate-questions");

            setQuestions(response.data.questions);

        } catch (error) {

            console.log(error);

            alert("Failed to generate questions.");
        }

    };

    return (

        <div>

            <button onClick={generateQuestions}>
                Generate Interview Questions
            </button>

            <br /><br />

            <ol>

                {questions.map((question, index) => (

                    <li key={index}>
                        {question}
                    </li>

                ))}

            </ol>

        </div>

    );

}

export default QuestionList;