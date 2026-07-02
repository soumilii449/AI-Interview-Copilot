import "./App.css";

import ResumeUpload from "./components/ResumeUpload";
import QuestionList from "./components/QuestionList";

function App() {
  return (
    <div className="app">
      <h1 className="title">AI Interview Copilot</h1>

      <ResumeUpload />

      <QuestionList />
    </div>
  );
}

export default App;