import { Outlet, Link } from "react-router-dom";
import "./layout.css";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Főoldal</Link>
                    </li>
                    <li>
                        <Link to="/ajanlatok">Aktuális Ajánlataink</Link>
                    </li>
                    <li>
                        <Link to="/uj-hirdetes">Új hírdetés küldése</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;