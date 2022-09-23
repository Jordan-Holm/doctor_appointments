import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DoctorList from './DoctorList';
import DoctorForm from './DoctorForm';

const DoctorShow = ({ updateDoctor, deleteDoctor }) => {
  const { id } = useParams()
  const [doctor, setDoctor] = useState({ name: '', position: '', npi: '' })
  const [doctorUsers, setDoctorUsers] = useState([])
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/doctors/${id}`)
      .then( res => setDoctor(res.data))
      .catch( err => console.log(err) )

    axios.get(`/api/${id}/doctorUsers`)  
      .then( res => setDoctorUsers(res.data))
      .catch( err => console.log(err) )  
  }, [])

  const { name, position, npi } = doctor
  return (
    <>
      { editing ?
        <>
          <DoctorForm
            id={id}
            name={name}
            position={position}
            npi={npi}
            updateDoctor={updateDoctor}
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
          <h3>{npi}</h3>
          <p>{position}</p>
          <Button 
            variant="warning"
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Link 
            to={`/${id}/appointments`}
            state={{ doctorName: name }}
          > 
            <Button variant="success">
              Appointments
            </Button>
          </Link>
          <Button 
            variant="danger"
            onClick={() => deleteDoctor(id)}
          >
            Delete
          </Button>
          <br />
          <h1>Our elite team of Doctors.</h1>
          <UserList users={doctorUsers} />
        </>
      }
    </>
  )
}

export default DoctorShow;