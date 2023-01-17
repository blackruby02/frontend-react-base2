import React, { useState } from 'react'
import './../App.css'

const Todo = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div className='todo'>할일 : {props.name} 중요도 : {counter}</div>
      <button style={{margin: '10px'}} onClick={() => setCounter(counter+1)}>중요도 + 1</button>
    </div>
  )
}

export default Todo