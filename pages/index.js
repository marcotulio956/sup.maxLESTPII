import 'bootstrap/dist/css/bootstrap.css';
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import axios from "axios";
import Head from "next/head";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";
import Layout from '../components/Layout'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = ({ productList }) => (
    <div className={styles.container} >    
        <Head>
            <title>SupMax</title>
            <meta name="description" content="Descrição da academia" />
            <link rel="icon" href="/public/favicon.ico" />
        </Head>
        <Navbar/>
        <Featured/>
        <ProductList productList={productList}/>
        <Footer/>
    </div> 
);

Home.getInitialProps = async () => {
    const response = await axios.get(
      "https://sup-max-lestpii.vercel.app/api/products"
    )
  
    return { productList: response.data }
  }
  
  export default Home;