import logo from './logo.svg';
import './App.css';
import { store } from './redux/state';
import {useSelector , useDispatch} from 'react-redux'
import { logins, profile, reg } from './redux/action';
import { useState } from 'react';
import Registercomp from './component/registercomp';
import Login from './component/Login';
import Profile from './component/profile';
import {Route,Routes} from 'react-router-dom'
import Navbar from './component/Navbar';
import Registerresponse from './component/Registerresponse';
import Loginres from './component/Loginres';
function App() {
  const {register,profiles} = useSelector((store)=>store)
  const dispatch = useDispatch()
  const [a,seta] = useState(true)
 
  if(a)
  {
    dispatch(profile("wefouhowerh"))
    dispatch(reg("dwlfheou y7w"))
    dispatch(logins("efoaufy9ny9 eq"))
    
    seta(false)
  }
 // console.log(register)
  return (
    <div className="App">
      <Navbar></Navbar>
  <Routes>
    
    <Route path="/" element={<Registercomp></Registercomp>}/>
    <Route path="/Login" element={<Login></Login>}/>
    <Route path='/profile' element={<Profile></Profile>}/>
    <Route path="/regresponse" element={<Registerresponse></Registerresponse>}/>
    <Route path='/loginres' element={<Loginres></Loginres>}/>
  </Routes>
    </div>
  );
}

export default App;
