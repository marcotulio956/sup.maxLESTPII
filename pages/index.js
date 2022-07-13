
import Layout from '../components/Layout'
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from 'next/image'


export default function Main() {
    return (
        <Layout>           
            <div className={styles.container}>
                <div className={styles.imgcontainer}>
                <Link href='/'>
                    <Image src="/img/sample1.jpg" alt="" layout='fill'/>
                </Link>
                </div>
            </div> 
        </Layout>
    )
}