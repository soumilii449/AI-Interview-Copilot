function EvaluationCard({ evaluation }) {

    if (!evaluation) return null;

    return (

        <div className="evaluation-card">

            <h2>AI Feedback</h2>

            <h3>Score: {evaluation.score}/10</h3>

            <h3>Strengths</h3>

            <ul>
                {evaluation.strengths.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h3>Weaknesses</h3>

            <ul>
                {evaluation.weaknesses.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h3>Improved Answer</h3>

            <p>{evaluation.improved_answer}</p>

        </div>

    );

}

export default EvaluationCard;