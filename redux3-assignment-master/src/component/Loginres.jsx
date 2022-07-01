import React from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
const Loginres = () => {
    const {login} = useSelector((store)=>store)
    const navigate = useNavigate()
  return (
    <>
    <h1>{login.username}</h1>
    <button onClick={()=>{
      navigate("../profile")
    }}>GO TO profile Page</button>
    </>
  )
}



export default Loginres