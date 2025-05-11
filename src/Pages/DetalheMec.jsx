import React from 'react'
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './style/Construcao.module.css'
import Layout from '../components/Layout';

const DetalheMec = () => {

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  //   };

  // const navigate = useNavigate(); não sei se vai precisar

  return (
    <div>
      <Layout/>

      <div className={styles.hidraulica}>
        <h2>Mecanica</h2>
      </div>

      <div className={styles.hidraulica2}>
        <section className={styles.p1}>
          <h4>Objetivo</h4>
          <p> Formar profissionais capazes de atuar na área da mecânica, com foco em projetos, produção e manutenção de máquinas e equipamentos. </p>
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
               e até mesmo temas mais avançados como e . 
            <li>Desenho técnico;</li>
            <li>Metrologia;</li>
            <li>Processos de fabricação;</li>
            <li> Materiais ;</li>
            <li> Manutenção mecânica;</li>
            <li> Automação;</li>
            <li> Qualidade;</li>
            <li> Segurança;</li>
          </ul>
        </section>

        <div className={styles.card}>
          <Card className={styles.cardH}>
           <div className={styles.sob}>
             <p>Desenvolvimento de sistema</p>
           </div>
            <Card.Img variant="top" src="https://clickpetroleoegas.com.br/wp-content/uploads/2024/09/senai-mec.jpg" />
            <Card.Body>
              <Card.Text>
                <div>Vila Velha</div>
                <br />
                <div>Presencial</div>
                <br />
                <div>60 horas</div>
                <br />
                <div>Escolha sua turma</div>
                <br />

                <Card.Text className={styles.bodyCard}>
                  <div>
                    Em até 1x de R$389,90
                  </div>
                  <div className={styles.endCard}>
                    Valor total do curso r$ 389,00 em 01x s/Juros R$ 389,00
                  </div>
                </Card.Text>
              </Card.Text>
              <Button variant="primary" className={styles.buton} style={{backgroundColor: '#3840BA'}}>Matricular-se</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </div >
  )
}
export default DetalheMec;