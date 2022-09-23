import { useState } from 'react';
import DoctorList from './DoctorList';
import DoctorForm from './DoctorForm';
import { Modal, Button } from 'react-bootstrap';

const Doctors = ({ addDoctor, doctors }) => {
  const [adding, setAdd] = useState(false)

  return (
    <>
      <Button onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DoctorForm
            addDoctor={addDoctor}
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      <h1>All Doctors</h1>
      <DoctorList 
        doctors={doctors} 
      />
    </>
  )
}

export default Doctors;