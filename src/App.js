import './App.css';

//Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';

//Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <div className="conteiner">
          <Routes>
            <Route path='/' element={<Home/>}/>  
            <Route path='/about' element={<About/>}/>  
          </Routes>
        </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
