import { Link } from "react-router-dom";
import logo from "../public/eCommerce-logo.jpg";
import { useSelector } from "react-redux";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {
    const itemList = useSelector((store) => store.cart.items);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <nav className="flex justify-between w-100 m-auto shadow-lg px-8 md:px-16 items-center navBar">
                <div className="min-w-[64px]">
                    <Link to={"/"}>
                        <img src={logo} alt="Logo" className="w-20" />
                    </Link>
                </div>
                <div className="m-2 p-2 gap-x-0 hidden md:flex ">
                    <input
                        type="text"
                        className="border border-gray-200 rounded-md rounded-r-none"
                    />
                    <button className="bg-orange-400 border-gray-200 text-white rounded-md py-1 px-2 rounded-l-none">
                        Search
                    </button>
                </div>
                <div className="flex items-center font-semibold text-base">
                    <ul className="flex gap-x-4">
                        <Link to={"/cart"}>
                            <li className="relative flex flex-row-reverse">
                                <CiShoppingCart className="md:text-4xl text-5xl" />
                                <span className="absolute bg-red-500 rounded-full w-5 h-5 text-sm text-white flex items-center justify-center right-[-6px]">{itemList ? itemList.length : ""}</span>
                                {/* Cart {`${itemList ? itemList.length : ""}`} */}
                            </li>
                        </Link>
                    </ul>
                </div>
                <GiHamburgerMenu
                    className="xl:hidden block text-5xl cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
                <div
                    className={`absolute xl:hidden z-10 top-20 left-0 w-full bg-gray-200 flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform h-36 ${
                        isMenuOpen ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <div className="m-2 p-2 gap-x-0 flex ">
                        <input
                            type="text"
                            className="border border-gray-200 rounded-md rounded-r-none"
                        />
                        <button className="bg-orange-400 border-gray-200 text-white rounded-md py-1 px-2 rounded-l-none">
                            Search
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
