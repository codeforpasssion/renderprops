import React ,{useState} from 'react'

export const Counter = (props) => {
    const [count, setCount] = useState(0);
    const handleCounter = ()=>{
        setCount(count+1);
    }
    debugger;
    return (
        <div>
            {props.children({handleCounter,count})}
        </div>
    )
}
