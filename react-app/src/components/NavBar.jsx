import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHouse,
    faBriefcase,
    faCode,
    faGraduationCap,
} from '@fortawesome/free-solid-svg-icons'

const navItems = [
    { id: 'home', label: 'Home', icon: faHouse },
    { id: 'experience', label: 'Experience', icon: faBriefcase },
    { id: 'projects', label: 'Projects', icon: faCode },
    { id: 'education', label: 'Education', icon: faGraduationCap },
]

function NavBar() {
    const [active, setActive] = useState('home')

    useEffect(() => {
        // Scroll-spy: highlight the section currently in view.
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id)
                    }
                })
            },
            { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
        )

        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    const handleClick = (e, id) => {
        e.preventDefault()
        const target = document.getElementById(id)
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
            setActive(id)
        }
    }

    return (
        <nav className="pill-nav" aria-label="Section navigation">
            <ul className="pill-nav-list">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            className={`pill-nav-link ${active === item.id ? 'active' : ''}`}
                            onClick={(e) => handleClick(e, item.id)}
                            aria-current={active === item.id ? 'page' : undefined}
                        >
                            <FontAwesomeIcon icon={item.icon} className="pill-nav-icon" />
                            <span className="pill-nav-label">{item.label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar
