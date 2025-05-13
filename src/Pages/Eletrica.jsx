import React from 'react'
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './style/PinturaIndustrial.module.css'
import Layout from '../components/Layout';

const Eletrica = () => {
  return (
    <div>
      <Layout />
      {/* Eletrica */}
      <div className={styles.hidraulica}>
        <h2>Eletrotecnica</h2>
      </div>

      <div className={styles.hidraulica2}>
        <section className={styles.p1}>
          <h4>Objetivo</h4>
          <p>O curso Técnico em Eletrotécnica têm como objetivos instalar, manter e projetar sistemas elétricos prediais, industriais e de potência, cumprindo legislações vigentes, parâmetros de eficiência energética, normas técnicas, de qualidade, de segurança e saúde e, ainda, ambientais.</p>
        </section>

        <section className={styles.detalhes}>
          <h3>Pré-requisitos</h3>
          <p>Ter idade mínima de 16 anos</p>
          <p>Ensino Fundamental I completo.</p>
          <br />
          <p className={styles.pontoP}>ESTE CURSO É 100% PRESENCIAL, PORTANTO, TRATA-SE DE OFERTA APENAS PARA RESIDENTES DO ESTADO DO ESPÍRITO SANTO. OBSERVE O ENDEREÇO DA UNIDADE DA TURMA ESCOLHIDA.</p>
          <br />
          <p>DOCUMENTOS PARA MATRÍCULA</p>
          <p>Documento de identidade</p>
          <p>Comprovante de residência atualizado</p>
          <p>Comprovante de escolaridade ou autodeclaração de compatibilidade</p>
          <p>CPF</p>
        </section>
        <section className={styles.endDet}>
          <h4>Conteúdo</h4>
          <p>Desenho Técnico Aplicado à Projetos Elétricos</p>
          <p>Fundamentos de Eletricidade</p>
          <p>Fundamentos de Sistemas Elétricos</p>
          <p>Criatividade e Ideação em Projetos de Inovação</p>

        </section>

        {/* <div className={styles.card}>
          <Card className={styles.cardH}>
            <div className={styles.sob}>
              <p>ELETRÔNICA E AUTOMAÇÃO</p>
            </div>
            <Card.Img 
            variant="top" 
            src="https://media.istockphoto.com/id/1428071835/pt/foto/man-an-electrical-technician-working-in-a-switchboard-with-fuses.jpg?s=612x612&w=0&k=20&c=rz2q8XvOv8hHgnNuLwv6K9XrwryyIkVxfHtdOmotADo=" />
            <Card.Body>
              <Card.Text>
                <div>Linhares</div>
                <br />
                <div>Presencial</div>
                <br />
                <div>1280 horas</div>
                <br />
                <div>Início em 28/07/2025</div>
                <br />

                <Card.Text className={styles.bodyCard}>
                  <div>
                    Em até 1x de R$R$2.994,00
                  </div>
                  <div className={styles.endCard}>
                    Valor total do curso r$ R$2.994,00 em 01x s/Juros R$ R$2.994,00
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

export default Eletrica