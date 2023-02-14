import './App.css';

//Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';

//Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Cadastrar from './pages/Cadastrar/Cadastrar';

//Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//Context
import { AuthProvider } from './Context/AuthContext';

//hooks
import { useState, useEffect } from 'react';
import { useAthentication } from './hooks/useAuthentication';

//Img
import loadingGif from './img/loading.gif'

function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [auth])
  
  console.log(user)
  if (loadingUser) {
   return <div className="loadingConteiner"><img src={loadingGif} className="loadingGif"/></div>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <NavBar/>
            <div className="conteiner">
              <Routes>
                <Route path='/' element={<Home/>}/>  
                <Route path='/cadastro' element={<Cadastrar/>}/>
                <Route path='/login' element={<Login/>}/> 
                <Route path='/about' element={<About/>}/>  
              </Routes>
            </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
