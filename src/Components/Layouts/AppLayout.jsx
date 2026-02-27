import { Outlet, useLocation } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header";
import HeaderSecond from "./HeaderSecond";

function AppLayout() {


    const location = useLocation();
    const path = location.pathname;
    const staticRoute = ['/login', '/register']

    console.log(path)


    return (
        <>
            <div className="app-layout">
                {!staticRoute.includes(path) &&
                    // <Header />
                    <HeaderSecond/>
                   
                }
                <div className="page-content">
                    <Outlet />
                </div>
                {!staticRoute.includes(path) && <Footer />}
            </div>







        </>


    )
}

export default AppLayout