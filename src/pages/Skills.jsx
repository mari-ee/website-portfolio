import '../styles/Skills.css'

const programming_lang = [
    { label: "SQL",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
    { label: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" },
    { label: "CSS",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { label: "Python",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { label: "Java",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { label: "HTML",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
]

const spoken_lang = [
    { label: "English",          icon: "https://flagcdn.com/w80/us.png", level: 5 },
    { label: "Mandarian Chinese", icon: "https://flagcdn.com/w80/cn.png", level: 3 },
    { label: "French",           icon: "https://flagcdn.com/w80/fr.png", level: 1 },
]

const frameworks_tools = [
    { label: "Postman",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { label: "React",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { label: "SpringBoot",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    { label: "VS Code",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    { label: "RabbitMQ",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg" },
    { label: "IntelliJ",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" },
    { label: "Git",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { label: "Github",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
]

const Skills = () => {
    return (
        <div className="skills">
            <div className="header">SKILLS</div>
            <div className="skills-content">
                <div className="skills-title">Programming Languages</div>
                <div className="skills-bar" />
                <div className="skills-list">
                    {programming_lang.map(lang => (
                        <span key={lang.label}>
                            <img className="skills-logo" src={lang.icon} alt={lang.label + " logo"} />
                            {lang.label}
                        </span>
                    ))}
                </div>

                <div className="skills-title">Frameworks &amp; Tools</div>
                <div className="skills-bar" />
                <div className="skills-list">
                    {frameworks_tools.map(lang => (
                        <span key={lang.label}>
                            <img className="skills-logo" src={lang.icon} alt={lang.label + " logo"} />
                            {lang.label}
                        </span>
                    ))}
                </div>

                <div className="skills-title">Spoken Languages</div>
                <div className="skills-bar" />
                <div className="skills-list">
                    {spoken_lang.map(lang => (
                        <span key={lang.label}>
                            <img className="flag-logo" src={lang.icon} alt={lang.label + " logo"} />
                            {lang.label}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
