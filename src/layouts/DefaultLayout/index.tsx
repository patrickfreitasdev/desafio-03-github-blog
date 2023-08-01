import { Outlet } from "react-router-dom";
import { Header } from "../../Components/Layout/Header";

export function DefaultLayout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}