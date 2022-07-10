import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { useSelector } from "react-redux"
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={styles.container}>
            
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