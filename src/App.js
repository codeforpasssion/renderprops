import React from 'react';
import './App.css';
import {ClickCounter} from './ClickCounter';
import {HoverCounter} from './HoverCounter';
import {Counter} from './Counter';

function App() {
  return (
    <div className="App">
     <Counter>
       {
         (
           (props)=>{
        return <ClickCounter {...props}/>
        }
         )
       }
     </Counter>
      <Counter>
        {((props)=>{
        return <HoverCounter {...props} name={"mohan"}/>
     })}
      </Counter>
    </div>
  );
}

export default App;
