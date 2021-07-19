import React, { useState } from 'react';

interface Iprops {
    name:string
}

const Contact = ({name}:Iprops) => {

    const [contacts, setContact] = useState("");


    return (
        <div>
            <h1>Form</h1>
            <p>{name}</p>
            <h1>{contacts}</h1>
            <input onChange={(e) => setContact(e.target.value)} type="" name="name" placeholder="name" id="" />
            
        </div>
    );
};

export default Contact;