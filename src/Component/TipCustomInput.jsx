import React from 'react'
import '../ComponentStyles/tipSelector.css'

const TipCustomInput = (props) => {
    return (
        <input type="number" className="custom-input" placeholder="Custom" {...props}/>
    )
}

export default TipCustomInput
