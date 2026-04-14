import logo from './assets/logo.png'
import profPic from './assets/professional-photo.png'
import './App.css'


const MenuBar = () => {
  return (
      <div className={"menu-bar"}>
        <img src={logo} alt="logo" width="270"/>
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
            <div>
            <h3 className={"main-header"}>ABOUT ME</h3>
            <p className={"about-passage"}>Hello there! My name is Mariah Makeda Ogunlana, a Biomedical Science student minoring in Computer Science. I enjoy learning how to build applications, working with data, and solving problems through code. I’m especially interested in how technology can be used to create meaningful real-world impact. I am a huge Stray Kids lover (STAY here!!) and in my free time, I like to read, watch Chinese dramas, and listen to music.
                <b>Fun fact:</b> If you ever meet me, I’m probably listening to something :) </p>
            </div>
            <img className={"prof-pic"} src={profPic} alt="professional-picture"/>
        </div>
    )
}
const Education = () => {
    return (
    <div className={"edu"}>
        <div className={"main-header"}>EDUCATION</div>
        <div className={"edu-content"}>
            <div className={"edu-box"}>
                <h4 className={"edu-1-sch-name"}>University of Texas at Dallas</h4>
                <p className={"edu-1-sch-degree"}>Bachlor of Science</p>
                <hr className={"edu-1-sch-line"}/>
                <p className={"edu-1-sch-major"}>Biomedical Science</p>
                <p className={"edu-1-sch-minor"}>Computer Science</p>

            </div>

            <div className={"edu-box"}>
                <h4>Collin College<br/></h4>
                <p>Associate of Science</p>
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
