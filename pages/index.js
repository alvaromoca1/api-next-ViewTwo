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
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

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