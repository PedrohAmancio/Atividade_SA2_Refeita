import React from 'react'
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import styles from './style/Hidraulica.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { UNSAFE_decodeViaTurboStream } from 'react-router';

const DDS= () => {

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  //   };

  // const navigate = useNavigate();

  return (
    <div>
      <Layout />
{/* Desenvolvimento de Sistema mudar dps */}
      <div className={styles.hidraulica}>
        <h2>Desenvolvimento de sistema</h2>
      </div>

      <div className={styles.hidraulica2}>
        <section className={styles.p1}>
          <h4>Objetivo</h4>
          <p>O curso Técnico em Desenvolvimento de Sistemas têm como objetivos desenvolver e programar sistemas computacionais, atendendo normas e padrões de qualidade, usabilidade, integridade e segurança da informação.</p>
        </section>

        <section className={styles.detalhes}>
          <h3>Pré-requisitos</h3>
          <p>Ter idade mínima de 16 anos</p>
          <p>Ensino Fundamental I completo.</p>
          <br />
          <p>DOCUMENTOS PARA MATRÍCULA</p>
          <p>Cópia do documento de identidade;</p>
          <p>Cópia do comprovante de residência;</p>
          <p>Comprovante de escolaridade ou autodeclaração de compatibilidade;</p>
          <p>Cópia do CPF.</p>
        </section>

        <section className={styles.endDet}>
          <h4>Conteúdo</h4>
            <h7>ESTE CURSO POSSUI 80% DE SUA CARGA HORÁRIA PRESENCIAL E 20% EM EaD</h7>
            <p>
            O conteúdo do curso visa propiciar o desenvolvimento das capacidades básicas e socioemocionais relativas  à aplicação da eletroeletrônica às atividades inerentes ao Técnico em Desenvolvimento de Sistemas.</p>
        </section>

        {/* <div className={styles.card}>
          <Card className={styles.cardH}>
            <div className={styles.sob}>
              <p>ELETRÔNICA E AUTOMAÇÃO</p>
            </div>
            <Card.Img 
            variant="top" 
            src="https://img.freepik.com/fotos-gratis/vista-traseira-do-programador-trabalhando-a-noite-toda_1098-18697.jpg?semt=ais_hybrid&w=740" />
            <Card.Body>
              <Card.Text>
                <div>Vitória</div>
                <br />
                <div>Presencial e EaD</div>
                <br />
                <div>1200 horas</div>
                <br />
                <div>Sem data prevista</div>
                <br />

                <Card.Text className={styles.bodyCard}>
                  <div>
                    Em até 1x de  8.982,00
                  </div>
                  <div className={styles.endCard}>
                    Valor total do curso r$  8.982,00 em 01x s/Juros R$  8.982,00
                  </div>
                </Card.Text>
              </Card.Text>
              <Button variant="primary" className={styles.buton} style={{ backgroundColor: '#3840BA' }}>Matricular-se</Button>
            </Card.Body>
          </Card>
        </div> */}
      </div>
      <Footer />
    </div >
  )
}

export default DDS