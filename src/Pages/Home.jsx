import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Layout from '../components/Layout';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardText from 'react-bootstrap/esm/CardText';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const navigate = useNavigate();

  // Eu tenho que clicar no matricular-se e ele tem que me levar para a página

  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 'auto',
          margin: '0',
          padding: '0',
          overflow: 'hidden',
        }}
      >
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          style={{
            width: '100%',
            marginTop:'2vh',
          }}
        >
          <Carousel.Item style={{ height: '100%' }}>
            <img
              className="d-block w-100"
              src="https://eadsenaies.com.br/wp-content/uploads/2021/10/banner_senai_ead_4.0_350x350-350x284.png"
              alt="Chegue rápido no mercado de trabalho"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: '100%' }}>
            <img
              className="d-block w-100"
              src="https://www.tudorondonia.com/uploads/02-08-24-z3sl570y04o8ri8.jpg"
              alt="Second slide"
              style={{ 
                width: '100%',
                height: 'auto',
              }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: '100%' }}>
            <img
              className="d-block w-100"
              src="https://www.senaipr.org.br/mundosenai/uploadAddress/Senai-Mundo-Senai-2024-Banner-Desktop-768x630[110573].png"
              alt="Third slide"
              style={{ 
                width: '100%',
                height: 'auto',
              }}
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginTop: '2rem',
          padding: '20px',
        }}
      >
        {/* <img src="/barra.svg" alt="barra" />
        <div>
          <div style={{ margin: 0, fontWeight: 'bold' }}>Cursos em alta</div>
          <h6 style={{ margin: 0 }}>ESCOLHA O CURSO</h6>
        </div> */}
      </div>

      {/* --------------------------------------------------cards-------------------------------------------------- */}
      <Container style={{ marginTop: '30px', 
                          marginBottom: '60px'
                       }}>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
            <Card style={{ width: '18rem',
                          boxShadow:'0px 4px 7px rgb(48, 48, 48)',
             }}>
       {/* -------------------------------------------Inicio DDS --------------------------------------------------------- */}
              <Card.Img 
              variant="top" 
              src="https://img.freepik.com/fotos-gratis/vista-traseira-do-programador-trabalhando-a-noite-toda_1098-18697.jpg?semt=ais_hybrid&w=740" 
              style={{ display: "inline-block",
              alignItems: "center", 
              border: "20px",
              }} />
              {/* width: '120%', */}
              <Card.Body>
                <Card.Title>Desenvolvimento de Sistemas</Card.Title>
                <Card.Text style={{ height: '13', justifyContent: 'flex-start', fontWeight: '', fontStyle: 'normal', textAlign: "initial" }}>

                <div>Vitória</div>             
                <div>Presencial e EaD</div>
                <div>1200 horas</div>
                <div>Sem data prevista</div>
    

                  <CardText style={{ color: 'blue', textJustify: 'revert-layer' }}>
                    <div style={{
                      fontSize: "20px", fontWeight: "bold",
                      textAlign: "end"
                    }}>Em até 1x de R$ 8.982,00
                    </div>

                    <div style={{ fontSize: '12px', color: "#4E4E4E" }}>Valor total do curso r$ 8.982,00 em 01x s/Juros R$ 8.982,00</div>
                  </CardText>
                </Card.Text>
                <Button variant="primary" style={{ width: '100%', backgroundColor: '#3840BA' }} onClick={() => navigate('/DDS')}>Matricule-se</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* ------------------------------------------- Fim DDS --------------------------------------------------------- */}
          {/* --------------------------------------------------cards-------------------------------------------------- */}

          {/* -------------------------------------------Inicio Eletrica --------------------------------------------------------- */} 
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
            <Card style={{ width: '18rem',
                           boxShadow:'0px 4px 7px rgb(48, 48, 48)',
             }}>
              <Card.Img 
              variant="top" 
              src="https://media.istockphoto.com/id/1428071835/pt/foto/man-an-electrical-technician-working-in-a-switchboard-with-fuses.jpg?s=612x612&w=0&k=20&c=rz2q8XvOv8hHgnNuLwv6K9XrwryyIkVxfHtdOmotADo=" 
              style={{ display: "inline-block", alignItems: "center", border: "20px" }} />
              <Card.Body>
                <Card.Title>Eletrica</Card.Title>
                <Card.Text style={{ height: '13', justifyContent: 'flex-start', fontWeight: '', fontStyle: 'normal', textAlign: "initial" }}>
                  {/* <p>São Mateus</p>
                  <p>Presencial</p>
                  <p>60 horas</p>
                  <p>Início em 05/05/2025</p> */}

                <div>Linhares</div>
                <div>Presencial</div>
                <div>1280 horas</div>
                <div>Início em 28/07/2025</div>


                  <CardText style={{ color: 'blue', textJustify: 'revert-layer' }}>
                    <div style={{
                      fontSize: "20px", fontWeight: "bold",
                      textAlign: "end"
                    }}>Em até 1x de R$R$2.994,00
                    </div>

                    <div style={{ fontSize: '12px', color: "#4E4E4E" }}>Valor total do curso r$ R$2.994,00 em 01x s/Juros R$ R$2.994,00</div>
                  </CardText>
                </Card.Text>
                <Button variant="primary" style={{ width: '100%', backgroundColor: '#3840BA' }} onClick={() => navigate('/Eletrica')}>Matricule-se</Button>
              </Card.Body>
            </Card>
          </Col>
         {/* -------------------------------------------Fim Eletrica --------------------------------------------------------- */}
          {/* --------------------------------------------------cards-------------------------------------------------- */}

          {/* -----------------------------------------------Inicio Mecanica----------------------------------- */}
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
            <Card style={{ width: '18rem',
                           boxShadow:'0px 4px 7px rgb(48, 48, 48)',
             }}>
              <Card.Img 
              variant="top" 
              src="https://img.freepik.com/fotos-gratis/trabalhador-de-servico-de-carro-muscular-reparando-o-veiculo_146671-19605.jpg?semt=ais_hybrid&w=740" 
              style={{ display: "inline-block", alignItems: "center", border: "20px" }} />
              <Card.Body>
                <Card.Title>Mecanica</Card.Title>
                <Card.Text style={{ height: '13', justifyContent: 'flex-start', fontWeight: '', fontStyle: 'normal', textAlign: "initial" }}>

               <div>Cachoeiro de Itapemirim</div>
                <div>Presencial</div>
                <div>160 horas</div>
                <div>Escolha sua turma</div>


                  <CardText style={{ color: 'blue', textJustify: 'revert-layer' }}>
                    <div style={{
                      fontSize: "20px", fontWeight: "bold",
                      textAlign: "end"
                    }}>Em até 1x de R$1.285,89 </div>
                    <div style={{ fontSize: '12px', color: "#4E4E4E" }}>Valor total do curso r$ 428,73 em 01x s/Juros R$  428,73</div>
                  </CardText>

                </Card.Text>
                <Button variant="primary" style={{ width: '100%', backgroundColor: '#3840BA' }} onClick={() => navigate('/Mecanica')}>Matricule-se</Button>
              </Card.Body>
               {/* -----------------------------------------------Fim Mecanica----------------------------------- */}
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Layout>
  );
}

export default ControlledCarousel;