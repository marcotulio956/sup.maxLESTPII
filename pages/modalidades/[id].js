import axios from "axios";

const Product = ({ product }) => {
    const price = product.price.toFixed(2);
    const id = product._id

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{product.title}</h1>
        </div>
    );
};

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(
        `http://localhost:3000/supmaxgymDb/${params.id}`
    );
    return {
        props: {
            product: res.data,
        },
    };
};

export default Product;