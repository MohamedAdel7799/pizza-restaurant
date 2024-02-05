import { Route, Routes } from 'react-router-dom';
import './App.css';

import MainPage from './pages/mainpage/main';
import Myorder from './pages/myorder/myorder';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/:id' element={<Myorder/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
