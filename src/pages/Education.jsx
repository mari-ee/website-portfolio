import '../styles/Education.css'

const Education = () => {
    return (
        <div className="edu">
            <div className="header">EDUCATION</div>
            <div className="edu-content">
                <div className="edu-box-1">
                    <h4 className="edu-sch-name">University of Texas at Dallas (B.Sc)</h4>
                    <p className="edu-sch-years">Sept. 2025 - Present</p>
                    <hr className="edu-dividing-line" />
                    <p className="edu-major-text">
                        <span className="edu-major-title">Major:</span> Biomedical Science
                    </p>
                    <p className="edu-minor-text">
                        <span className="edu-minor-title">Minor:</span> Computer Science
                    </p>
                </div>

                <div className="edu-box-2">
                    <h4 className="edu-sch-name">Collin County Community College</h4>
                    <p className="edu-sch-years">Jan. 2024 - May 2025</p>
                    <hr className="edu-dividing-line" />
                    <p>Associate of Science in <span className="edu-major-text">Computer Science</span></p>
                </div>
            </div>
        </div>
    )
}

export default Education
