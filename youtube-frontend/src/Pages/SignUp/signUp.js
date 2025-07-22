import React,{useState} from "react";
import "./signUp.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";
import axios from "axios";


const SignUp = () => {
  const [uploadedImageUrl,setUploadImageUrl]= useState("data:image/png;base64,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");
  const [singUpField,setSignUpField]= useState({"channelName":"","userName":"","password":"","about":"","profilePic":uploadedImageUrl})


   const handleInputFiled = (event,name)=>{
    setSignUpField({
      ...singUpField,[name]:event.target.value
    })
   }

   const uploadImage = async (e)=>{
      console.log("Uploading");
      
      const files = e.target.files;
      const data = new FormData();
      data.append("file",files[0]);
      
      data.append('upload_preset','youtube-clone');
      try {
        // cloudName="dou8bllkg"
        const response= await axios.post("https://api.cloudinary.com/v1_1/dou8bllkg/image/upload",data)
        const imageUrl = response.data.url;
        setUploadImageUrl(imageUrl);
         setSignUpField({
      ...singUpField,"profilePic":imageUrl
    })
        
      } catch (err) {
        console.log(err);
        
      }
   }
  //  console.log(singUpField);
   
  return (
    <div className="signUp">
      <div className="signup_card">
        <div className="signUp_title">
          <YouTubeIcon sx={{ fontSize: "54px" }} className="login_youtubeImage" />
          SignUp
        </div>

        <div className="signUp_Inputs">
          <input type="text" className="signUp_Inputs_inp" value={singUpField.channelName} onChange={(e)=>{handleInputFiled(e,"channelName")}} placeholder="Channel Name" />
          <input type="text" className="signUp_Inputs_inp" value={singUpField.userName} onChange={(e)=>{handleInputFiled(e,"userName")}} placeholder="User Name" />
          <input type="password" className="signUp_Inputs_inp" value={singUpField.password} onChange={(e)=>{handleInputFiled(e,"password")}}  placeholder="Password" />
          <input type="text" className="signUp_Inputs_inp" value={singUpField.about} onChange={(e)=>{handleInputFiled(e,"about")}} placeholder="About Your Channel" />

          <div className="image_upload_signup">
            <input type="file" onChange={(e)=>uploadImage(e)} />
            <div className="image_upload_signUp_div">
              <img className="image_default_signUp" src={uploadedImageUrl} />
            </div>
          </div>
           
           <div className="signUpBtns">
            <div className="signUpBtn"> SignUp</div>
            <Link to={"/"} className="signUpBtn">Home Page</Link>
           </div>

        </div>
      </div>
    </div>
  )
}
export default SignUp