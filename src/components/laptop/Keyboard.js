import React from 'react'
import Button from './Button'

const Keyboard = (props) => {
    return (
        <div className="keyboard">

        <div className="button" >
            <Button bgColor={props.buttonColor}/>
        </div>

            <div>
            {props.name} Keyboard
            Made In
            </div>
           <div style={{
               color: "Gold", textAlign: "center", fontWeight: "bold"
           }}>
               {props.madeIn}
           </div>
        </div>
    )
}

export default Keyboard