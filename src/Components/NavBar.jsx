// Importa o hook useState do React para gerenciar estados locais no componente.
import { useState } from 'react';

// Importa componentes do React-Bootstrap para criar a interface do Navbar.
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Importa o componente Login, que será exibido quando o usuário clicar no ícone de login.
import Login from './Login/Login';

// Importa o componente Home, que pode ser exibido condicionalmente.
import Home from '../Pages/Home';

// Importa estilos CSS específicos para o layout de login.
import styles from './Login/styles/login.module.css';

// Importa o hook useNavigate do React Router para navegação programática entre páginas.
import { useNavigate } from 'react-router-dom';

// Define o componente principal BasicExample, que representa o Navbar.
function BasicExample() {
    // Cria uma instância do hook useNavigate para navegar entre rotas.
    const navigate = useNavigate();

    // Define o estado mostrarLogin para controlar a exibição do componente Login.
    const [mostrarLogin, setMostrarLogin] = useState(false);

    // Define o estado mostarHome para controlar a exibição do componente Home.
    const [mostarHome, setMostrarHome] = useState(false);

    // Retorna o JSX que renderiza o Navbar.
    return (
        <>
            {/* Define o Navbar com estilo fixo no topo e cor de fundo personalizada. */}
            <Navbar 
            expand="lg" 
            className="bg-body-primary" 
            fixed='top' 
            style={{ backgroundColor: '#0746B4', display: 'flex', alignItems: 'center', height: '11vh' }}>
                 
                {/* Container para tornar o Navbar responsivo. */}
                <Container>          
                    {/* Logo do SENAI que, ao ser clicada, redireciona para a página inicial. */}
                    <Navbar.Brand href="#home">
                        <img
                         src="https://senai.me/wp-content/uploads/2019/09/logo-senai.jpg"
                         alt="LogoSenai" 
                        onClick={() => navigate('/')}
                        />
                    </Navbar.Brand>

                    {/* Dropdown do menu com opções de navegação. */}
                    <NavDropdown color='#FFFFFF' title="Menu" id="basic-nav-dropdown" 
                        style={{
                            color: '#FFFFFF',
                            fontSize: '15px',
                        }}>
                        <div>
                            {/* Opção do menu que redireciona para a página "Historia". */}
                            <NavDropdown.Item href="#action/3.1" onClick={() => navigate('/Historia')}>
                                Saiba sobre nossa instituição
                            </NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.2'></NavDropdown.Item>
                            <NavDropdown.Divider />
                        </div>
                    </NavDropdown>

                    {/* Botão para expandir o menu em telas menores. É necessario? */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {/* Conteúdo colapsável do Navbar. */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* Campo de pesquisa com um input e um ícone de lupa. Talvez seja retirado por não estar no prototipo */}
                            <Nav.Link href="#home">
                                <div className="form-floating mb-3" style={{ width: 900, display: 'flex', alignItems: 'center' }}>
                                    <input type="text"
                                        className="form-control"
                                        id="floatingInput"
                                        style={{
                                            position: 'relative',
                                            top: '3vh',
                                            height: '4vh',
                                            width: '50vw',
                                            padding: '1%',
                                            backgroundColor: 'white',
                                        }}
                                    />
                                </div>
                                <label htmlFor="floatingInput"
                                    style={{
                                        position: 'relative',
                                        bottom: '5vh',
                                        left: '1vw'
                                    }}>
                                    Pesquise o nome do curso <img src="lupa.svg" alt="Buscar" />
                                </label>
                            </Nav.Link> 

                            {/* Ícone de usuário que, ao ser clicado, alterna a exibição do componente Login. ta feio, talvez seja mudado minimamente */}
                            <img 
                                src="/user.svg" alt="Icone do usuário" onClick={() => setMostrarLogin(!mostrarLogin)} style={{
                                position: 'relative',
                                right: '6vw'
                            }} />

                            {/* Texto de boas-vindas ao lado do ícone de usuário. */}
                            <p style={{
                                position: 'relative',
                                color: 'white',
                                top: '5vh',
                                right: '5.8vw',
                                width: '9vw',
                            }}>
                                Olá, faça login ou cadastre-se
                            </p>

                            {/* Ícone de favoritos,não funciona. */}
                            <Nav.Link href="#home">
                                <label htmlFor="floatingInput">
                                    <img src="/FavoritarCurso.svg" style={{
                                        paddingTop: '5vh',
                                        position: 'relative',
                                        right: '4vw'
                                    }} />
                                </label>
                            </Nav.Link>
                        </Nav>

                        {/* Exibe o componente Login se mostrarLogin for true. */}
                        {mostrarLogin && <div className={styles.LayOutLogin}><Login /></div>}

                        {/* Exibe o componente Home se mostarHome for true. */}
                        {mostarHome && <Home />}
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
}

// Exporta o componente BasicExample como padrão.
export default BasicExample;