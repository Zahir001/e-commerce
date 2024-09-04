import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { PRODUCT_DATA } from "../utils/constant";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import Loading from "./Loading";

const Body = () => {
    const [productItem, setProductItem] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(`${PRODUCT_DATA}`);
        const json = await data.json();
        console.log(json);
        setProductItem(json);
    };
    const dispatch = useDispatch();

    const handleAddItem = (product) => {
        dispatch(addItem(product));
    };
    if (productItem.length === 0) {
        return <Loading />;
    }
    return (
        <div className="text-center">
            <h1 className="text-3xl font-mono">Explore Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-4 w-10/12 m-auto productGrid my-9">
                {productItem.map((item) => {
                    return (
                        <ProductCard
                            data={item}
                            key={item.id}
                            handleAddItem={() => handleAddItem(item)}
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default Body;
