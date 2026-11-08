import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { profile } from '../data/content'

function Footer() {
    return (
        <footer className="site-footer text-center text-white">
            <Container>
                <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="footer-icon-link me-3"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <p className="footer-text mb-0 mt-2">
                    © {new Date().getFullYear()} {profile.name}. Built with React &amp; Bootstrap.
                </p>
            </Container>
        </footer>
    )
}

export default Footer
