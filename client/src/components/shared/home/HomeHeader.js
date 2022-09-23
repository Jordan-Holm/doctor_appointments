import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Dr from './Dr.png'
import Twitter from './twitter.svg';
const HomeHeader = () => (
    <Container>
        <Row>
            <Col md='6' sm='12'>
                <Row>
                    <h1>Come Make A Appointment Today!</h1>
                </Row>
                <Row>
                    <p>
                        We have the best primary caregivers in various fields of expertise. 
                        You can let us know what you need, and we will pair you with the best expert to hhelp you with your needs.
                    </p>
                </Row>
                <Row>
                    <Col md='6' sm='12'>
                        <Image 
                            src={Twitter}
                            className="Twitter-logo"
                            alt="twitter.svg"
                        />
                    </Col>
                    <Col md='6' sm='12'>
                        <Button
                            variant="outline-dark"
                            size='sm'
                        >
                            Call Now: (123) 123-1234
                        </Button>
                    </Col>
                </Row>
            </Col>
            <Col md='6' sm='12'>
                <Image 
                    src={Dr}
                    className="Dr-image"
                    alt="Dr.png"
                />
            </Col>
        </Row>
    </Container>
)

export default HomeHeader;