import logo from '../assets/logo.png'
import '../styles/Navbar.css'

const MenuButton = ({ name, loc }) => {
    const goThere = () => {
        const element = document.getElementsByClassName(loc)[0]
        element.scrollIntoView()
    }
    return (
        <button className="menu-buttons" onClick={goThere}>{name}</button>
    )
}

const Navbar = () => {
    return (
        <div className="menu-bar">
            <img src={logo} alt="logo" width="170" />
            <nav className="all-nav-buttons">
                <MenuButton name="ABOUT"    loc="about"    />
                <MenuButton name="EDUCATION" loc="edu"     />
                <MenuButton name="SKILLS"   loc="skills"   />
                <MenuButton name="PROJECTS" loc="projects" />
            </nav>
        </div>
    )
}

export default Navbar
