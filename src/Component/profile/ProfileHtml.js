import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function ProfileHtml() {
    const location = useLocation();
    const id = location.state.res;
    const [profile, setProfile] = useState(id);
    console.log(profile);
    return (
      <>
        <h1>Name:{id.name}</h1>
        <h1>Gender:{profile.gender}</h1>
        <h1>Company:{profile.company}</h1>
        <h1>Email:{profile.email}</h1>
        <h1>Contact Info:{profile.phone}</h1>
        <h1>Address:{profile.address}</h1>
       </>
    );
}
