import Image from "next/image";
import styles from "../styles/ProductCard.module.css";
import Link from "next/link";

const ProductCard = ({ product }) => {
    return (
        <div className={styles.container}>
            <Link href={`/product/${product.id}`}>
                <Image src={product.image} fluid />
            </Link>
            <h1 className={styles.title}>{product.title}</h1>
        </div>
    );
};

export default ProductCard;