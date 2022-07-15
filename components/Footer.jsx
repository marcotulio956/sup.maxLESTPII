import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.logo}>
                    <Link href='/'>
                        <Image src="/img/logo.png" width="258px" height="150px" alt="" />
                    </Link>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h1 className={styles.title}>LOCALIZAÇÃO</h1>
                    <p className={styles.text}>
                        Av. Amazonas, 7362
                        <br /> Nova Gameleira
                        <br /> (31) 3400-0001
                    </p>
                    <p className={styles.text}>
                        Av. Cristóvão Colombo, 829
                        <br /> Funcionários
                        <br /> (31) 3400-0002
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>HORÁRIOS</h1>
                    <p className={styles.text}>
                       Segunda a Sexta
                        <br /> 06:30 às 20:00
                    </p>
                    <div className={styles.social}>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <Image src="/img/social/social-instagram.png" width="20px" height="20px" alt="" />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <Image src="/img/social/social-facebook.png" width="20px" height="20px" alt="" />
                        </a>
                        <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
                            <Image src="/img/social/social-pinterest.png" width="20px" height="20px" alt="" />
                        </a>
                        <a href="#">
                            <Image src="/img/social/social-whatsapp.png" width="20px" height="20px" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;