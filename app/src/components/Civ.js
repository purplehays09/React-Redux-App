import React from 'react'

export default function Civ(props){

    return(
        <div>
            <h3>{props.name}</h3>
            <p>{props.army_type}</p>
            <p>{props.team_bonus}</p>
        </div>
    )
}