import '../styles/Contact.css'

const socials = [
    { label: "GitHub",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", url: "https://github.com/mari-ee" },
    { label: "Instagram", icon: "src/assets/instagram_logo.png", url: "https://www.instagram.com/ma.ri.ah.m/" },
    { label: "Email",     icon: "src/assets/mail.png",           url: "mailto:mariahogunlana@gmail.com" },
]

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-content">
                <div className="socials-row">
                    {socials.map((s) => (
                        <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="social-link">
                            <img className="social-icons" src={s.icon} alt={s.label} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Contact
