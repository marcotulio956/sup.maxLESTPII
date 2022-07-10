import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { useSelector } from "react-redux"
import Link from "next/link";
import Head from "next/head";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>SupMax Gym</title>
                <meta name="description" content="Descrição da academia" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.item}>
                <div className={styles.logo}>
                    <Link href='/'>
                        <Image src="/img/logo.png" alt="" width="258px" height="150px" />
                    </Link>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.cart}>
                    <Link href='/usrhome'>
                        <Image src="/img/kettlebell.png" alt="" width="30px" height="30px" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar