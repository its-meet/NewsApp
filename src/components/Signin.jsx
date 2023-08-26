import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const res= await axios.post('/api/auth/signin',{email, password})
      res.data && window.location.replace('/general')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center ">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 fw-bold text-center">Please sign in</h1>
    
        <div className="form-floating mt-3">
          <input type="email" className="form-control rounded-pill"
          onChange={(e)=>setEmail(e.target.value)}
           placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mt-2">
          <input type="password" className="form-control rounded-pill" id="floatingPassword"
           onChange={(e)=>setPassword(e.target.value)}
           placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary mt-2 rounded-pill" type="submit">Sign in</button>
        <p className='mt-2 text-center'> Don't have an account ? <Link to = '/'>Sign Up </Link> </p>
      </form>
    </div>
    
  )
}

export default Signin
