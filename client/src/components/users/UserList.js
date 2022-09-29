import { ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserList = ({ users }) => (
  <>
    <ListGroup variant='flush'>
      { users.map( u =>
        <ListGroup.Item key={u.id}>
          {u.name}
          <Link to={`/users/${u.id}`}>
            <Button>Show</Button>
          </Link>
        </ListGroup.Item>
      ) }
    </ListGroup>
  </>
)

export default UserList;