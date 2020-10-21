import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'

function Home({datos}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          APi de <a href="https://nextjs.org">Alandina.com</a>
        </h1>
        <h4>Productos Agroindustrias</h4>
        <div className={styles.grid}>
          {datos[0].map(artigo =>(
            <a key={artigo.id} href="#!" className={styles.card}>
              <figure className={styles.imgproducto}>
                <img src={artigo.image}/>
              </figure>
              <h3>{artigo.name}</h3>
              <p className={styles.descripcion}>{artigo.description}</p>
            </a>
          ))}
        </div>
        <h4>Productos Confeccion</h4>
        <div className={styles.grid}>
          {datos[1].map(artigo =>(
            <a key={artigo.id} href="#!" className={styles.card}>
              <figure className={styles.imgproducto}>
                <img src={artigo.image}/>
              </figure>
              <h3>{artigo.name}</h3>
              <p className={styles.descripcion}>{artigo.description}</p>
            </a>
          ))}
        </div>
        <h4>Productos Agricultura</h4>
        <div className={styles.grid}>
          {datos[2].map(artigo =>(
            <a key={artigo.id} href="#!" className={styles.card}>
              <figure className={styles.imgproducto}>
                <img src={artigo.image}/>
              </figure>
              <h3>{artigo.name}</h3>
              <p className={styles.descripcion}>{artigo.description}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}
Home.getInitialProps = async () =>{
  const response = await axios.get(
    'https://alandina.com/api/products/best-sellers-products'
  );
  //console.log(response);
  return {datos: response.data}
}
export default Home;