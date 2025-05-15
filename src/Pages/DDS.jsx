import Footer from '../components/Footer';
import Layout from '../components/Lay';
import styles from './styles/DDS.module.css';

const DDS= () => {
  return (
    <div>
      <Layout />
{/* Desenvolvimento de Sistema mudar dps */}
      <div className={styles.formatacao}>
        <h2>Desenvolvimento de sistema</h2>
      </div>

      <div className={styles.formatacao2}>
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
      </div>
      <Footer />
    </div >
  )
}

export default DDS