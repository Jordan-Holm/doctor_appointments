import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import { MainHeader, FeatureHeader, BodyText } from "../../styles/HomeStyles";
const Faqs = () => (
    <Container>
        <Row>
            <MainHeader className="text-center">
                FAQS
            </MainHeader>
        </Row>

        {/* Accordion */}
        <Row>
            <style type="text/css">
                {`
                    .accordText button {
                        color: #FFC855;
                    }

                    .accordText {
                        color: #FFC855;
                    }

                `}
            </style>
            <Col lg='20' md='30' sm='40'>
                <Accordion defaultActiveKey={0}>
                    <Accordion.Item 
                        eventKey="0"
                        className="accordText"
                    >
                        <Accordion.Header>
                            How much does it cost?
                        </Accordion.Header>
                        <Accordion.Body>
                            All of the cost will be covered by all insurance companies 
                            and our rich benefactors and sponsors to keep the cost free
                            and provide a wide range of access to healthcare.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item 
                        eventKey="1"
                        className="accordText"
                    >
                        <Accordion.Header>
                            What care do you provide?
                        </Accordion.Header>
                        <Accordion.Body>
                            We provide care all the way from pediatrics, to family 
                            doctors. From heads to toes, in and out, we provide all
                            the care needed for patients and link them up to the
                            correct needed specialist.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item 
                        eventKey="2"
                        className="accordText"
                    >
                        <Accordion.Header>
                            How do I make an Appointment?
                        </Accordion.Header>
                        <Accordion.Body>
                            To make a appointment, all you need is to call the number
                            and provide the receptionist the info needed and you are 
                            all set! 
                            We will put you in our system and connect everything for 
                            you.
                            It is that easy! 
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
        </Row>

        <Row className="text-center">
            <FeatureHeader>
                Still have a question?
            </FeatureHeader>

            <BodyText>
                Drop us a call
            </BodyText>

            <Col>
                <Button 
                    variant="outline-dark"
                    size="sm"
                >
                    (123) 123-1234
                </Button>
            </Col>
        </Row>
    </Container>
)

export default Faqs;