import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Dr from './Dr.png'
import Twitter from './twitter.svg';

import { MainHeader, BodyText } from "../../styles/HomeStyles";
const HomeHeader = () => (
    <Container>
        <Row>
            <style type='text/css'>
                {`
                    .ColBody {
                        margin: auto;
                    }

                    .border {
                        border: 10px solid #FFC855;
                    }

                    .Twitter-logo {
                        background-color: #64FCD9;
                        border-radius: 5px;
                        padding: 5px;
                    }

                    .callButton {
                        color: #FFC855;
                        flex-direction: row;
                        justify-content: center;
                        padding: 5px 10px;
                        margin: 10px;
                    }
                `}
            </style>
            <Col 
                className="ColBody"
                md='6' sm='12'
            >
                <Row>
                    <MainHeader>Come Make An Appointment Today!</MainHeader>
                </Row>
                <Row>
                    <BodyText>
                        We have the best primary caregivers in various fields of expertise. 
                        You can let us know what you need, and we will pair you with the best expert to hhelp you with your needs.
                    </BodyText>
                </Row>
                <Row>
                    <Col md='6' sm='12'>
                        <style type="text/css">
                            {`
                                
                            `}
                        </style>
                        <Image 
                            src={Twitter}
                            className="Twitter-logo"
                            alt="twitter.svg"
                        />
                        {/* <p>&nbsp;</p> */}
                        <Button
                            className="callButton"
                            variant="outline-dark"
                            size='sm'
                        >
                            Call Now: (123) 123-1234
                        </Button>
                    {/* </Col>
                    <Col md='6' sm='12'> */}
                        
                    </Col>
                </Row>
            </Col>
            <Col md='6' sm='12'>
                <Image 
                    src={Dr}
                    alt="Dr.png"
                    width="500px"
                    height="420px"
                />
            </Col>
        </Row>
        <Row className="border"></Row>
    </Container>
    
    
)

export default HomeHeader;