import React, { useState } from "react";
import "./videoUpload.css"
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const VideoUpload = () => {
    const [inputField, setInputField] = useState({ "title": "", "description": "", "videoLink": "", "thumbnail": "", "videoType": "" })
    const [loader, setLoader] = useState(false)
    const handleOnChangeInput = (event, name) => {
        setInputField({
            ...inputField, [name]: event.target.value
        })
    }

    const uploadImage = async (e, type) => {
        setLoader(true)
        console.log("Uploading");

        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);

        data.append('upload_preset', 'youtube-clone');
        try {
           
            const response = await axios.post(`https://api.cloudinary.com/v1_1/dou8bllkg/${type}/upload`, data)
            const url = response.data.url;
             setLoader(false)
            let val = type === "image" ? "thumbnail" : "videoLink";
            setInputField({
                ...inputField, val: url
            })

        } catch (err) {
            setLoader(false)
            console.log(err);

        }
    }

    return (
        <div className="videoUpload">
            <div className="uploadBox">
                <div className="uploadVideoTitle">
                    <YouTubeIcon sx={{ fontSize: "54px", color: "red" }} />
                    UploadVideo
                </div>
                <div className="uploadForm">
                    <input type="text" value={inputField.title} onChange={(e) => { handleOnChangeInput(e, "title") }} placeholder="Title of Video" className="uploadFormInputs" />
                    <input type="text" value={inputField.description} onChange={(e) => { handleOnChangeInput(e, "description") }} placeholder="Description" className="uploadFormInputs" />
                    <input type="text" value={inputField.videoType} onChange={(e) => { handleOnChangeInput(e, "videoType") }} placeholder="Category" className="uploadFormInputs" />
                    <div>Thumbnail <input type="file" accept="image/*" onChange={(e) => uploadImage(e, "image")} /></div>
                    <div>Video <input type="file" accept=" video/mp4,video/webm,video/*" onChange={(e) => uploadImage(e, "video")} /></div>

                </div>

                {loader && <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
                }

                <div className="uploadBtn">
                    <div className="uploadBtn-form">Uploads</div>
                    <Link to={"/"} className="HomeBtn-form">Home</Link>
                </div>
            </div>
        </div>
    )
}
export default VideoUpload