import '../styles/Contact.css'

const socials = [
    { label: "GitHub", url: "https://github.com/mari-ee" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/makeda-ogunlana/" },
    { label: "Instagram", url: "https://www.instagram.com/ma.ri.ah.m/" },
    { label: "Email",  url: "mailto:mariahogunlana@gmail.com" },
]

const iconMap = {
    GitHub:    "ti-brand-github",
    LinkedIn:  "ti-brand-linkedin",
    Instagram: "ti-brand-instagram",
    Email:     "ti-mail",
}

const Contact = () => {
    return (
        <div className="contact">
            <div className="socials-row">
                {socials.map((s) => (
                    <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="social-link">
                        <i className={`ti ${iconMap[s.label]}`} style={{ fontSize: 16, color: "rgba(13,27,42,0.75)" }} aria-hidden="true" />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Contact
