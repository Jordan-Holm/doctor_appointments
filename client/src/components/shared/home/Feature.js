import { Container, Row, Col, Image } from "react-bootstrap";
import Med from './med.png';
const Feature = () => (
    <Container>
        <Row>
            <Col md='6' sm='12'>
                <Image src={Med} />
            </Col>
            <Col md='6' sm='12'>
                <Row>
                    <h3>
                        Leading Industry Technologies and Advanced Treatmeants
                    </h3>
                </Row>
                <Row>
                    <p>
                        We have the top technological innovations in all of the tools, equipments, and facilities we have on site. 
                        You can expect the fastest and best success rate with our care with over 60,000 thousands locations around the world. 
                    </p>
                </Row>
            </Col>
        </Row>
    </Container>
)

export default Feature;