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
        <div className="card">

            <h2>📄 Upload Resume</h2>

            <input
                className="file-input"
                type="file"
                accept=".pdf"
                onChange={(e) => setFile(e.target.files[0])}
            />

            {file && (
                <p className="file-name">
                    Selected: <strong>{file.name}</strong>
                </p>
            )}

            <button
                className="primary-btn"
                onClick={handleUpload}
            >
                Upload Resume
            </button>

            {message && (
                <p className="success-text">
                    {message}
                </p>
            )}

        </div>
    );
}

export default ResumeUpload;