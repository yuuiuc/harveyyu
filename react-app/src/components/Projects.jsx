import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMobileScreenButton,
    faDna,
    faChartLine,
    faMicroscope,
} from '@fortawesome/free-solid-svg-icons'
import { projects } from '../data/content'

const iconMap = {
    'mobile-screen-button': faMobileScreenButton,
    dna: faDna,
    'chart-line': faChartLine,
    microscope: faMicroscope,
}

function Projects() {
    return (
        <section id="projects" className="section projects-section">
            <Container>
                <div className="section-header text-center">
                    <h2 className="section-title">Projects</h2>
                    <p className="section-subtitle">Things I have made.</p>
                </div>

                <Row className="g-4">
                    {projects.map((proj) => (
                        <Col md={6} lg={6} key={proj.title}>
                            <Card className="project-card h-100">
                                <div className="project-image d-flex align-items-center justify-content-center">
                                    <FontAwesomeIcon
                                        icon={iconMap[proj.icon] || faChartLine}
                                        className="project-icon"
                                    />
                                </div>
                                <Card.Body>
                                    <h3 className="project-title">{proj.title}</h3>
                                    <p className="project-category">{proj.category}</p>
                                    <p className="project-desc">{proj.description}</p>
                                    <ul className="project-highlights">
                                        {proj.highlights.map((h, i) => (
                                            <li key={i}>{h}</li>
                                        ))}
                                    </ul>
                                    <div className="project-tags mt-3">
                                        {proj.tags.map((tag) => (
                                            <Badge bg="" className="tech-badge me-2 mb-2" key={tag}>
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Projects
