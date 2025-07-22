import React,{useEffect,useState} from "react";
import "./homePage.css"; // Assuming you have a CSS file for styling
import {Link  } from "react-router-dom";
import axios from "axios"

const HomePage = ({sideNavbar}) => {

  const [ data ,setData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:4000/api/allVideo').then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err);
    })
  },[])




  const options = ["All","Gaming","Music", "Trending", "GTA 6", "Movies", "Latest Anime", "Your Videos", "CarryMinati", "NotYour Type" , "Comedy", "News", "Live", "Shorts", "Cricket", "Football", "Technology", "Education", "Science", "Health", "Travel"];

    return (
        <div className={sideNavbar?"homepage":"full_homepage"}>
            <div className="homepage_options">
                {
                   options.map((item, index) => 
                    {return(
                          <div key={index} className="homepage_option">
                            {item}
                           </div>
                       );
                    })  
                }
            </div> 
            
            <div className={sideNavbar?"home_mainpage":"home_mainPageWithoutLink"}>
                <Link to={'/watch/9897'} className="youtube_Video">

                    <div className="youtube_thumbnailbox">
                        <img src="https://i.ytimg.com/vi/a7T4pj1TLOA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDeXXv5i_2DxG-08zGn_me4uFe2_Q" alt="Thumbnail" className="youtube_thumbnailPic"/>
                        <div className="youtube_timingThumbnail">
                            28:05
                        </div>
                    </div>
                    
                    <div className="youtube_titleBox">
                      <div className="youtubeTitleBoxProfile">
                        <img src="data:image/jpeg;base64,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" alt="Carrys Live" className="youtube_thumbnail_Profile"/>
                      </div> 
                      <div className="youtubeTitleBox_Title">
                        <div className="youtube_videoTitle">Aaj Karenge World War</div>
                        <div className="youtube_ChannelName">CarrysLive</div>
                        <div className="youtube_video_views">1M Likes</div>
                      </div>
                    </div> 

                </Link>
                <Link to={'/watch/9897'} className="youtube_Video">

                    <div className="youtube_thumbnailbox">
                        <img src="https://i.ytimg.com/vi/25TtRuIvVbU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB4SgmArGbihAsXwQDvnetLVNKv8g" alt="Thumbnail" className="youtube_thumbnailPic"/>
                        <div className="youtube_timingThumbnail">
                            8:01
                        </div>
                    </div>
                    
                    <div className="youtube_titleBox">
                      <div className="youtubeTitleBoxProfile">
                        <img src="https://yt3.ggpht.com/va9GhssreFtZn5s33tlsO92cdkcGFelbrjdMSOEoYdiS4PqzC5GNJ9F-_QRLwnTYu5eRokRkiA=s176-c-k-c0x00ffffff-no-rj-mo" alt="NOT YOUR TYPE" className="youtube_thumbnail_Profile"/>
                      </div> 
                      <div className="youtubeTitleBox_Title">
                        <div className="youtube_videoTitle">Every Indian School Trip Ever</div>
                        <div className="youtube_ChannelName">NOT YOUR TYPE</div>
                        <div className="youtube_video_views">4M Likes</div>
                      </div>
                    </div> 

                </Link>
                <Link to={'/watch/9897'} className="youtube_Video">

                    <div className="youtube_thumbnailbox">
                        <img src="https://i.ytimg.com/vi/tVzUXW6siu0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCgs3kt08JL2BJuEcjc4IMPB9i9NA" alt="Thumbnail" className="youtube_thumbnailPic"/>
                        <div className="youtube_timingThumbnail">
                            45:55
                        </div>
                    </div>
                    
                    <div className="youtube_titleBox">
                      <div className="youtubeTitleBoxProfile">
                        <img src="https://yt3.googleusercontent.com/ytc/AIdro_kX3sdbuu3KFmRPsmlu0R5Rx_BhpxwupjtvJmkEdNfla7w=s120-c-k-c0x00ffffff-no-rj" alt="CodeWithHarry" className="youtube_thumbnail_Profile"/>
                      </div> 
                      <div className="youtubeTitleBox_Title">
                        <div className="youtube_videoTitle">Sigma Web Development Course Web Development Course</div>
                        <div className="youtube_ChannelName">CodeWithHarry</div>
                        <div className="youtube_video_views">2.5M Likes</div>
                      </div>
                    </div> 

                </Link>

                <Link to={'/watch/9897'} className="youtube_Video">

                    <div className="youtube_thumbnailbox">
                        <img src="https://i.ytimg.com/vi/EQvylQgnnig/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDxgq8NR-VsIqUJZAUWnIaZWfRGlA" alt="Thumbnail" className="youtube_thumbnailPic"/>
                        <div className="youtube_timingThumbnail">
                           04:05
                        </div>
                    </div>
                    
                    <div className="youtube_titleBox">
                      <div className="youtubeTitleBoxProfile">
                        <img src="https://yt3.googleusercontent.com/VunTf0NzCeboiPjbesBdnQuxaF3Lja7UGRbBGQAWRJgMSTj9TTLO3pS1X9qPOJGCNnmPrXeY=s120-c-k-c0x00ffffff-no-rj" alt="TSeries" className="youtube_thumbnail_Profile"/>
                      </div> 
                      <div className="youtubeTitleBox_Title">
                        <div className="youtube_videoTitle">Atif_Aslam_Best MashupSong</div>
                        <div className="youtube_ChannelName">T-Series</div>
                        <div className="youtube_video_views">5M Likes</div>
                      </div>
                    </div> 

                </Link>
                <Link to={'/watch/9897'} className="youtube_Video">

                    <div className="youtube_thumbnailbox">
                        <img src="https://i.ytimg.com/vi/GK351yoTViQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAJ7ZwIQ7LPbhIC9hyqv52BxkxpRw" alt="Thumbnail" className="youtube_thumbnailPic"/>
                        <div className="youtube_timingThumbnail">
                           30:16
                        </div>
                    </div>
                    
                    <div className="youtube_titleBox">
                      <div className="youtubeTitleBoxProfile">
                        <img src="https://yt3.googleusercontent.com/f72L2jnDHzjAVQ1O2PsoJzpSkktlrocRccO5n5ztpY44Jt5538MmpdwWPRXSLzIvfLvd_FmN=s120-c-k-c0x00ffffff-no-rj" alt="4KHDR" className="youtube_thumbnail_Profile"/>
                      </div> 
                      <div className="youtubeTitleBox_Title">
                        <div className="youtube_videoTitle">BEST OF Dolby Atmos - Incredible 4K 60FPS Video HDR - Dolby Vision</div>
                        <div className="youtube_ChannelName">4K HDR</div>
                        <div className="youtube_video_views">338 Likes</div>
                      </div>
                    </div> 

                </Link>
                <Link to={'/watch/9897'} className="youtube_Video">

                    <div className="youtube_thumbnailbox">
                        <img src="https://i.ytimg.com/vi/gE1FgPhwAUs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBQ9VEjeNKY3rzqdUKE5xIlsJs_MQ" alt="Thumbnail" className="youtube_thumbnailPic"/>
                        <div className="youtube_timingThumbnail">
                           7:40
                        </div>
                    </div>
                    
                    <div className="youtube_titleBox">
                      <div className="youtubeTitleBoxProfile">
                        <img src="//yt3.googleusercontent.com/ytc/AIdro_m1WLxquYeEO9VgyA7-cYFrn_hd2dSaNtmL8-NIHMCQIuPQ=s176-c-k-c0x00ffffff-no-rj-mo" alt="AAJ Tak" className="youtube_thumbnail_Profile"/>
                      </div> 
                      <div className="youtubeTitleBox_Title">
                        <div className="youtube_videoTitle">Superfast News: Israel Iran War | Donald Trump | PM Modi | Ahmedabad Plane Crash | Hindi News</div>
                        <div className="youtube_ChannelName">Aaj Tak</div>
                        <div className="youtube_video_views">11M Likes</div>
                      </div>
                    </div> 

                </Link>
            </div>

        </div>
    );
}
export default HomePage;