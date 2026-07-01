import { useState } from "react";
import api from "../services/api";

function ResumeUpload() {

    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    const handleUpload = async () => {

        if (!file) {
            alert("Please select a PDF.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {

            const response = await api.post(
                "/upload-resume",
                formData
            );

            setMessage(response.data.message);

        } catch (error) {

            setMessage("Upload failed.");
        }
    };

    return (
        <div>

            <h2>Upload Resume</h2>

            <input
                type="file"
                accept=".pdf"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <br /><br />

            <button onClick={handleUpload}>
                Upload Resume
            </button>

            <p>{message}</p>

        </div>
    );
}

export default ResumeUpload;