import Footer from '../components/Footer';
import styles from './styles/Eletric.module.css'
import Layout from '../Components/Lay';

const Eletrica = () => {
  return (
    <div>
      <Layout />
      {/* Eletrica */}
      <div className={styles.formatacao}>
        <h2>Eletrotecnica</h2>
      </div>

      <div className={styles.formatacao2}>
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
      </div>
      <Footer />
    </div >
  )
}

export default Eletrica