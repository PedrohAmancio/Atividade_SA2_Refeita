import Footer from '../Components/Footer'
import Layout from '../components/Lay'
import styles from "./styles/Hist.module.css"

const HistoriaSENAI = () => {
  return (
    <div>
      <Layout />
      {/* Centraliza o vídeo */}
      <div style={{  flexDirection: 'column',  marginTop: '60px' }}>
        <iframe
          width="1060"
          height="615"
          src="https://www.youtube.com/embed/1hbzT3T1Vcs?start=39"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ display: 'block', maxWidth: '100%', borderRadius: '12px' }}
        ></iframe>

        {/* Título e informações de história abaixo do vídeo */}
        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '32px 0 0 0', width: '100%' }}>
          <h3 className={styles.h3} style={{ textAlign: 'center', fontSize: '2.2rem', color: '#3840BA', marginBottom: '12px' }}>
            História do SENAI
          </h3>
        </section>

        <section className={styles.wraper} style={{ width: '100%' }}>
          <section className={styles.container}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '24px',
                justifyContent: 'center',
                marginTop: '32px'
              }}
            >
              {/* Cartões de décadas */}
              <div
                style={{
                  background: '#f5f6fa',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  padding: '24px',
                  minWidth: '260px',
                  maxWidth: '350px',
                  flex: '1 1 260px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <span
                  style={{
                    color: '#6c2eb7',
                    fontWeight: 'bold',
                    fontSize: '22px',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  1940
                </span>
                <span>
                  Em 1942 o SENAI- Serviço Nacional de Aprendizagem Industrial é criado pela CNI, orientada pelo Decreto-Lei nº 4.048, de 22 de janeiro de 1942, assinado pelo presidente Getúlio Vargas.
                </span>
              </div>
              {/* Repita o mesmo para os outros cartões */}
              <div
                style={{
                  background: '#f5f6fa',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  padding: '24px',
                  minWidth: '260px',
                  maxWidth: '350px',
                  flex: '1 1 260px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <span
                  style={{
                    color: '#6c2eb7',
                    fontWeight: 'bold',
                    fontSize: '22px',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  1950
                </span>
                <span>
                  Por meio de uma parceria com a Companhia Vale do Rio Doce (CVRD), e por isso atendia basicamente às demandas geradas por esta indústria, em 1952 foi inaugurada a primeira unidade Senai Escola de Aprendizagem Pedro Nolasco, em Cariacica.
                </span>
              </div>
              <div
                style={{
                  background: '#f5f6fa',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  padding: '24px',
                  minWidth: '260px',
                  maxWidth: '350px',
                  flex: '1 1 260px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <span
                  style={{
                    color: '#6c2eb7',
                    fontWeight: 'bold',
                    fontSize: '22px',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  1960
                </span>
                <span>
                  A escola de Cariacica deu lugar ao Centro de Formação Profissional Jerônimo Monteiro em Vitória, no ano de 1964.
                </span>
              </div>
              <div
                style={{
                  background: '#f5f6fa',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  padding: '24px',
                  minWidth: '260px',
                  maxWidth: '350px',
                  flex: '1 1 260px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <span
                  style={{
                    color: '#6c2eb7',
                    fontWeight: 'bold',
                    fontSize: '22px',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  1970
                </span>
                <span>
                  Em 1970, com a chegada de grandes projetos, como CST (Companhia Siderúrgica de Tubarão), Samarco e Aracruz Celulose demandaram grande expansão do Senai para atender às demandas industriais. O Senai iniciava com unidades móveis com laboratórios transportáveis.
                </span>
              </div>
              <div
                style={{
                  background: '#f5f6fa',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  padding: '24px',
                  minWidth: '260px',
                  maxWidth: '350px',
                  flex: '1 1 260px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <span
                  style={{
                    color: '#6c2eb7',
                    fontWeight: 'bold',
                    fontSize: '22px',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  1980
                </span>
                <span>
                  Em 1980 o SENAI expande sua atuação para além da indústria extrativa e começa a oferecer soluções em diversos setores da indústria capixaba, investindo em unidades móveis e atendendo todo o estado em várias áreas industriais.
                </span>
              </div>
              <div
                style={{
                  background: '#f5f6fa',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  padding: '24px',
                  minWidth: '260px',
                  maxWidth: '350px',
                  flex: '1 1 260px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <span
                  style={{
                    color: '#6c2eb7',
                    fontWeight: 'bold',
                    fontSize: '22px',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  2010
                </span>
                <span>
                  No ano de 2010 o SENAI começa a oferecer consultorias em eficiência energética para as empresas. Em 2017 é criada a diretoria de Inovação, Tecnologia e Produtividade, e em 2019 inaugura o hub de inovação - Findeslab.
                </span>
              </div>
              <div
                style={{
                  background: '#f5f6fa',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  padding: '24px',
                  minWidth: '260px',
                  maxWidth: '350px',
                  flex: '1 1 260px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <span
                  style={{
                    color: '#6c2eb7',
                    fontWeight: 'bold',
                    fontSize: '22px',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  2020
                </span>
                <span>
                  Em 2020 é inaugurado o novo espaço do Instituto Senai de Tecnologia, no SENAI Vitória. Os cursos técnicos passaram a contar com um novo formato: EaD com prática, além da criação da Academia de Segurança Cibernética.
                </span>
              </div>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </div>
  )
}
export default HistoriaSENAI