import React from 'react'
import '../App.css';
import Todo from '../component/Todo';
import { Link } from 'react-router-dom';

const Todos = () => {
  return (
    <div className="App">
    <h1>My Todo List</h1>
    <Link to='/'>Main으로 되돌아가기</Link>
    <div className='input-area'>
      <input className="input-box" type="text" placeholder='오늘의 할일을 적어보세요'/>
      <button className='button'>확인</button>
    </div>
    <Todo name='빨래하기'/>
    <Todo name='과제하기'/>
    <Todo name='숙제하기'/>
  </div>
  )
}

export default Todos