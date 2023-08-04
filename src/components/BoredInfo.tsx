import React from 'react';
import {BoredInterface} from "../interfaces/bored.interface";


export const BoredInfo = ({ bored }: { bored: BoredInterface | null }) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>

            {
                bored ?
                    (<div className="grid"><h1>What about {bored.activity}</h1></div>):
                    (<img  src="https://media.tenor.com/Wyjcf1uN1AoAAAAd/cat-zoning-out-cat-stare.gif" width="40%" />)
            }
        </div>
    )
}
