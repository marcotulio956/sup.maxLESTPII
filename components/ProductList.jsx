import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = ({ productList }) => {
    console.log(productList);
    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.title}>Modalidades</h1>
                <div className={styles.wrapper}>
                    {productList[0].map((product) => {
                        return (
                            <ProductCard key={product._id} product={product}/>
                        )
                    })}
                </div>
            </div>
        </div>
        
    );
};

export default ProductList;