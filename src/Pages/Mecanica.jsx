import React from 'react'
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './style/Construcao.module.css'
import Layout from '../components/Layout';

const Mecanica = () => {

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  //   };

  // const navigate = useNavigate();

  return (
    <div>
      <Layout/>
{/* Mecanica */}
      <div className={styles.hidraulica}>
        <h2>Fundamentos da Tecnologia Mecânica Automotiva</h2>
      </div>

      <div className={styles.hidraulica2}>
        <section className={styles.p1}>
          <h4>Objetivo</h4>
          <p>Proporcionar o desenvolvimento das capacidades técnicas, sociais, metodológicas e organizativas referentes à qualificação profissional em Mecânico de Motores Ciclo Otto.</p>
        </section>

        <section className={styles.detalhes}>
          <h3>Pré-requisitos</h3>
          <p>Ter idade mínima de 16 anos</p>
          <p>Ensino Fundamental 2 completo.</p>
          <br />
          <p>DOCUMENTOS PARA MATRÍCULA</p>
          <p>Documento de identidade</p>
          <p>Comprovante de residência atualizado</p>
          <p>Comprovante de escolaridade ou autodeclaração de compatibilidade.</p>
          <p>CPF.</p>
        </section>

        <section className={styles.endDet}>
          <h4>Conteúdo</h4>
          <p>O conteúdo que abordaremos e aprenderemos neste curso:</p>
          <ul className={styles.Lista}>
            <li>Fundamentos da Tecnologia Mecânica Automotiva;</li>
            <li>Manutenção de Motores Ciclo Otto</li>
          </ul>
        </section>

        {/* <div className={styles.card}>
          <Card className={styles.cardH}>
           <div className={styles.sob}>
             <p>ELETRÔNICA E AUTOMAÇÃO</p>
           </div>
            <Card.Img 
            variant="top" 
            src="https://img.freepik.com/fotos-gratis/trabalhador-de-servico-de-carro-muscular-reparando-o-veiculo_146671-19605.jpg?semt=ais_hybrid&w=740" />
            <Card.Body>
              <Card.Text>
                <div>Cachoeiro de Itapemirim</div>
                <br />
                <div>Presencial</div>
                <br />
                <div>160 horas</div>
                <br />
                <div>Escolha sua turma</div>
                <br />

                <Card.Text className={styles.bodyCard}>
                  <div>
                    Em até 3x de R$428,63
                  </div>
                  <div className={styles.endCard}>
                    Valor total do curso R$1.285,89 
                  </div>
                </Card.Text>
              </Card.Text>
              <Button variant="primary" className={styles.buton} style={{backgroundColor: '#3840BA'}}>Matricular-se</Button>
            </Card.Body>
          </Card>
        </div> */}
      </div>
      <Footer />
    </div >
  )
}
export default Mecanica;