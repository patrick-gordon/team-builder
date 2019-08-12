import React from 'react'
import TeamMemberCard from './TeamMemberCard'

export default function TeamMember(props) {
    return (
        <div>
            {props.team.map(member => <TeamMemberCard member={member}  setUpdate={props.setUpdate} setIsUpdating={props.setIsUpdating}/>)}
        </div>
    )
}
