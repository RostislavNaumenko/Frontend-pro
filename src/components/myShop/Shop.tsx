import { useState } from "react";
import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import styles from "./shop.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../loader/Loader";
import ShopProduct from "./ShopProduct";

interface IInputValue {
  number: string;
}

interface IData {
  title: string;
  price: number;
  description: string;
  image: string;
}

const schema = Yup.object().shape({
  number: Yup.number()
    .typeError("Please insert correct number!")
    .required("Please insert number!")
    .min(1, "Please insert number from 1")
    .max(20, "Please insert number less than 20"),
});

const Shop = () => {
  const [data, setData] = useState<IData[]>([]);
  const [load, setLoad] = useState<boolean>(false);

  const fetchdata = async (value: string): Promise<IData[]> => {
    const res = await fetch(`https://fakestoreapi.com/products?limit=${value}`);
    const data = await res.json();
    return data;
  };

  const uploadData = (value: string) => {
    setLoad(true);
    setTimeout(() => {
      fetchdata(value).then((fetchedData) => {
        setData(fetchedData);
        setLoad(false);
      });
    }, 1000);
  };

  const formik = useFormik({
    initialValues: {
      number: "",
    } as IInputValue,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (value, { resetForm }) => {
      uploadData(value.number);
      resetForm();
    },
  });

  return (
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input
          value={formik.values.number || ""}
          onChange={formik.handleChange}
          type="text"
          name="number"
          placeholder="Amount of products"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
      {formik.errors.number && (
        <span className={styles.error}>{formik.errors.number}</span>
      )}
      <div className={styles.products}>
        {load ? (
          <Loader />
        ) : (
          data.map((product, index) => (
            <ShopProduct
              key={index}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Shop;
