/* eslint-disable jsx-a11y/anchor-has-content */
import React,{useState,useRef} from "react"
import {api} from "../utils/api"
import "../assets/less/login.css"
import axios,{ AxiosError, AxiosResponse } from 'axios'
import {ReactComponent as User} from "../assets/svg/user.svg"
import {ReactComponent as Key} from "../assets/svg/key.svg"
import {ReactComponent as EyesOpen} from "../assets/svg/eyes-open.svg"
import {ReactComponent as EyesClose} from "../assets/svg/eyes-close.svg"
import { ReactComponent as Eweima } from "../assets/svg/erweima.svg"
import {ReactComponent as Lock} from "../assets/svg/lock.svg"
import logo from "../assets/logo.jpg"
import wechat from "../assets/social/wechat.png"
import dingtalk from "../assets/social/dingtalk.png"
import google from "../assets/social/google.png"
import microsoft from "../assets/social/microsoft.png"
import feishu from "../assets/social/feishu.png"
import Code from "../components/Code"
import Footer from "../components/Footer"
import {Link,useNavigate} from "react-router-dom"
export default function Login(){
    const [username,setUsername]=useState<string>()
    const [password,setPassword]=useState<string|number>()
    const [isVisible,setVisible]=useState<boolean>(false)
    const [rememberMe,setRemember]=useState<boolean>(false)
    const [captcha,setCode] = useState<string>('')
    const child=useRef(null)
    const navigate = useNavigate()

    const onUserNameChange=(e:React.FormEvent<HTMLInputElement>)=>setUsername(((e.target) as HTMLInputElement).value)
    const onPasswordChange=(e:React.FormEvent<HTMLInputElement>)=>setPassword(((e.target) as HTMLInputElement).value)
    const onRememberChange=(e:React.FormEvent<HTMLInputElement>)=>setRemember(((e.target) as HTMLInputElement).checked)
    const onCodeChange = (e:React.FormEvent<HTMLInputElement>)=>setCode(((e.target) as HTMLInputElement).value)
   
    //点击show后切换visible
    const show=()=>{
      setVisible(!isVisible)
    }

    
   
   const login=()=>{
    if(child.current){
      console.log(child.current)
     // let code=child.current.state.code
     // if(captcha !== ''&& captcha.toLowerCase() !== code.toLowerCase())alert("验证码错误")
    }
        api.login({authType:'normal',captcha,mobile:null,otpCaptcha:null,username,password,remeberMe:rememberMe,
        state:"eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NTk1MjkwMjQsImp0aSI6Ijc1MjI5ODU4MTIyNTg5Nzk4NCJ9.zgZb5AHJyRTYKu9-0G7USektVQHnAXg6Ye0rsyK1F1c"})
        .then((res:AxiosResponse)=>{
          console.log(res.data)
          res.data.cookie&&localStorage.setItem('cookie',res.data.cookie)
          //登录成功跳转首页
          navigate("/dashboard/home")

        })
        .catch((err:Error|AxiosError)=>{
          if(axios.isAxiosError(err)){
              
          }else {
            
          }
          Promise.reject(err)
          
        })

    }
    return(
      <div>
        <header>
          <div className= 'title'>
            <img src={logo} alt="" />
              Max
              <span>Key</span>
              单点登录认证系统
          </div>
        </header>
        <form className="form-signin" method="post">
          <h3>业界领先的IAM身份管理和认证产品</h3>
          <div className="login-type">
            <span>
              <i><User/></i>
              账号登录
            </span>
            <span>
              <i><Eweima/></i>
              扫码登录
            </span>
          </div>
          <div className="username">
            <label htmlFor="username" className="label">
               <User/>
            </label>
            <input 
            value={username} 
            onChange={onUserNameChange}
            type="text" 
            name="username" 
            id="username" 
            className="form-control" 
            placeholder="用户名"
            />
          </div>
          <div className="password">
             <label htmlFor="inputPassword" className="label">
                <Key/>
             </label>
            <input 
            value={password}
            onChange={onPasswordChange}
            type={isVisible?'text':'password'} 
            name="password" 
            id="inputPassword" 
            className="form-control" 
            placeholder="密码" required/>
            <EyesOpen
               style={{
                display:isVisible?'block':'none'
              }}
              className="eyes-img"
              onClick={show}
              />
            <EyesClose
            style={{
              display:isVisible?'none':'block'
              }}           
            className="eyes-img"
            onClick={show}/>
          </div>
          <div className="check">
            <label htmlFor="check" className="label">
              <Lock />
            </label>
            <input
            type="text"
            id="check"
            placeholder="验证码"
            className="form-control" 
            value={captcha}   
            onChange={onCodeChange}        
            />
            <div className="code">
              <Code ref={child}/>
            </div>
          </div>          
          <div className="remember">
            <input type="checkbox" id="remember" checked={rememberMe} onChange={onRememberChange}/>
            <label htmlFor="remember">记住登录</label>
            <Link to="" style={{ textDecoration: 'none',color: "#1890FF"}}>忘记密码</Link>
          </div>        
          <button className="btn" type="submit" onClick={login} >登录</button>
          <div className="otherLogin">
            <span>其他登录方式</span>
            <img src={wechat} alt="" />
            <img src={dingtalk} alt="" />
            <img src={google} alt="" />
            <img src={microsoft} alt="" />
            <img src={feishu} alt="" />
          </div>
      </form>
        <Footer/>
      </div>
        
    
    )
}
