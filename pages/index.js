import Layout from '../components/Layout'
import ProductList from '../components/ProductList'
import Head from "next/head";
import styles from "../styles/Main.module.css";
import axios from "axios";

const Main = ({ productList }) => {
    <Layout>
        <div className={styles.container}>
            <Head>
                <title>SupMaxGym</title>
                <meta name="description" content="Descrição da academia" />
                <link rel="icon" href="../public/favicon.ico" />
            </Head>
            <ProductList productList={productList}/>
        </div>
    </Layout>
}

Main.getInitialProps = async () => {
    const response = await axios.get(
      "https://sup-max-lestpii.vercel.app/api/products"
    )
  
    return { productList: response.data }
}

export default Main;
