import { Outlet } from "react-router-dom";
import AdminInfo from "../Components/AdminInfo";
import Sidebar from "../Components/adminSidebar";

export default function AdminLayout() {
    return (
        <div className="flex">
            <div><Sidebar/></div>
            
            <div>
            <AdminInfo/>
            <Outlet />
            </div>
        </div>
    );
}