import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const UserForm = ({ addUser, setAdd, id, name, age, disease, updateUser, setEdit }) => {
  const [user, setUser] = useState({ name: '', age: '', disease: '' })
  
  useEffect( () => {
    if (id) {
      setUser({ name, age, disease })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateUser(id, user)
      setEdit(false)
    } else {
      addUser(user)
      setAdd(false)
    }
    setUser({ name: '', age: '', disease: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            name='name'
            value={user.name}
            onChange={(e) => setUser({...user, name: e.target.value })}
            placeholder="name" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>age</Form.Label>
          <Form.Control 
            name='age'
            value={user.age}
            onChange={(e) => setUser({...user, age: e.target.value })}
            placeholder="age" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Disease</Form.Label>
          <Form.Control 
            name='img'
            value={user.disease}
            onChange={(e) => setUser({...user, disease: e.target.value })}
            placeholder="disease" 
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default UserForm;