import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Image, Button } from "react-bootstrap";
import AppointmentList from '../appointments/AppointmentList';
import { UserConsumer } from "../../providers/UserProvider";
import UserForm from "./UserForm";

const UserShow = ({ updateUser, deleteUser }) => {
  const [user, setUser] = useState({ name: '', age: '', disease: '' })
  const { id } = useParams()
  const [userAppointments, setUserAppointments] = useState([])
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/users/${id}`)
      .then( res => setUser(res.data) )
      .catch( err => console.log(err) )

    axios.get(`/api/${id}/userAppointments`)
      .then( res => setUserAppointments(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const { name, age, disease } = user
  return (
    <>
      { editing ?
        <>
          <UserForm
            id={id}
            name={name}
            age={age}
            disease={disease}
            updateUser={updateUser}
            setEdit={setEdit}
          />
          <Button 
            variant="warning"
            onClick={() => setEdit(false)}
          >
            Cancel
          </Button>
        </>
        :
        <>
          <h1>{name}</h1>
          <Button 
            variant="warning"
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Button 
            variant="danger"
            onClick={() => deleteUser(id)}
          >
            Delete
          </Button>
          <br />
          <h1>All Appointments for this user</h1>
          <AppointmentList appointments={userAppointments} />
        </>
      }
    </>
  )
}

const ConnectedUserShow = (props) => (
  <UserConsumer>
    { value => <UserShow {...value} {...props} />}
  </UserConsumer>
)

export default ConnectedUserShow;