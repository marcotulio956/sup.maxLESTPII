import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "/img/sample1.jpg",
    ];

    return (
        <div className={styles.container}>
            <Image src="/img/sample1.jpg" alt="" layout="fill" objectFit="cover" />
        </div>
    );
};

export default Featured;