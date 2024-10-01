import styles from "./shopProduct.module.css";

interface IProductProps {
  title: string;
  price: number;
  description: string;
  image: string;
}

const ShopProduct = ({ title, price, description, image }: IProductProps) => {
  return (
    <div className={styles.productCard}>
      <img src={image} alt={title} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h2 className={styles.productTitle}>{title}</h2>
        <p className={styles.productPrice}>${price}</p>
        <p className={styles.productDescription}>{description}</p>
      </div>
    </div>
  );
};

export default ShopProduct;
