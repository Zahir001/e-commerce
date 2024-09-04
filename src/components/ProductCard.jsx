import { Link } from "react-router-dom";

const ProductCard = ({ data, handleAddItem }) => {
    const { title, category, price, image } = data;
    return (
        <>
            <div className="gridCard group hover:shadow-xl hover:rounded-md hover:text-blue-600 shadow-xl rounded-lg relative">
                <Link to={`/item/${data.id}`}>
                    <div>
                        <img
                            src={image}
                            alt="img"
                            className="w-32  transition-transform duration-300 ease-in-out group-hover:scale-110"
                        />
                    </div>
                </Link>
                <div className="flex flex-col">
                    <Link to={`/item/${data.id}`}>
                        <h2 className="mt-3 font-bold">{title}</h2>
                        <h3>{category}</h3>
                        <h4>{price}</h4>
                    </Link>
                    <div className="relative bottom-0 left-0 right-0 w-[53%] m-auto pb-3 mt-2">
                        <button
                            className="bg-orange-400 text-white w-full py-2 rounded-md z-10"
                            onClick={(e) => {
                                handleAddItem();
                                console.log('successfully added item');
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProductCard;
