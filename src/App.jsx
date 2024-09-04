import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const App = () => {
    return (
        <>
            <Provider store={appStore}>
                <Navbar />
                <Outlet />
            </Provider>
        </>
    );
};
export default App;
