import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCT_DATA } from "../utils/constant";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import LoadingDetail from "./LoadingDetail";

const ProductMenu = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const [productItem, setProductItem] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(
            `https://fakestoreapi.com/products/${productId}`
        );
        const json = await data.json();
        console.log(json);
        setProductItem(json);
    };
    if (!productItem) {
        return <LoadingDetail />;
    }

    const handleAddItem = (product) => {
        dispatch(addItem(product));
    };

    return (
        <div className="w-9/12 m-auto">
            <div className="flex mt-9 gap-x-4">
                <div className="w-6/12 border border-gray-100 shadow-lg py-4 text-center">
                    <div className="ImgParent">
                        <img
                            src={productItem.image}
                            alt=""
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
                <div className="w-6/12 border border-gray-100 shadow-lg p-4">
                    <h2 className="font-bold text-2xl">{productItem.title}</h2>
                    <p className="text-gray-500 text-lg mt-4">
                        {productItem.description}
                    </p>
                    <div className="mt-4 text-3xl">${productItem.price}</div>
                    <div className="flex items-center mt-4 gap-x-2">
                        <h3 className="bg-green-300 py-1 px-5 inline-block flex w-fit items-center gap-x-1 text-lg font-normal rounded-md">
                            <FaStar
                                className=""
                                fontSize={20}
                                style={{ fill: "yellow", color: "yellow" }}
                            />
                            {productItem.rating.rate}
                        </h3>
                        <span className="text-md text-gray-500">
                            {productItem.rating.count} Ratings
                        </span>
                    </div>
                    <button
                        className="bg-orange-400 text-white w-[53%] py-2 rounded-md mt-5"
                        onClick={() => handleAddItem(productItem)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ProductMenu;
