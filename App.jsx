import { useState } from 'react'
import './App.css'
import { validateForm } from './components/Validate'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const handleLogin = (e) => {
    e.preventDefault()

    const validationErrors = validateForm(email, password)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setErrors({})
      alert("Logged in successfully")
      console.log({ email, password })
    }
  }


  return (
    <>
      <h1>User LogIn</h1>
      <br />
      <br />

      <form onSubmit={handleLogin} className="form">
        
        <label className='mail'>Enter Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <br /><br />

        <label className='password'>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <br /><br />

        <button className='submit' type="submit">Submit</button>
      </form>
    </>
  )
}

export default App