import axios from "axios";
import styles from "../../styles/Product.module.css"

const Product = ({ product }) => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{product.title}</h1>
            <p>dar um fetch da descrição do produto, colocar os preços aqui mesmo</p>
        </div>
    );
};

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(
        `https://sup-max-lestpii.vercel.app/api/products/${params.id}`
    );
    return {
        props: {
            product: res.data,
        },
    };
};

export default Product;