import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DoctorList = ({ doctors }) => (
  <Container>
    <Row md='4' sm='12'>
      { doctors.map( c =>
        <Col key={c.id}>
          <Card style={{ width: '10rem' }}>
            <Card.Body>
              <Card.Title>{c.title}</Card.Title>
              <Card.Text>
                {c.desc}
                {c.ctype}
              </Card.Text>
              <Link to={`/doctors/${c.id}`}>
                <Button>Show</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      )}
    </Row>
  </Container>
)

export default DoctorList;