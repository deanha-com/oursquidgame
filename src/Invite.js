import React from 'react'
export default function Invite(props) {
    return (
        <div className="wow animate__animated animate__fadeIn invites-component">
            <h1>{props.title}</h1>
            <input type="text" placeholder="Enter your name to begin"/>
            <br/>
        </div>
    )
}
