import { useState, useEffect } from 'react'
import axios from "axios";

const Users = () => {
  
  const [users, setUsers] = useState([])

  useEffect( () => {
    axios.get("/api/users")
    .then( res => {
      setUsers(res.date)
    })
    .catch( err => console.log(err) )
  }, [])

  const addUser = (user) => {
      axios.post("/api/users", { user })
      .then( res => {
          setUsers([...users, res.data])
        })
      .catch( err => console.log(err) )
  }

  const updateUser = (id, user) => {
    axios.put(`/api/users/${id}`, { user })
    .then( res => {
      let newUpdatedUsers = users.map( u => {
        if (u.id === id) {
          return res.data
        }
        return u
      })
      setUsers(newUpdatedUsers)
    })
    .catch( err => console.log(err) )
  }

  const deleteUser = (id) => {
      axios.delete(`/api/users/${id}`)
      .then( res => {
        setUsers(users.filter( u => u.id !== id))
        })
      .catch( err => console.log(err) )
  }
}

export default Users;
