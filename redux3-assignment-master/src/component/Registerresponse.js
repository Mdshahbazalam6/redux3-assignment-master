import React from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
const Registerresponse = () => {
    const {register} = useSelector((store)=>store)
    const navigate = useNavigate()
  return (
    <>
    <h1>{register}</h1>
    <button onClick={()=>{
      navigate("../Login")
    }}>GO TO LOgin Page</button>
    </>
  )
}

export default Registerresponse