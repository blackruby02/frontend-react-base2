import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div style={{textAlign:'center'}}>
        <h1>Main</h1>
        <div>아래를 누르세요!</div>
        <Link to='/todos'>Go todos!</Link>
    </div>
  )
}


export default Main