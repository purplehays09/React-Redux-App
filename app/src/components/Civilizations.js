import React from 'react'
import Civ from './Civ'

export default function Civilizations(props){

    return(
        <div>
            <h2>Age Of Empires II </h2>
            <h4>Civilizations</h4>
            {
                props.civsArray.map(civ => {
                    return(
                        <Civ
                            key={civ.key}
                            name={civ.name}
                            army_type={civ.army_type}
                            team_bonus={civ.team_bonus}
                        />
                    )
                })
            }
        </div>
    )
}