import { Container, Row, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { education } from '../data/content'

function Education() {
    return (
        <section id="education" className="section education-section">
            <Container>
                <div className="section-header text-center">
                    <h2 className="section-title">Education</h2>
                    <p className="section-subtitle">Where I studied.</p>
                </div>

                <Row className="justify-content-center">
                    <Col lg={9}>
                        {education.map((edu) => (
                            <Card className="edu-card mb-4" key={edu.school + edu.degree}>
                                <Card.Body className="d-flex flex-column flex-md-row align-items-md-center">
                                    <div className="edu-logo mb-3 mb-md-0 me-md-4">
                                        <FontAwesomeIcon icon={faGraduationCap} />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="d-flex flex-column flex-sm-row justify-content-between">
                                            <div>
                                                <h3 className="edu-school">{edu.school}</h3>
                                                <h4 className="edu-degree">{edu.degree}</h4>
                                            </div>
                                            <span className="edu-dates">{edu.dates}</span>
                                        </div>
                                        <p className="edu-detail mb-0 mt-2">{edu.detail}</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Education
