// Importa o hook useState do React para gerenciar estados locais no componente.
import { useState } from 'react';

// Importa o componente Carousel do React-Bootstrap para criar um carrossel de imagens.
import Carousel from 'react-bootstrap/Carousel';

// Importa o componente Lay, que provavelmente é um layout personalizado para a página.
import Lay from '../Components/Lay';

// Importa o componente Button do React-Bootstrap para criar botões estilizados.
import Button from 'react-bootstrap/Button';

// Importa o componente Card do React-Bootstrap para criar cartões de conteúdo.
import Card from 'react-bootstrap/Card';

// Importa o componente Container do React-Bootstrap para criar um contêiner responsivo.
import Container from 'react-bootstrap/Container';

// Importa os componentes Row e Col do React-Bootstrap para criar layouts baseados em grid.
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Importa o componente CardText do React-Bootstrap para estilizar textos dentro de cartões.
import CardText from 'react-bootstrap/esm/CardText';

// Importa o componente Footer, que provavelmente é o rodapé da página.
import Footer from '../components/Footer';

// Importa o hook useNavigate do React Router para navegação programática entre páginas.
import { useNavigate } from 'react-router-dom';

// Define o componente principal ControlledCarousel, que representa a página inicial.
function ControlledCarousel() {
  // Define o estado `index` para controlar o índice do carrossel ativo.
  const [index, setIndex] = useState(0);

  // Função para atualizar o índice do carrossel quando o usuário seleciona um slide.
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Cria uma instância do hook useNavigate para navegar entre rotas.
  const navigate = useNavigate();

  // Retorna o JSX que renderiza a página.
  return (
    // Usa o componente Lay como layout principal da página.
    <Lay>
      {/* Seção do carrossel de imagens */}
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
        {/* Carrossel de imagens */}
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          style={{
            width: '100%',
            marginTop: '2vh',
          }}
        >
          {/* Primeiro slide do carrossel */}
          <Carousel.Item style={{ height: '100%' }}>
            <img
              className="d-block w-100"
              src="https://eadsenaies.com.br/wp-content/uploads/2021/10/banner_senai_ead_4.0_350x350-350x284.png" // imagem válida
              alt="Chegue rápido no mercado de trabalho"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Carousel.Item>

          {/* Segundo slide do carrossel */}
          <Carousel.Item style={{ height: '100%' }}>
            <img
              className="d-block w-100"
              src="https://www.tudorondonia.com/uploads/02-08-24-z3sl570y04o8ri8.jpg" // Essa imagem é loca vei
              alt="Second slide"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Carousel.Item>

          {/* Terceiro slide do carrossel */}
          <Carousel.Item style={{ height: '100%' }}>
            <img
              className="d-block w-100"
              src="https://www.senaipr.org.br/mundosenai/uploadAddress/Senai-Mundo-Senai-2024-Banner-Desktop-768x630[110573].png" // essa imagme é para complementar a outro slide
              alt="Third slide"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Seção de destaque com título "Cursos em alta" */}
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
        <img src="/barra.svg" alt="barra" />
        <div>
          <div style={{ margin: 0, fontWeight: 'bold' }}>Cursos em alta</div>
          <h6 style={{ margin: 0 }}>ESCOLHA O CURSO</h6>
        </div>
      </div>

      {/* Seção de cartões de cursos */}
      <Container
        style={{
          marginTop: '30px',
          marginBottom: '60px',
        }}
      >
        <Row className="justify-content-center">
          {/* Primeiro cartão: Curso de DDS */}
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
            <Card
              style={{
                width: '18rem',
                boxShadow: '0px 4px 7px rgb(48, 48, 48)',
              }}
            >
              <Card.Img
                variant="top"
                src="https://img.freepik.com/fotos-gratis/vista-traseira-do-programador-trabalhando-a-noite-toda_1098-18697.jpg?semt=ais_hybrid&w=740"
                style={{
                  display: 'inline-block',
                  alignItems: 'center',
                  border: '20px',
                }}
              />
              <Card.Body>
                <Card.Title>Desenvolmento de sistemas</Card.Title>
                <Card.Text
                  style={{
                    height: '13',
                    justifyContent: 'flex-start',
                    fontWeight: '',
                    fontStyle: 'normal',
                    textAlign: 'initial',
                  }}
                >
                  <div>Aracruz</div>
                  <div>Presencial</div>
                  <div>40 horas</div>
                  <div>Início em 14/04/2025</div>

                  <CardText
                    style={{
                      color: 'blue',
                      textJustify: 'revert-layer',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        textAlign: 'end',
                      }}
                    >
                      Em até 1x de R$389,90
                    </div>

                    <div
                      style={{
                        fontSize: '12px',
                        color: '#4E4E4E',
                      }}
                    >
                      Valor total do curso r$ 389,00 em 01x s/Juros R$ 389,00
                    </div>
                  </CardText>
                </Card.Text>
                <Button
                  variant="primary"
                  style={{
                    width: '100%',
                    backgroundColor: '#3840BA',
                  }}
                  onClick={() => navigate('/DetalhesDDs')}
                >
                  Matricule-se
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Segundo cartão: Curso de Pintura Industrial */}
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
            <Card
              style={{
                width: '18rem',
                boxShadow: '0px 4px 7px rgb(48, 48, 48)',
              }}
            >
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/1428071835/pt/foto/man-an-electrical-technician-working-in-a-switchboard-with-fuses.jpg?s=612x612&w=0&k=20&c=rz2q8XvOv8hHgnNuLwv6K9XrwryyIkVxfHtdOmotADo="
                style={{
                  display: 'inline-block',
                  alignItems: 'center',
                  border: '20px',
                }}
              />
              <Card.Body>
                <Card.Title>Eletrica</Card.Title>
                <Card.Text
                  style={{
                    height: '13',
                    justifyContent: 'flex-start',
                    fontWeight: '',
                    fontStyle: 'normal',
                    textAlign: 'initial',
                  }}
                >
                  <div>São Mateus</div>
                  <div>Presencial</div>
                  <div>60 horas</div>
                  <div>Início em 05/05/2025</div>

                  <CardText
                    style={{
                      color: 'blue',
                      textJustify: 'revert-layer',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        textAlign: 'end',
                      }}
                    >
                      Em até 1x de R$809,90
                    </div>

                    <div
                      style={{
                        fontSize: '12px',
                        color: '#4E4E4E',
                      }}
                    >
                      Valor total do curso r$ 809,90 em 01x s/Juros R$ 809,90
                    </div>
                  </CardText>
                </Card.Text>
                <Button
                  variant="primary"
                  style={{
                    width: '100%',
                    backgroundColor: '#3840BA',
                  }}
                  onClick={() => navigate('/PinturaIndustrialDetalhamento')}
                >
                  Matricule-se
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Terceiro cartão: Curso de Construção Civil */}
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
            <Card
              style={{
                width: '18rem',
                boxShadow: '0px 4px 7px rgb(48, 48, 48)',
              }}
            >
              <Card.Img
                variant="top"
                src="https://img.freepik.com/fotos-gratis/trabalhador-de-servico-de-carro-muscular-reparando-o-veiculo_146671-19605.jpg?semt=ais_hybrid&w=740"
                style={{
                  display: 'inline-block',
                  alignItems: 'center',
                  border: '20px',
                }}
              />
              <Card.Body>
                <Card.Title>Mecanica</Card.Title>
                <Card.Text
                  style={{
                    height: '13',
                    justifyContent: 'flex-start',
                    fontWeight: '',
                    fontStyle: 'normal',
                    textAlign: 'initial',
                  }}
                >
                  <div>Vila Velha</div>
                  <div>Presencial</div>
                  <div>60 horas</div>

                  <CardText
                    style={{
                      color: 'blue',
                      textJustify: 'revert-layer',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        textAlign: 'end',
                      }}
                    >
                      Em até 1x de R$428,73
                    </div>
                    <div
                      style={{
                        fontSize: '12px',
                        color: '#4E4E4E',
                      }}
                    >
                      Valor total do curso r$ 428,73 em 01x s/Juros R$ 428,73
                    </div>
                  </CardText>
                </Card.Text>
                <Button
                  variant="primary"
                  style={{
                    width: '100%',
                    backgroundColor: '#3840BA',
                  }}
                  onClick={() => navigate('/ConstrucaCivilDetalhamento')}
                >
                  Matricule-se
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Rodapé da página */}
      <Footer />
    </Lay>
  );
}

// Exporta o componente ControlledCarousel como padrão.
export default ControlledCarousel;