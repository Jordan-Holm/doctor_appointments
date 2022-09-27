import { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';

const DoctorForm = ({ addDoctor, setAdd, id, name, position, npi, img, updateDoctor, setEdit }) => {
  const [doctor, setDoctor] = useState({ name: '', position: '', npi: '' })

  useEffect( () => {
    if (id) {
      setDoctor({ name, position, npi })
    }
  }, [id, name, position, npi])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateDoctor(id, doctor)
      setEdit(false)
    } else {
      addDoctor(doctor)
      setAdd(false)
    }
    setDoctor({ name: '', position: '', npi: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            name='name'
            value={doctor.name}
            onChange={(e) => setDoctor({ ...doctor, name: e.target.value })}
            placeholder="name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Position</Form.Label>
          <Form.Control 
            name='position'
            value={doctor.position}
            onChange={(e) => setDoctor({ ...doctor, position: e.target.value })}
            as="textarea" 
            rows={3}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Doctor Image</Form.Label>
          <Form.Control 
            name='img'
            value={doctor.img}
            onChange={(e) => setDoctor({...doctor, img: e.target.value })}
            placeholder="image" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>NPI</Form.Label>
          <Form.Select
            name='npi'
            value={doctor.npi}
            onChange={(e) => setDoctor({ ...doctor, npi: e.target.value })}
            required
          >
            <option>Open this select menu</option>
            <option value="Cardiovascular">Cardiovascular</option>
            <option value="ENT">ENT</option>
            <option value="Neuralink">Neuralink</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default DoctorForm;