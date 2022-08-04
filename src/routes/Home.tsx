import React from "react"
import "../assets/less/home.css"
import {Link} from "react-router-dom"
import Footer from "../components/Footer"
import logo from "../assets/logo.jpg"
import {Outlet} from "react-router-dom"
export default function Home() {   
    // const [current,setCurrent] = useState<Number>(1)
    // const handleTab=(index:number):void=>{
    //     setCurrent(index)
    // }
    return (
        <div className="body">
            <header>
                <div className= 'title'>
                    <img src={logo} alt="" />
                    Max
                    <span>Key</span>
                    单点登录认证系统
                </div>
            </header>
            <div className="nav">    
                <ul>
                    <li>
                        <Link to="/dashboard/home">应用</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/user">个人</Link>
                    </li>
                </ul>
            </div>
            <div className="container">
               <Outlet/>
            </div>
            <Footer/>

        </div>
    )
}