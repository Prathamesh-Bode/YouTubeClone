import React ,{useState} from "react";
import "../../Component/Login/login.css"
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";

const Login = ({setLoginModal}) => {
    const [loginField,setLoginField] = useState({"userName":"","password":""});
    // console.log(loginField);
   
 const handleOnChangeInput =(event,name)=>{
    setLoginField({
        ...loginField,[name]:event.target.value
    })
 }
    
    return (
        <div className="login">
            <div className="login_card">
                <div className="titleCard_login">
                    <YouTubeIcon sx={{ fontSize: "54px" }} className="login_youtubeImage" />
                    Login
                </div>
                <div className="loginCredentials">

                    <div className="userNameLogin">
                        <input className="userNameLoginUserName" value={loginField.userName} onChange={(e)=>handleOnChangeInput(e,"userName")} placeholder="UserName" type="text" />
                    </div>

                    <div className="userNameLogin">
                        <input className="userNameLoginUserName" value={loginField.password} onChange={(e)=>handleOnChangeInput(e,"password")} placeholder="Password" type="password" />
                    </div>

                </div>

                <div className="login_buttons">
                    <div className="login-btn">Login</div>
                    <Link to={'/signUp'} onClick={()=>setLoginModal()} className="login-btn" >SignUp</Link>
                    <div className="login-btn" onClick={()=>setLoginModal()}>Cancel</div>
                </div>

            </div>
        </div>
    )
}

export default Login