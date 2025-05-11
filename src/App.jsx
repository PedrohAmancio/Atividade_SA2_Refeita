import { useState } from 'react'
// import NavBar from './Components/NavBar'
import Home from './Pages/Home'
// import { router } from '../Rotas';
import DetalheDDS from "./pages/DetalheDDS";
import DetalheEletric from "./pages/DetalheEletric";    
import DetalhesMec from './pages/DetalhesMec';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Cadastro from './Components/Cadastro/Cadastro';
import Historia from './pages/Historia';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Desenvolvimento-de-sistemas' element={<DetalheDDS/>}/>
          <Route path='/Eletronica-e-eletrotecnica' element={<DetalheEletric/>}/>
          <Route path='/Mecanica' element={<DetalhesMec/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='Cadastro' element={<Cadastro/>}/>
          <Route path='Historia-do-SENAI' element={<Historia/>}/>
          {/* Quando clicar no incone do usuário o formulário de login
          tem que aparecer na mesma página como um componenete */}
         </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
