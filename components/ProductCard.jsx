import Image from "next/image";
import styles from "../styles/ProductCard.module.css";
import Link from "next/link";

const ProductCard = ({ product }) => {
    return (
        <div className={styles.container}>
            <Link href={`/product/${product.id}`}>
                <Image src={product.image} alt="" width="640" height="426" />
            </Link>
            <h1 className={styles.title}>{product.title}</h1>
            {/* <p className={styles.description}>{product.description}</p>
            <span className={styles.price}>R$ {product.price.toFixed(2)}</span> */}
        </div>
    );
};

export default ProductCard;
