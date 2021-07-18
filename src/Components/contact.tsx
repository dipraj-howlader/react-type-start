import React, { useState } from 'react';

interface IProps{
    name:string,
    email:string,

}

const contact = (props:IProps) => {
    const [ contacts, setContacts] = useState("");



    return (
        <div className="card">
            <div className="form"> 
            <input
            onChange={(e) => setContacts(e.target.value) }
            type="text" name="name" placeholder="name" id="" />
            </div>
            <p>
                the name is: {contacts}
            </p>
            <p>
                <strong>Name: {props.name}</strong>
            </p>
            <p>
                <strong>
                    Email: {props.email}
                </strong>
            </p>
        </div>
    );
};

export default contact;