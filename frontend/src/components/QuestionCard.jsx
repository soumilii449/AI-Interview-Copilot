import { useState } from "react";

function QuestionCard({ question, onSubmit, loading }) {

    const [answer, setAnswer] = useState("");

    const handleSubmit = async () => {

        if (answer.trim() === "") {
            alert("Please enter your answer.");
            return;
        }

        await onSubmit(answer);

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
                disabled={loading}
            />

            <br /><br />

            <button
                onClick={handleSubmit}
                disabled={loading}
            >
                {loading ? "Evaluating..." : "Submit Answer"}
            </button>

            {loading && (
                <p style={{ marginTop: "15px", color: "#2563eb" }}>
                    🤖 AI is evaluating your answer...
                </p>
            )}

        </div>
    );

}

export default QuestionCard;