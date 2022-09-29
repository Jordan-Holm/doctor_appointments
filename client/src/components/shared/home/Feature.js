import { Container, Row, Col, Image } from "react-bootstrap";
import { FeatureHeader, BodyText } from "../../styles/HomeStyles";
import Med from './med.png';
const Feature = () => (
    <Container>
        <Row>
            <Col md='6' sm='12'>
                <Image 
                    src={Med}
                    width="500px"
                    height="420px"
                />
            </Col>

            <style type='text/css'>
                {`
                    .ColBody {
                        margin: auto;
                    }
                    
                    .border {
                        border: 10px solid #FFC855;
                    }
                `}
            </style>
            <Col 
                className="ColBody"
                md='6' sm='12'
            >
                <Row>
                    <FeatureHeader>
                        Leading Industry Technologies and Advanced Treatmeants
                    </FeatureHeader>
                </Row>
                <Row>
                    <BodyText>
                        We have the top technological innovations in all of the tools, equipments, and facilities we have on site. 
                        You can expect the fastest and best success rate with our care with over 60,000 thousands locations around the world. 
                    </BodyText>
                </Row>
            </Col>
        </Row>
        <Row className="border"></Row>
    </Container>
)

export default Feature;