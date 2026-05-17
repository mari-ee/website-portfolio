import logo from './assets/logo.png'
import profPic from './assets/professional-photo.png'
import './App.css'


const MenuBar = () => {
  return (
      <div className={"menu-bar"}>
        <img src={logo} alt="logo" width="170"/>
          <nav className={"all-nav-buttons"}>
          <MenuButton name={"ABOUT"} loc={"about"}/>
          <MenuButton name={"EDUCATION"} loc={"edu"}/>
          <MenuButton name={"SKILLS"} loc={"skills"} />
          <MenuButton name={"PROJECTS"} loc={"proj"}/>
          <MenuButton name={"CONTACT"} loc={"cont"}/>
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
        <div className={"about"}>
            <h3 className={"header"}>ABOUT ME</h3>
            <div className={"about-content"}>
                <img src={profPic} alt="professional-picture" className={"prof-pic"} />
            <p className={"about-passage"}>Hello there! My name is Mariah Makeda Ogunlana, a Biomedical Science student minoring in Computer Science. I enjoy learning how to build applications, working with data, and solving problems through code.
                I’m especially interested in how technology can be used to create meaningful real-world impact. I am a huge Stray Kids lover (STAY here!!) and in my free time, I like to read Christian fiction, and learn Chinese and French.
                <br/> Also, if you ever meet me in public, I’m probably listening to something :) </p>
            </div>
        </div>
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
const Skills = () => {
    return <h3 className={"skills"}>Skills</h3>;
}
const Projects = () => {
    return <h1 className={"proj"}>Projects</h1>;
}
const Contact = () => {
    return <h1 className={"cont"}>Contact</h1>;
}

const App = () => {
  return (
      <>
          <MenuBar/>
          <About/>
          <Education/>
          <Skills/>
          <Projects/>
          <Contact/>
      </>
    )
}

export default App
