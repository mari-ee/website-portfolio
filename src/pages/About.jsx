import profPic from '../assets/professional-photo_1.jpg'
import '../styles/About.css'

const About = () => {
    return (
        <section className="about">
            <h3 className="header">ABOUT ME</h3>
            <div className="about-content">
                <img src={profPic} alt="professional-picture" className="prof-pic" />
                <p className="about-passage">
                    Hello there! My name is Makeda Ogunlana, a Biomedical Science student minoring in Computer Science.
                    I enjoy learning how to build applications, working with data, and solving problems through code.
                    I'm especially interested in how technology can be used to create meaningful real-world impact.<br/>
                    I am a huge Stray Kids lover (STAY here!!) and in my free time, I like to read Christian fiction,
                    and learn Chinese and French.
                    <br/> Also, if you ever meet me in public, I'm probably listening to something :)
                </p>
            </div>
        </section>
    )
}

export default About
