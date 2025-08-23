import '../styles/Resume.css';
export default function Resume() {
    return(
        <div className="resume-container">
            <h1 className="resume-title">Resume</h1>
            <div className="resume-content">
                <a href="/BhumikaPawar_Resume.pdf" download className="resume-download-link">Download Resume (PDF)</a>
            </div>
        </div>
    )
}