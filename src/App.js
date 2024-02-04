import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Aboutus from './pages/about us/aboutus';
import Home from './pages/home/home';
import Menu from './pages/menu/menu';
import Ourchefs from './pages/our chef/ourchefs';

function App() {
  return (
    <div className="App p-0  m-0  bg-light ">
      <Navbar/>
      <Home/>
      <Ourchefs/>
      <Menu/>
      <Aboutus/>   
      <Footer/>
    </div>
  );
}

export default App;
