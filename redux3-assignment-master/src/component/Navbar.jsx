import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Login from './Login'
const Navbar = () => {
    const {login} = useSelector((store)=>store)
    const navigate = useNavigate()
    const [sat,setsat] = useState("Login")
  
  return (
   <div className="navbar">
     <Link to="/" >Registration</Link>
     <Link to="/Login">{sat}</Link>
     <Link to="/profile"> Profile</Link>
   
     
   </div> 
  )
}

export default Navbar