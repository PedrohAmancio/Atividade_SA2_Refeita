import Footer from '../components/Footer';
import styles from './styles/Mec.module.css';
import Layout from '../components/Lay';

const Mecanica = () => {
  return (
    <div>
      <Layout/>
{/* Mecanica */}
      <div className={styles.formatacao}>
        <h2>Fundamentos da Tecnologia Mecânica Automotiva</h2>
      </div>

      <div className={styles.formatacao2}>
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
      </div>
      <Footer />
    </div >
  )
}
export default Mecanica;