import React, { useState } from 'react'

export default Selection = (props) =>{
    const [mystyle,setStyle] = useState({background:''});
    const { applyColor } = props;
    return(
        <div className="fix-box" style={mystyle} onClick={() => applyColor(setStyle)}>
              <h2 className="subheading">Selection</h2>
        </div>
    )
}
