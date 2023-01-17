import Todos from './pages/Todos';
import Main from './pages/Main';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/todos' element={<Todos/>}/>
    </Routes>
    </>
  );
}

export default App;