import React from 'react'

export const ClickCounter = (props) => {
    debugger;
    const {handleCounter,count} = props;
    return (
        <div onClick={handleCounter}> clicked { count } times</div>
    )
}
