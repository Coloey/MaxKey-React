import React from 'react';
import './App.css';
//import Login from "./routes/Login"
import {useNavigate} from "react-router-dom"
function App() {
  let navigate = useNavigate()
  setTimeout(()=>{
    navigate("passport/login",{replace:true})
  },3000)
  return (
     <>
     </>
  )
}
export default App;