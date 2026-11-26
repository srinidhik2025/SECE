import { useEffect, useState } from "react"
import axios from "axios"
import Students from "./components/Students"
import Count from "./hooks/Count"
import { Button } from "@/components/UI/button"
import Register from "./hooks/Register"

const Users = () => {
    const [users,setUsers]=useState([])
    const getUsers = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      )
      setUsers(response.data)
    }

    const addUser=async()=>{
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/users',
        {
          name:'Test',
          email:"test@gmail.com"
        }
      )
      console.log(response.data);
      
    }
    const deleteUser=async()=>{
      const response = await axios.delete(
        'https://jsonplaceholder.typicode.com/users/11'
      )
      console.log("user deleted");
      
    }
    
    useEffect(()=>{ 
        addUser()
        getUsers()
        deleteUser()
    },[])
  return (
    <div>
      <h1>User Names</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <ul>
          {users.map((user)=>{
            return (
              <li>
                Name-{user.name} <br />
                Email-{user.email} <hr />
              </li>
            ) 
          })}
        </ul> */}
    </div>
  )
}

const App = () => {
  const name = "Srinidhi"

  return (
    <>
      <div className="text-center text-cyan-300 bg-blue-700">App</div>
      <div>App</div>
      <button variant="destructive">Delete</button>
      <button variant="outline">Outline</button>
      <button variant="secondary">Secondary</button>
      <button variant="ghost">Ghost</button>
      <Button>Click me</Button>
      <div>App</div>
      <h1>Welcome {name}!</h1>
      <Students name="user" age={20} />
      <Register />
      <Count />
      <Users />
    </>
  )
}

export default App