import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import styles from './Login/Style/Login.module.css';
import { useNavigate } from 'react-router-dom';
import Login from "../Pages/Login";
import Cadastro from '../pages/Cadastro';

function BasicExample() {
    const navigate = useNavigate();
    const [mostrarLogin, setMostrarLogin] = useState(false);
    const [mostarHome, setMostrarHome] = useState(false);
    return (
        <>
            <Navbar expand="lg" 
    className="bg-body-primary" 
    fixed="top" 
    style={{ 
        background: 'linear-gradient(90deg, #4B0082, #0746B4)', // Gradiente de roxo escuro para azul
        display: 'flex', 
        alignItems: 'center', 
        height: '11vh' 
    }}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img 
                        src="https://i.pinimg.com/736x/4d/28/0b/4d280bce5b1259c6946461dd67e8acf2.jpg" alt="LogoSenai" 
                        onClick={() => navigate('/')}
                        style={{
                         width: '150px', // Define a largura da logo
                         height: 'auto', // Mantém a proporção da imagem
                         display: 'block', // Garante que a imagem seja tratada como um bloco
                         margin: '0 auto', // Centraliza a logo horizontalmente
                         cursor: 'pointer' // Adiciona um cursor de ponteiro ao passar o mouse
    }}

                        />
                    </Navbar.Brand>
                    <NavDropdown color='#FFFFFF' title="Menu" id="basic-nav-dropdown" 
                        style={{
                            color: '#FFFFFF',
                            fontSize: '15px',
                        }}>
                        <div style={{
                            //   Se der tempo fazer igual
                        }}>
                            <NavDropdown.Item href="#action/3.1" onClick={() => navigate('/Historia')}>Nossa história!</NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.2'></NavDropdown.Item>
                            <NavDropdown.Divider />
                        </div>
                    </NavDropdown>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">

                            </Nav.Link>
                            <img 
                            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                             alt="Icone do usuário" 
                              style={{
                                 position: 'relative',
                                 right: '-55vw',
                                  top: '2vh', // Move a imagem um pouco para baixo
                                 width: '50px', // Define uma largura fixa
                                 height: '50px', // Define uma altura fixa
                                 borderRadius: '50%', // Torna a imagem circular
                                 cursor: 'pointer', // Adiciona um cursor de ponteiro ao passar o mouse
                                 objectFit: 'cover' // Garante que a imagem se ajuste ao contêiner
                            }} />
                            <Nav.Link href="/Login"
                                style={{
                                    position: 'relative',
                                    right: '-55vw',
                                    top: '2vh', // Move a imagem um pouco para baixo
                                    color: '#FFFFFF',
                                    fontSize: '15px',
                                }} onClick={() => setMostrarLogin(!mostrarLogin)}>Login</Nav.Link>
                            <Nav.Link href="/Cadastro"
                                style={{
                                    position: 'relative',
                                    right: '-55vw',
                                    top: '2vh', // Move a imagem um pouco para baixo
                                    color: '#FFFFFF',
                                    fontSize: '15px',
                                }} onClick={() => setMostrarHome(!mostarHome)}>Cadastro</Nav.Link>
                        </Nav>
                        {mostrarLogin && <div className={styles.LayOutLogin}><Login /></div>}
                        {mostrarLogin && <div style={{ position: 'absolute', top: '20vh', right: '10vw' }}><Login /></div>}
                        {mostarHome && <div style={{ position: 'absolute', top: '20vh', right: '10vw' }}><Cadastro /></div>}
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
}
export default BasicExample;