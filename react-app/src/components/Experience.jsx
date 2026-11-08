import { Container, Row, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import {
    faBuildingColumns,
    faCartShopping,
    faGasPump,
    faGraduationCap,
} from '@fortawesome/free-solid-svg-icons'
import { experience } from '../data/content'

// Map string keys from the data file to FontAwesome icon objects.
const iconMap = {
    apple: faApple,
    'building-columns': faBuildingColumns,
    'cart-shopping': faCartShopping,
    'gas-pump': faGasPump,
    'graduation-cap': faGraduationCap,
}

function Experience() {
    return (
        <section id="experience" className="section experience-section">
            <Container>
                <div className="section-header text-center">
                    <h2 className="section-title">Experience</h2>
                    <p className="section-subtitle">Jobs I have had.</p>
                </div>

                <Row className="justify-content-center">
                    <Col lg={9}>
                        {experience.map((job) => (
                            <Card className="exp-card mb-4" key={job.company}>
                                <Card.Body>
                                    <div className="d-flex flex-column flex-md-row align-items-md-center">
                                        <div
                                            className="exp-logo mb-3 mb-md-0 me-md-4"
                                            style={{ backgroundColor: job.color }}
                                        >
                                            <FontAwesomeIcon icon={iconMap[job.icon] || faGraduationCap} />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="d-flex flex-column flex-sm-row justify-content-between">
                                                <div>
                                                    <h3 className="exp-company">{job.company}</h3>
                                                    <h4 className="exp-role">{job.role}</h4>
                                                </div>
                                                <div className="exp-meta text-sm-end">
                                                    <span className="d-block">{job.location}</span>
                                                    <span className="d-block exp-dates">{job.dates}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="exp-points mt-3 mb-0">
                                        {job.points.map((p, i) => (
                                            <li key={i}>
                                                <strong>{p.title}:</strong> {p.text}
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Experience
