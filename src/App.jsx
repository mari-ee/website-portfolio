import './App.css'
import Navbar    from './pages/Navbar'
import Hero      from './pages/Hero'
import About     from './pages/About'
import Education from './pages/Education'
import Skills    from './pages/Skills'
import Projects  from './pages/Projects'
import Contact   from './pages/Contact'

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}

export default App
