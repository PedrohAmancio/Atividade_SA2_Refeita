import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './Pages/Home'
import { router } from '../MyRouter';
import Mecanica from './Pages/Mecanica';
import DDS from './Pages/DDS';
import Eletrica from './Pages/Eletrica';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Cadastro from './components/Cadastro/Cadastro';
import HistoriaSENAI from './Pages/HistoriaSenai';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Mecanica' element={<Mecanica/>}/>
          <Route path='/DDS' element={<DDS/>}/>
          <Route path='/Eletrica' element={<Eletrica/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='Cadastro' element={<Cadastro/>}/>
          <Route path='Historia' element={<HistoriaSENAI/>}/>
          {/* Quando clicar no incone do usuário o formulário de login
          tem que aparecer na mesma página como um componenete */}
         </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
