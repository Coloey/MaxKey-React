import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./routes/Login"
import Home from "./routes/Home"
import User from "./routes/User"
import AppList from './routes/AppList';
import "antd/dist/antd.min.css"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}></Route>
    <Route path="/passport/login" element={<Login/>}></Route>
    <Route path="/dashboard/" element={<Home/>}>
      <Route path="home" element={<AppList/>}></Route>
      <Route path="user" element={<User/>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
