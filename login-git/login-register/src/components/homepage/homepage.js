import React from "react"
import { Link } from "react-router-dom";
import "./homepage.css"

const Homepage =() =>
{
    return (
        <div className="homepage"> 
           <h1> hello Homepage </h1>
        <div className="button" > < Link to='login' >Logout</Link></div>
        </div>
    )
}

export default Homepage;