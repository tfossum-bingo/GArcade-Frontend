import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GameForm from "./GameForm"
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;



// onSubmit={handleSubmit}
const Profile = (props) => {
    console.log(props);
    // This will live within CabinetTop Component
    // will need to pass this const as a prop
    const userData = props.user ? 
    (<div>
        <h1 className="pixel-text">{props.user.name}'s Profile</h1><br />
        <div id="account-info">
            <h2 className="sub-title">Account Info</h2><br />
            <h5 className="sub-title">Username:</h5> 
            <p className="yellow-text">{props.user.name}</p> 
            <h5 className="sub-title">Email:</h5> 
            <p className="yellow-text">{props.user.email}</p> 
            <h5 className="sub-title">Favorites</h5> 
            <p className="yellow-text">favorites go here or link?</p> 
            <h5 className="sub-title">Uploaded Games</h5> 
            {/* <p className="yellow-text">uploaded games go here or link?</p>  */}
            <Link className="links" to="/addgame">Upload a Game </Link>
        </div>
      

    </div>) : <h4>Loading...</h4>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };

    return (
        <div>
            {/* THIS WILL LIVE IN CABINET TOP */}
            { props.user ? userData : errorDiv() }

        </div>
    );

}

export default Profile;
