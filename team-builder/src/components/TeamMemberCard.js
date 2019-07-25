import React from 'react'

export default function TeamMemberCard(props) {

    const clicker = () => {
        props.setUpdate(props.member)
        props.setIsUpdating(true)
    }

    return (
        <div>
            <p>Name:{props.member.name}</p>
            <p>Email:{props.member.email}</p>
            <p>Role:{props.member.role}</p>
            <button onClick={clicker}>Update</button>
        </div>
    )
}
