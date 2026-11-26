import { useState } from 'react'
import { Input } from "@/components/UI/input"
import { Button } from "@/components/UI/button"   
import { z } from 'zod'

const registerSchema = z.object({
    name:z.string().min(3,"Name must have minimum of 3 letters"),
    email:z.string().email("Enter a valid email"),
    password:z.string().min(8,"Password must have minimum of 8 characters")
})

const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((currentData) => ({
      ...currentData,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    const result=registerSchema.safeParse(formData)

    if (result.success) {
      console.log("Validation successful");
      console.log(formData)
      alert("Registration Successful!")
      return
    }

    console.log(result.error)
  }

  return (
    <div>
      <h1>Register Form</h1>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <label htmlFor="name">Name:</label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        {/* Email */}
        <label htmlFor="email">Email:</label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        {/* Password */}
        <label htmlFor="password">Password:</label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <br /><br />

        {/* Submit Button */}
        <Button type="submit">
          Submit
        </Button>

      </form>
    </div>
  )
}

export default Register