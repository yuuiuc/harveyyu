import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFileLines, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { profile } from '../data/content'

function Hero() {
    return (
        <header id="home" className="hero d-flex align-items-center justify-content-center text-center text-white">
            <div className="hero-overlay" aria-hidden="true"></div>
            <Container className="hero-content">
                <h1 className="hero-name">{profile.name}</h1>
                <p className="hero-title">{profile.title}</p>

                <div className="hero-links d-flex justify-content-center gap-4 mt-4">
                    <a
                        href={profile.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hero-icon-link"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                        href={profile.links.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Resume"
                        className="hero-icon-link"
                    >
                        <FontAwesomeIcon icon={faFileLines} />
                    </a>
                    {profile.links.github && (
                        <a
                            href={profile.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="hero-icon-link"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    )}
                </div>

                <p className="hero-summary mt-4">{profile.summary}</p>
            </Container>

            <a href="#experience" className="hero-scroll" aria-label="Scroll to experience">
                <FontAwesomeIcon icon={faChevronDown} />
            </a>
        </header>
    )
}

export default Hero
