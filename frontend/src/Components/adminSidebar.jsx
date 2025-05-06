import React, { useState } from "react";
import { CgLogOut } from "react-icons/cg";
import { FaCar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { MdCarRental, MdDashboard, MdLibraryAdd } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TiMessages } from "react-icons/ti";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Sidebar() {
    const [activeTab, setActiveTab] = useState(null);

    const tabs = [
        { id: "dashboard", label: "Dashboard", to: "/admin", icon: <MdDashboard /> },
        { id: "clients", label: "Clients", to: "/admin/clients", icon: <FaUsers /> },
        { id: "bookings", label: "Bookings", to: "/admin/bookings", icon: <FaCar /> },
        { id: "allCars", label: "All Cars", to: "/admin/allcars", icon: <MdCarRental /> },
        { id: "addCar", label: "Add Car", to: "/admin/addcar", icon: <MdLibraryAdd /> },
        { id: "messages", label: "Messages", to: "/admin/messages", icon: <TiMessages /> },
        { id: "calendar", label: "Calendar", to: "/admin/calendar", icon: <SlCalender /> },
        { id: "logout", label: "Logout", to: "/login", icon: <CgLogOut /> },
    ];

    return (
        <div className="bg-[#0a5ff381] w-[25vw] h-[100vh] shadow-xl">
            <div className="flex items-center justify-center pt-2">
                <Logo height={80} width={200} />
            </div>

            <div>
                {tabs.map((tab) => (
                    <Link
                        key={tab.id}
                        to={tab.to}
                        onClick={() => setActiveTab(tab.id)}
                        className={`mt-2 flex pl-7 items-center gap-5 p-4 text-lg font-semibold text-white w-full ${
                            activeTab === tab.id
                                ? "bg-yellow-200 text-black"
                                : "bg-blue-500 hover:bg-yellow-200"
                        }`}
                    >
                        {tab.icon}
                        {tab.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
