import React, { useState,useEffect } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { reg } from '../redux/action'
import Registerresponse from './Registerresponse'
import {useNavigate} from 'react-router-dom'
const Registercomp = () => {
  const [name,setname] = useState()
  const [email,setemail] = useState()
  const [password,setpassword] = useState()
  const [username,setusername]  = useState()
  const [mobile,setmob] = useState()
  const [des,setdes] = useState()
  const [all,stall] =useState({})
  console.log(all)
  const navigate = useNavigate()
  const {register} = useSelector((store)=>store)
  const dispatch = useDispatch()
useEffect(()=>{
    fetchs()
    
},[all])
const clla = () => {
  navigate("./regresponse")
}
const fetchs = () => {
    fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
      method: "POST",
      body:JSON.stringify(all)
      ,
      headers: {
        "content-Type": "application/json"
      }
        
    
    }).then((res)=> res.json()).then((res) => {
      console.log(res)
      dispatch(reg(res.message))
      
      clla()
    }).catch((err)=>{
      console.log(err)
    })
}
console.log(all)
  return (
    <div className='reg'>
      <h1>Registration</h1>
      <input type="text" placeholder='Enter Name' name="" id="" value={name} onChange={(e)=>{
        setname(e.target.value)
      }} />
      <br />
      <input type="text" placeholder='Enter Email' name="" id="" value={email} onChange={(e)=>{
        setemail(e.target.value)
      }} /> 
      <br />
       <input type="text" placeholder='Enter password' name="" id="" value={password} onChange={(e)=>{
        setpassword(e.target.value)
      }} />
      <br />
      <input type="text" placeholder='Enter username' name="" id="" value={username} onChange={(e)=>{
        setusername(e.target.value)
      }} />
      <br />
      <input type="text" placeholder='Enter Mobile No' name="" id="" value={mobile} onChange={(e)=>{
        setmob(e.target.value)
      }} />
      <br />
      <input type="text" placeholder='Enter Description' name="" id="" value={des} onChange={(e)=>{
        setdes(e.target.value)
      }} />
      <br />

      <button onClick={()=>{
        if(name==undefined || email==undefined || password==undefined || username==undefined || mobile==undefined || des==undefined){
            alert("Please Fill Required Places ")
            return
        }
        stall({
            name:name,
            email:email,
            password:password,
            username:username,
            mobile:mobile,
            description:des
        })
      }}>Register</button>
    
    </div>
  )
}

export default Registercomp