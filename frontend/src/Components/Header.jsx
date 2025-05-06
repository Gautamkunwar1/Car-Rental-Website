import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBox from "./SearchBox";
import useUserStore from "../store/useUserStore";

export default function Header() {
    const { user, logout } = useUserStore();
    const navigate = useNavigate();

    const navLinks = [
        { name: "Home", to: "/" },
        { name: "About Us", to: "/about" },
        { name: "Services", to: "/service" },
        { name: "Blog", to: "/blog" },
        { name: "Contact", to: "/contact" },
        { name: "Rental List", to: "/rentalcart" },
        { name: "My Bookings", to: "/bookcart" },
    ];

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="bg-blue-700 xl:flex justify-around items-center sticky z-10 top-0">
            <div className="flex justify-between items-center">
                <div className="block min-[740px]:hidden pl-5 text-white cursor-pointer" onClick={toggleHamburger}>
                    <RxHamburgerMenu size={30} />
                </div>
                <div className="pt-1">
                    <Logo height={50} width={200} />
                </div>
                <SearchBox />
            </div>
            <div>
                <ul className={`min-[740px]:flex min-[740px]:pl-5 gap-6.5 pt-2 text-white font-medium absolute bg-blue-700 w-full min-[740px]:static h-screen min-[740px]:h-auto min-[740px]:pb-4 max-[740px]:pl-5 ${hamburgerOpen ? 'block' : 'hidden'}`}>
                    {navLinks.map((Item) => (
                        <li key={Item.name} className="xl:hover:text-yellow-300 hover:font-bold cursor-pointer">
                            <Link to={Item.to}>{Item.name}</Link>
                        </li>
                    ))}
                    {user ? (
                        <span className="flex text-yellow-200 cursor-pointer font-bold gap-1">
                            <li>Welcome, {user.name}</li>
                            <li onClick={handleLogout}>/Logout</li>
                        </span>
                    ) : (
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}
