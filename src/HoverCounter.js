import React from 'react'

export const HoverCounter = (props) => {
    debugger;
    const {handleCounter,count,name} = props;
    return (
        <div onMouseOver={handleCounter}>  { name } Hovered { count } times</div>
    )
}
