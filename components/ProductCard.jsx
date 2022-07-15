import Image from "next/image";
import styles from "../styles/ProductCard.module.css";
import Link from "next/link";

const ProductCard = ({ product }) => {
    console.log(product);
    return (
        <div className={styles.container}>
            <Link href={`/products/${product._id}`}>
                <Image src={product.image} width="512" height="340"/>
            </Link>
            <h1 className={styles.title}>{product.title}</h1>
        </div>
    );
};

export default ProductCard;