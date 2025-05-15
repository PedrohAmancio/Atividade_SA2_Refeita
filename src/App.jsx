import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './Pages/Home';
import Mecanica from './Pages/Mecanica';
import DDS from './Pages/DDS';
import Eletrica from './Pages/Eletrica';
import HistoriaSENAI from './Pages/HistoriaSENAI';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';

function App() {
  const [isLoginVisible, setLoginVisible] = useState(false);

  const toggleLogin = () => {
    setLoginVisible(prevState => !prevState);
  };

  return (
    <>
      <div>
        <button onClick={toggleLogin}>Ícone do Usuário</button>
        {isLoginVisible && <Login onClose={toggleLogin} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mecanica" element={<Mecanica />} />
          <Route path="/DDS" element={<DDS />} />
          <Route path="/Eletrica" element={<Eletrica />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Historia" element={<HistoriaSENAI />} />
        </Routes>
      </div>
    </>
  );
}

export default App;