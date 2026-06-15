import { useState } from 'react'
import '../styles/Projects.css'

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
        url: "https://github.com/mari-ee/Browser-Navigation-System",
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
        url: "https://github.com/mari-ee/Codon-Bias-Analysis",
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
            "Designed a responsive React Native UI optimized for smooth user interaction during active cooking workflows.",
        ],
        chips: ["React Native", "Expo", "TypeScript", "Gemini 2.0", "AI"],
        url: "https://github.com/mari-ee/forkyeah",
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
            "Built a responsive React interface enabling real-time interaction between user mood selection and dynamic recommendations.",
        ],
        chips: ["React", "Spring Boot", "REST API", "Java", "Music Recommender"],
        url: "https://github.com/mari-ee/moodmatch-backend",
    },
]

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
    )
}

function Modal({ project, onClose }) {
    if (!project) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-titlebar">
                    <span className="modal-path">{project.path}</span>
                    <button className="modal-close" onClick={onClose} aria-label="Close">x</button>
                </div>
                <div className="modal-accent-bar" />
                <div className="modal-body">
                    <div className="modal-header">
                        <div className="modal-icon" style={{ background: project.iconBg, borderColor: project.iconColor }}>
                            <i className={`ti ${project.icon}`} style={{ fontSize: 22, color: project.iconColor }} aria-hidden="true" />
                        </div>
                        <div className="modal-meta">
                            <span className={`modal-tag ${project.tagClass}`}>{project.tag}</span>
                            <div className="modal-title">{project.title}</div>
                            <div className="modal-lang">{project.lang}</div>
                        </div>
                    </div>
                    <hr className="modal-divider" />
                    <div className="modal-bullets">
                        {project.bullets.map((b, i) => (
                            <div key={i} className="bullet">
                                <div className="bullet-dot" />
                                <span>{b}</span>
                            </div>
                        ))}
                    </div>
                    <div className="modal-chips">
                        {project.chips.map((c) => (
                            <span key={c} className={`chip-md ${project.tagClass}`}>{c}</span>
                        ))}
                    </div>
                    <div className="modal-btns">
                        <a href={project.url} target="_blank" rel="noreferrer" className={`mbtn mbtn-primary ${project.tagClass}`}>
                            GitHub Repo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    const [selected, setSelected] = useState(null)

    return (
        <section className="projects">
            <div className="header">PROJECTS</div>
            <div className="cards-row">
                {projects.map((p) => (
                    <ProjectCard key={p.title} project={p} onClick={() => setSelected(p)} />
                ))}
            </div>
            <Modal project={selected} onClose={() => setSelected(null)} />
        </section>
    )
}

export default Projects
