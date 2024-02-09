import { Route, Routes } from 'react-router-dom';
import './App.css';

import MainPage from './pages/mainpage/main';
import Myorder from './pages/myorder/myorder';
import Signin from './pages/register pages/signin/signin';
import Forgetpassword from './pages/register pages/forgetpassword/forgetpassword';
import Signup from './pages/register pages/signup/signup';



function App() {
  return (
    <div className="App m-0  ">
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/:id' element={<Myorder/>} > </Route>
        <Route path='/signin' element={<Signin/>} ></Route>
        <Route path='/forgerpassword' element={<Forgetpassword/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
    
      </Routes>
    </div>
  );
}

export default App;
