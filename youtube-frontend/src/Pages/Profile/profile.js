import React from "react";
import "./profile.css";
import SideNavbar from "../../Component/SideNavbar/sideNavbar";
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import { Link } from "react-router-dom";


const Profile = ({ sideNavbar }) => {
    return (
        <div className="profile">
            <SideNavbar sideNavbar={sideNavbar} />
            <div className={sideNavbar?"profile_page":"profile_page_inactive"}>
                <div className="profile_top_section">
                    <div className="profile_top_section_profile">
                        <img className="profile_top_section_img" src="data:image/jpeg;base64,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" />
                    </div>
                    <div className="profile_top_section_About">
                        <div className="profile_top_section_About_Name">Code With Harry</div>
                        <div className="profile_top_section_info">
                            @User . 4 videos
                        </div>
                        <div className="profile_top_section_info">
                            About Section of channel
                        </div>
                    </div>
                </div>
                <div className="profile_videos">
                    <div className="profile_videos_title">videos &nbsp;<PlayArrowSharpIcon />
                    </div>

                    <div className="profileVideos">
                        {/*-------------div for a video ----------------*/}

                        <Link to={"/watch/8998"} className="profileVideo_block">
                            <div className="profileVideo_block_thumbnail">
                                <img className="profileVideo_block_thumbnail_img" src="https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBN31a8sOnPAnEuvlpME-PMXo_01w" alt="Web Developmen Express" />
                            </div>
                            <div className="profileVideo_block_detail">
                                <div className="profileVideo_block_detail_name"> Your First HTML Website Sigma Web Development Course-Tutorial #2</div>
                                <div className="profileVideo_block_detail_about"> Create at 2025-03-12</div>
                            </div>

                        </Link>


                         {/*-------------div for a video ----------------*/}

                        <Link className="profileVideo_block">
                            <div className="profileVideo_block_thumbnail">
                                <img className="profileVideo_block_thumbnail_img" src="https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDpdOoVMCl1Z3qDixA988oU8Cot0w" alt="Web Developmen Express" />
                            </div>
                            <div className="profileVideo_block_detail">
                                <div className="profileVideo_block_detail_name"> Your First HTML Website Sigma Web Development Course-Tutorial #3</div>
                                <div className="profileVideo_block_detail_about"> Create at 2025-03-13</div>
                            </div>

                        </Link>


 {/*-------------div for a video ----------------*/}

                        <Link className="profileVideo_block">
                            <div className="profileVideo_block_thumbnail">
                                <img className="profileVideo_block_thumbnail_img" src="https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAPrVzyLHFYcUIk5bv_LXaJrgOztA" alt="Web Developmen Express" />
                            </div>
                            <div className="profileVideo_block_detail">
                                <div className="profileVideo_block_detail_name"> Your First HTML Website Sigma Web Development Course-Tutorial #4</div>
                                <div className="profileVideo_block_detail_about"> Create at 2025-03-14</div>
                            </div>

                        </Link>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile