import { useState } from "react";

function QuestionCard({ question, onSubmit }) {

    const [answer, setAnswer] = useState("");

    const handleSubmit = () => {

        if (answer.trim() === "") {
            alert("Please enter your answer.");
            return;
        }

        onSubmit(answer);

        setAnswer("");
    };

    return (
        <div className="question-card">

            <h2>Interview Question</h2>

            <p>{question}</p>

            <textarea
                rows="6"
                placeholder="Type your answer here..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
            />

            <br /><br />

            <button onClick={handleSubmit}>
                Submit Answer
            </button>

        </div>
    );

}

export default QuestionCard;