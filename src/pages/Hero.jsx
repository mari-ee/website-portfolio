import { useState, useEffect, useRef } from 'react'
import resume from '../assets/makeda_resume.pdf'
import '../styles/Hero.css'

const LINES = [
    { type: "input",  text: "$ npm run introduce-mariah" },
    { type: "blank" },
    { type: "output", key: "Name    ", value: "Mariah Makeda Ogunlana",              color: "green"  },
    { type: "output", key: "Role    ", value: "Biomedical Science @ UTD",            color: "blue"   },
    { type: "output", key: "Minor   ", value: "Computer Science",                    color: "blue"   },
    { type: "output", key: "Focus   ", value: "Full-Stack Dev / Bioinformatics",     color: "orange" },
    { type: "output", key: "Interests", value: "Software, Healthcare, & Stray Kids 🎧", color: "pink" },
    { type: "blank" },
    { type: "prompt" },
]

const CHAR_DELAY   = 38
const LINE_PAUSE   = 280
const RESTART_WAIT = 2800

const Hero = () => {
    const [rendered,   setRendered]   = useState([])
    const [typing,     setTyping]     = useState("")
    const [phase,      setPhase]      = useState({ line: 0, char: 0 })
    const [showCursor, setShowCursor] = useState(true)
    const rafRef   = useRef(null)
    const timerRef = useRef(null)

    function reset() {
        setRendered([])
        setTyping("")
        setPhase({ line: 0, char: 0 })
    }

    useEffect(() => {
        const { line, char } = phase
        if (line >= LINES.length) {
            timerRef.current = setTimeout(reset, RESTART_WAIT)
            return
        }

        const current = LINES[line]

        if (current.type === "blank" || current.type === "prompt") {
            timerRef.current = setTimeout(() => {
                setRendered(prev => [...prev, current])
                setTyping("")
                setPhase({ line: line + 1, char: 0 })
            }, LINE_PAUSE)
            return
        }

        const fullText =
            current.type === "input"
                ? current.text
                : current.key + "  " + current.value

        if (char < fullText.length) {
            timerRef.current = setTimeout(() => {
                setTyping(fullText.slice(0, char + 1))
                setPhase({ line, char: char + 1 })
            }, CHAR_DELAY)
        } else {
            timerRef.current = setTimeout(() => {
                setRendered(prev => [...prev, { ...current, done: true }])
                setTyping("")
                setPhase({ line: line + 1, char: 0 })
            }, LINE_PAUSE)
        }

        return () => {
            clearTimeout(timerRef.current)
            cancelAnimationFrame(rafRef.current)
        }
    }, [phase])

    useEffect(() => {
        const id = setInterval(() => setShowCursor(c => !c), 530)
        return () => clearInterval(id)
    }, [])

    function renderLine(item, idx) {
        if (item.type === "blank") return <div key={idx} className="term-blank" />
        if (item.type === "prompt") return (
            <div key={idx} className="term-line">
                <span className="t-prompt">mariah@utm</span>
                <span className="t-colon"> ~ </span>
            </div>
        )
        if (item.type === "input") return (
            <div key={idx} className="term-line">
                <span className="t-prompt">mariah@utm</span>
                <span className="t-colon"> ~ </span>
                <span className="t-cmd">{item.text}</span>
            </div>
        )
        if (item.type === "output") return (
            <div key={idx} className="term-line">
                <span className="t-key">{item.key}</span>
                <span className="t-colon">  </span>
                <span className={`t-val t-val-${item.color}`}>{item.value}</span>
            </div>
        )
        return null
    }

    const currentLine    = LINES[phase.line]
    const isTypingInput  = currentLine?.type === "input"
    const isTypingOutput = currentLine?.type === "output"

    return (
        <section className="hero-root">
            <div className="hero-left">
                <h1 className="hero-headline">
                    Mariah
                    <br />
                    <span>Makeda</span>
                    <br />
                    <span>Ogunlana</span>
                </h1>
                <p className="hero-sub">
                    Computer Science &amp; Biomedical Science student passionate about software, AI, music, and biology.
                </p>
                <div className="hero-btns">
                    <a className="hero-btn hero-btn-filled" href={resume} target="_blank" rel="noopener noreferrer">View Resume</a>
                    <a className="hero-btn hero-btn-ghost" target="_blank" rel="noopener noreferrer" href="mailto:mariahogunlana@gmail.com">Contact</a>
                </div>
            </div>

            <div className="hero-right">
                <div className="float-icon float-tl" aria-hidden="true">🎧</div>
                <div className="float-char float-tr" aria-hidden="true">爱</div>
                <div className="float-char float-bl" aria-hidden="true">生</div>

                <div className="term-window">
                    <div className="term-bar">
                        <span className="t-dot t-dot-r" />
                        <span className="t-dot t-dot-y" />
                        <span className="t-dot t-dot-g" />
                        <span className="term-path">~/mariah/portfolio — bash</span>
                    </div>
                    <div className="term-body">
                        {rendered.map((item, i) => renderLine(item, i))}

                        {phase.line < LINES.length && currentLine?.type !== "blank" && currentLine?.type !== "prompt" && (
                            <div className="term-line">
                                {isTypingInput && (
                                    <>
                                        <span className="t-prompt">mariah@utm</span>
                                        <span className="t-colon"> ~ </span>
                                        <span className="t-cmd">{typing}</span>
                                    </>
                                )}
                                {isTypingOutput && (
                                    <>
                                        <span className="t-key">{typing.slice(0, currentLine.key.length)}</span>
                                        <span className="t-colon">{typing.length > currentLine.key.length ? "  " : ""}</span>
                                        <span className={`t-val t-val-${currentLine.color}`}>{typing.slice(currentLine.key.length + 2)}</span>
                                    </>
                                )}
                                <span className="t-cursor" style={{ opacity: showCursor ? 1 : 0 }} />
                            </div>
                        )}

                        {(phase.line >= LINES.length || currentLine?.type === "prompt") && (
                            <div className="term-line">
                                <span className="t-prompt">mariah@utm</span>
                                <span className="t-colon"> ~ </span>
                                <span className="t-cursor" style={{ opacity: showCursor ? 1 : 0 }} />
                            </div>
                        )}
                    </div>
                </div>

                <div className="float-icon float-br" aria-hidden="true">🎵</div>
            </div>
        </section>
    )
}

export default Hero
