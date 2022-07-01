import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logins } from '../redux/action'
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
    const{login} = useSelector((store)=>store)
    const dispatch = useDispatch()
    const [username,setusername] = useState()
     const [password,setpassword] = useState()
     const [all,setall] = useState({})
     
useEffect(()=>{
    fetchs()
    
},[all])

const fetchs = () => {
    fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
      method: "POST",
      body:JSON.stringify(all)
      ,
      headers: {
        "content-Type": "application/json"
      }
        
    
    }).then((res)=> res.json()).then((res) => {
      console.log(res)
      dispatch(logins({
        token:res.token,
        username:username
      }))
     navigate("../loginres")
  
    }).catch((err)=>{
      console.log(err)
    })
}
console.log(all)
    //console.log(login)
  return (
   <div className='reg'>
    <h1>Login</h1>
   <input placeholder='Enter Username' type="text" name="" id="" value={username} onChange={(e)=>{
    setusername(e.target.value) 
   }} />
   <br />
    <input placeholder='Enter Password' type="text" name="" id="" value={password} onChange={(e)=>{
    setpassword(e.target.value)
   }} />
   <br />
   <button onClick={()=>{
    if(username==undefined || password == undefined)
    {
      alert("Please Fill required places")
      return
    }
    setall({
        username:username,
        password:password
    })
    console.log(all)
   }}>submit</button>
   </div>
  )
}

export default Login