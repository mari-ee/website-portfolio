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
            <div >
                <h3 className={"about-header"}>ABOUT ME</h3>
                <p className={"about-passage"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <img className={"prof-pic"} src={profPic} alt="professional-picture" />
        </div>
    )
}
const Education = () => {
    return <h1 className={"edu"}>Education</h1>;
}
const Skills = () => {
    return <h1 className={"skills"}>Skills</h1>;
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
