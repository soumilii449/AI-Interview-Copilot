import { useEffect, useState } from "react";

function InterviewTimer() {

    const TOTAL_TIME = 30 * 60; // 30 minutes

    const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

    useEffect(() => {

        const timer = setInterval(() => {

            setTimeLeft(prev => {

                if (prev <= 1) {

                    clearInterval(timer);
                    return 0;

                }

                return prev - 1;

            });

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (

        <div className="timer">

            ⏱ Interview Time Left:
            {" "}
            <strong>
                {minutes}:{seconds.toString().padStart(2, "0")}
            </strong>

        </div>

    );

}

export default InterviewTimer;