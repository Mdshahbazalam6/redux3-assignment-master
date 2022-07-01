import { useSelector,useDispatch } from 'react-redux'


import { useEffect } from 'react' 
import { profile } from '../redux/action'

const Profile = () => {
    const {profiles} = useSelector((store)=>store)
    const {login} = useSelector((store)=>store)
   // console.log(profiles)
    const dispatch = useDispatch()
    useEffect(()=>{
        fetchs()
        
    },[login.token])
    
    const fetchs = () => {
        fetch(`https://masai-api-mocker.herokuapp.com/user/${login.username}`,{
         
          headers: {
            "Authorization": `Bearer ${login.token}`
          }
            
        
        }).then((res)=> res.json()).then((res) => {
          console.log(res)
        dispatch(profile(res))
         
        }).catch((err)=>{
          console.log(err)
        })
    }


  return (
   <div className='prof'>
   <div className="div">
   <p >Name : {profiles.name}</p></div>
   <p>Email : {profiles.email}</p>
   <p>Mobile : {profiles.mobile}</p>
   <p>User Token : {profiles.token}</p>
   <p>Description  : {profiles.description}</p>
   </div>
   
  )
}

export default Profile