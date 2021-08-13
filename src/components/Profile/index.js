import React from 'react';
import './index.css';
import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
    const { user } = useAuth0(); 

    return (
        <div className="profile page">
            <img src={user.picture} />
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Email verified: {user.email_verified ? 'yes' : 'no'}</p>
        </div>
    )
}

export default Profile;