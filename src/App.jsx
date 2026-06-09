import logo from './assets/logo.png'
import profPic from './assets/professional-photo_1.jpg'
import './App.css'
import resume from './assets/makeda_resume.pdf'
import {useState} from "react";


const Hero = () => {
    return (
        <h1>Hello Everyone!1</h1>
    )
}
const MenuBar = () => {
  return (
      <div className={"menu-bar"}>
        <img src={logo} alt="logo" width="170"/>
          <nav className={"all-nav-buttons"}>
          <MenuButton name={"ABOUT"} loc={"about"}/>
          <MenuButton name={"EDUCATION"} loc={"edu"}/>
          <MenuButton name={"SKILLS"} loc={"skills"} />
          <MenuButton name={"PROJECTS"} loc={"proj"}/>
          </nav>
      </div>
  )
}
const MenuButton = ({name, loc}) => {
    const goThere =() =>{
        const element = document.getElementsByClassName(loc)[0];
        element.scrollIntoView();
    }
    return (
      <button className={"menu-buttons"} onClick={goThere}>{name}</button>
  )
}

const About = () => {
    return (
        <section className={"about"}>

            <h3 className={"header"} >ABOUT ME</h3>
            <div className={"about-content"}>
                <img src={profPic} alt="professional-picture" className={"prof-pic"} />
            <p className={"about-passage"}>Hello there! My name is Mariah Makeda Ogunlana, a Biomedical Science student minoring in Computer Science. I enjoy learning how to build applications, working with data, and solving problems through code.
                I’m especially interested in how technology can be used to create meaningful real-world impact. I am a huge Stray Kids lover (STAY here!!) and in my free time, I like to read Christian fiction, and learn Chinese and French.
                <br/> Also, if you ever meet me in public, I’m probably listening to something :) </p>
            </div>
        </section>
    )
}
const Education = () => {
    return (
    <div className={"edu"}>
        <div className={"header"}>EDUCATION</div>
        <div className={"edu-content"}>
            <div className={"edu-box"}>
                <h4 className={"edu-sch-name"}>University of Texas at Dallas (B.Sc)</h4>
                <p className={"edu-sch-years"}> Sept. 2025 - Present</p>
                <hr className={"edu-dividing-line"}/>

                <p className={"edu-major-text"}>
                    <span className={"edu-major-title"}>Major:</span> Biomedical Science</p>
                <p className={"edu-minor-text"}>
                    <span className={"edu-minor-title"}>Minor:</span> Computer Science</p>
            </div>

            <div className={"edu-box"}>
                <h4 className={"edu-sch-name"}>Collin County Community College</h4>
                <p className={"edu-sch-years"}>Jan. 2024 - May 2025</p>
                 <hr className={"edu-dividing-line"}/>
                <p>Associate of Science in <span className={"edu-major-text"}>Computer Science</span> </p>
            </div>
        </div>
    </div>
    )
}
const programming_lang = [
    {label:"SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"},
    {label:"JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"},
    {label:"CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"},
    {label:"Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},
    {label:"Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"},
    {label:"HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},
]
const spoken_lang = [
    {label:"English", icon:"https://flagcdn.com/w80/us.png", level:5},
    {label:"Mandarian Chinese", icon: "https://flagcdn.com/w80/cn.png", level:3},
    {label:"French", icon: "https://flagcdn.com/w80/fr.png", level:1},
]
const frameworks_tools = [
    {label:"Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"},
    {label:"React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    {label:"SpringBoot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"},
    {label:"VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"},
    {label:"RabbitMQ", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg"},
    {label:"IntelliJ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg"},
    {label:"Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},
    {label:"Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"},
]

const Skills = () => {
    return <div className={"skills"}>
        <div className={"header"}>SKILLS</div>
        <div className={"skills-content"}>
            <div className={"skills-title"}>Programming Languages<br/></div>
            <div className={"skills-bar"}/>
            <div className={"skills-list"}>
                {programming_lang.map(lang => (
                    <span>
                        <img className={"skills-logo"} src={lang.icon} alt={lang.label + "logo"}></img>
                        {lang.label}</span>
                ))}
            </div>
            <div className={"skills-title"}>Frameworks & Tools<br/></div>
            <div className={"skills-bar"}/>
            <div className={"skills-list"}>
                {frameworks_tools.map(lang => (
                    <span>
                    <img className={"skills-logo"} src={lang.icon} alt={lang.label + "logo"}></img>{lang.label}</span>
                ))}
            </div>
            <div className={"skills-title"}>Spoken Languages<br/></div>
            <div className={"skills-bar"}/>
            <div className={"skills-list"}>
                {spoken_lang.map(lang => (
                    <span><img className={"flag-logo"} src={lang.icon} alt={lang.label + "logo"}></img>
                        {lang.label}</span>
                ))}
            </div>
        </div>
    </div>;
}

const projects = [
    {
        tag: "DSA",
        tagClass: "tag-mint",
        iconBg: "#C0EAE0",
        iconColor: "#1A4A3A",
        icon: "ti ti-world-www",
        path: "C:\\EMILIA\\browser-nav",
        title: "Browser Navigation System",
        description: "A Java-based simulation of browser back/forward navigation, built with classic data structures like linked lists, stacks, and queues.",
        lang: "Java",
        bullets: [
            "Built a browser navigation simulator using OOP with a doubly linked list, stack, queue, and dynamic array to manage user navigation data.",
            "Designed back/forward navigation logic and session state management to simulate real-world browser behavior.",
            "Optimized storage with a circular array queue for history tracking and a linked list stack for O(1) access.",
        ],
        chips: ["Java", "OOP", "Linked List", "Stack", "Queue"],
        url: "https://github.com/mari-ee/Browser-Navigation-System"
    },
    {
        tag: "BIOINFORMATICS",
        tagClass: "tag-teal",
        iconBg: "#d59fe1",
        iconColor: "#3e0850",
        icon: "ti-dna-2",
        path: "C:\\EMILIA\\codon-analysis",
        title: "COVID-19 Codon Bias Analysis",
        description: "A bioinformatics tool that analyzes how the COVID-19 genome uses codons across all 20 amino acids, generating reports from raw genomic data.",
        lang: "Java",
        bullets: [
            "Built a bioinformatics program analyzing codon usage bias across the COVID-19 genome, computing per-codon frequency for all 20 amino acids.",
            "Parsed structured CSV datasets to generate reproducible reports for biological data interpretation.",
            "Cross-referenced amino acid codon mappings and raw genome sequences to produce file-based analysis results.",
        ],
        chips: ["Java", "Bioinformatics", "CSV Parsing", "Data Analysis"],
        url: "https://github.com/mari-ee/Codon-Bias-Analysis"
    },
    {
        tag: "AI / MOBILE",
        tagClass: "tag-pink",
        iconBg: "#F4C0D1",
        iconColor: "#72243E",
        icon: "ti-chef-hat",
        path: "C:\\EMILIA\\fork-yeah",
        title: "Fork Yeah",
        description: "An AI-powered mobile cooking companion that gives real-time recipe guidance and dish feedback through photo-based input.",
        lang: "React Native · Expo · TypeScript · Gemini 2.0",
        bullets: [
            "Built a mobile AI-assisted cooking application that provides real-time recipe guidance and food evaluation through image-based input.",
            "Implemented client-side state management and API integration to deliver instant feedback on dishes and cooking steps.",
            "Designed a responsive React Native UI optimized for smooth user interaction during active cooking workflows."
        ],
        chips: ["React Native", "Expo", "TypeScript", "Gemini 2.0", "AI"],
        url: "https://github.com/mari-ee/forkyeah"
    },
    {
        tag: "API / WEB",
        tagClass: "tag-purple",
        iconBg: "#CECBF6",
        iconColor: "#1E3A8A",
        icon: "ti ti-music",
        path: "C:\\EMILIA\\moodmatch",
        title: "MoodMatch (In progress..)",
        description: "A full-stack music recommender that matches your current mood to curated song suggestions via a Spring Boot backend and React frontend.",
        lang: "React · Spring Boot · REST API",
        bullets: [
            "Developed a full-stack music recommendation system that maps user mood input to curated song suggestions through a RESTful API.",
            "Engineered backend services using Spring Boot to process user input, apply classification logic, and return ranked results.",
            "Built a responsive React interface enabling real-time interaction between user mood selection and dynamic recommendations."
        ],
        chips: ["React", "Spring Boot", "REST API", "Java", "Music Recommender"],
        url: "https://github.com/mari-ee/moodmatch-backend",
    }
];
function ProjectCard({ project, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <div className="card-body">
                <span className={`card-tag ${project.tagClass}`}>{project.tag}</span>
                <div className="card-title">{project.title}</div>
                <div className="card-preview">{project.description}</div>
            </div>
            <div className="card-footer">
                <div className="card-chips">
                    {project.chips.slice(0, 2).map((c) => (
                        <span key={c} className="chip-sm">{c}</span>
                    ))}
                </div>
                <span className="card-arrow">↗</span>
            </div>
        </div>
    );
}
function Modal({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>

                {/* Title bar */}
                <div className="modal-titlebar">
                    <span className="modal-path">{project.path}</span>
                    <button className="modal-close" onClick={onClose} aria-label="Close">x</button>
                </div>

                {/* Colored accent bar */}
                <div className="modal-accent-bar" />

                <div className="modal-body">

                    {/* Icon + meta */}
                    <div className="modal-header">
                        <div
                            className="modal-icon"
                            style={{ background: project.iconBg, borderColor: project.iconColor }}
                        >
                            <i
                                className={`ti ${project.icon}`}
                                style={{ fontSize: 22, color: project.iconColor }}
                                aria-hidden="true"
                            />
                        </div>
                        <div className="modal-meta">
                            <span className={`modal-tag ${project.tagClass}`}>{project.tag}</span>
                            <div className="modal-title">{project.title}</div>
                            <div className="modal-lang">{project.lang}</div>
                        </div>
                    </div>

                    <hr className="modal-divider" />

                    {/* Bullet points */}
                    <div className="modal-bullets">
                        {project.bullets.map((b, i) => (
                            <div key={i} className="bullet">
                                <div className="bullet-dot" />
                                <span>{b}</span>
                            </div>
                        ))}
                    </div>

                    {/* Tech chips */}
                    <div className="modal-chips">
                        {project.chips.map((c) => (
                            <span key={c} className={`chip-md ${project.tagClass}`}>{c}</span>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="modal-btns">
                        <a href={project.url} target="_blank" rel="noreferrer" className={`mbtn mbtn-primary ${project.tagClass}`}>
                            GitHub Repo
                        </a>

                    </div>

                </div>
            </div>
        </div>
    );
}
const Projects = () => {
    const [selected, setSelected] = useState(null);

    return (
        <section className="projects">
            <div className={"header"}>PROJECTS</div>
            <div className="cards-row">
                {projects.map((p) => (
                    <ProjectCard key={p.title} project={p} onClick={() => setSelected(p)} />
                ))}
            </div>
            <Modal project={selected} onClose={() => setSelected(null)} />
        </section>
    );
}

const socials = [
    { label: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", url: "https://github.com/mari-ee" },
    {label: "Instagram", icon: "src/assets/instagram_logo.png", url: "https://www.instagram.com/ma.ri.ah.m/" },
    {label: "Email", icon: "src/assets/mail.png", url: "mailto:mariahogunlana@gmail.com" }
]
const Contact = () => {
    return <div className={"contact"}>
        <div className={"contact-content"}>
            {/*   <div className={'resume'}>
            <h3>View my resume: </h3>
            <a className={'res-button'} href={resume} target="_blank" rel="noopener noreferrer">
                View My Resume
            </a>*/}
            <div className={"socials-row"}>
                {socials.map((s) => (
                    <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className={"social-link"}>
                        <img className={"social-icons"} src={s.icon} alt={s.label} />
                    </a>
                ))}
            </div>
        </div>
    </div>

}

const App = () => {
  return (
      <>
          <MenuBar/>
          <Hero/>
          <About/>
          <Education/>
          <Skills/>
          <Projects/>
          <Contact/>
      </>
    )
}

export default App
