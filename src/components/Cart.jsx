import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const { items, totalAmount } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const cartItems = items;
    console.log(cartItems);
    if (!cartItems.length === 0) {
        return <h1>Loading..</h1>;
    }
    const handleRemoveItem = () => {
        dispatch(clearCart());
        console.log('hhh');
    };
    if (cartItems.length === 0) {
        return (
            <div className="text-center flex justify-center flex-col mt-32">
                <h1 className="text-xl font-medium">Cart is Empty</h1>
                <Link to={"/"}>
                    <span className="text-blue-400">Go to Shopping Page</span>
                </Link>
            </div>
        );
    }
    return (
        <div className="w-9/12 m-auto flex mt-5 z-10 relative">
            <div className="w-6/12">
                <h1>Product Items</h1>
                <div className="">
                    {cartItems.map((item) => {
                        const { image, title, price } = item;
                        return (
                            <div className="flex border border-gray-300 rounded-md">
                                <img
                                    src={image}
                                    alt=""
                                    height={50}
                                    width={50}
                                />
                                <div>
                                    <h2>{title}</h2>
                                    <h3>${price}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="w-6/12 border-l-2">
                <button
                    className="bg-red-400 py-1 px-4 rounded-md"
                    onClick={handleRemoveItem}
                >
                    Clear Cart X
                </button>
                <h2 className="font-medium">
                    Product Details ({cartItems.length} items)
                </h2>
                <h3>Total Product Price {totalAmount}</h3>
            </div>
        </div>
    );
};
export default Cart;
