import { useState } from "react";
import "./navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link,useNavigate } from "react-router-dom";
import Login from "../Login/login";



const Navbar = ({setSideNavbarFunc,sideNavbar}) => {
const [userPic, setUserPic] = useState("data:image/png;base64,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"); // Placeholder for user profile picture
const [navbarModal, setNavbarModal] = useState(false);
const  [login,setLogin] = useState(false);
const navigate = useNavigate();

const handleprofile = ()=>{
  navigate("/user/7679");
  setNavbarModal(false)
}

const handleClickModal = () => {
    setNavbarModal(prev=> !prev);
}

const sideNavbarFunc=()=>{
setSideNavbarFunc(!sideNavbar)
}

const setLoginModal =()=>{
 setLogin(false);
}

const onclickofPopUpOption = (button)=>{
  setNavbarModal(false);
  
  if (button ==="login") {
    setLogin(true);
  }else{

  }
}


return (
      <div className="navbar">

               <div className="navbar-left">
                  <div className="navbarHamberger" onClick={sideNavbarFunc}>
                    <MenuIcon sx={{color:"white"}}/>
                  </div>
                     <Link to={'/'} className="navbarYTlogo">
                         <YouTubeIcon sx={{fontSize:"34px"}} className="navbar_yTImage"/>
                         <div className='navbar_ytTitle'>YouTube</div>
                     </Link>
                 </div>
              
              <div className="navbar-middle">
                <div className="navbar_searchBox">
                  <input type="text" placeholder="Search" className="navbar_searchInput"/>
                  <div className="navbar_SearchIconBox"><SearchIcon sx={{fontSize:"28px",color:"white" }} /></div>
                </div>
                <div className="navbar_mike"><KeyboardVoiceIcon sx={{color:"white"}}/>
                 </div>
              </div>

              <div className="navbar-right">
                <Link to={"/7345/upload"}><VideoCallIcon sx={{fontSize:"30px",cursor:"pointer",color:"white"}}/></Link>
                            
                 <NotificationsIcon sx={{fontSize:"30px", cursor:"pointer",color:"white"}}/>
                <img onClick={handleClickModal} src={userPic} className="navbar-right-logo" alt="Logo"/>
              
               { navbarModal && 
                <div className="navbar-modal"> 
                  <div className="navbar-modal-option" onClick={handleprofile}>Profile</div>
                   <div className="navbar-modal-option" onClick={()=>onclickofPopUpOption("logout")}>Logout</div>
                    <div className="navbar-modal-option" onClick={()=>onclickofPopUpOption("login")}>Login</div>
                </div>}

              </div>
        {
          login && <Login setLoginModal={setLoginModal}/>
        }
     
      </div> 
    )
}

export default Navbar