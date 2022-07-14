import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/Layout'
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import axios from "axios";

const Main = ({ productList }) => (
    <div className={styles.container} >    
        <Head>
            <title>SupMax Gym</title>
            <meta name="description" content="Descrição da academia" />
            <link rel="icon" href="/public/favicon.ico" />
        </Head>
        <Layout> 
        <ProductList productList={productList}/>
        </Layout>
    </div> 
);

Main.getInitialProps = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/products"
    )
  
    return { productList: response.data }
  }
  
  export default Main;