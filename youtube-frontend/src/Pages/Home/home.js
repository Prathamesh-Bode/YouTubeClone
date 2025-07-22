import React from "react";
import "../Home/Home.css"; // Assuming you have a CSS file for styling"; 
import SideNavbar from "../../Component/SideNavbar/sideNavbar";
import HomePage from "../../Component/HomePage/homePage";



const Home = ({sideNavbar}) => {
    return (
        <div className="home">
           <SideNavbar sideNavbar={sideNavbar}/> 
              <HomePage sideNavbar={sideNavbar} />
        </div>
    );
}

export default Home;