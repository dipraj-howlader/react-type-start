import React from 'react';

interface IProps{
    name:string,
    email:string,

}

const contact = (props:IProps) => {
    return (
        <div className="card">
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