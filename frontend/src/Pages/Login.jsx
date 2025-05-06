import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../store/useUserStore";

function Login() {
    const [userEmail, setUseremail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
const {login, user} =    useUserStore()
const navigate = useNavigate()



    const loginUser = async (e) => {
        e.preventDefault();
        const data = { email: userEmail, password };
        const {success} =  await login(data)
        if(success){
            user.role === "admin" ? navigate("/admin") :navigate("/");
        }
    };
    
    return (
        <>
            <div className="bg-[url(src/Images/blueCar.jpg)] bg-center bg-no-repeat bg-cover flex justify-center items-center h-[60vh]">
                <form onSubmit={loginUser} className="flex justify-center items-center h-[80%] w-[40%] bg-[#20202063] border-1 shadow-2xl text-white">
                    <div className="w-full p-7 mb-5 mt-5">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Enter Email" value={userEmail} onChange={(e) => setUseremail(e.target.value)}
                            className="bg-white p-1.5 w-full mb-2 outline-0 text-black" required />

                        <label htmlFor="password">Password:</label>
                        <div className="flex justify-between items-center pr-4 mb-2 bg-white">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-white p-1.5 w-full text-black outline-0"
                                required
                            />
                            <span
                                className="text-gray-400 cursor-pointer opacity-50 ml-2"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <input
                            type="submit"
                            value="Login"
                            className="w-full bg-green-500 text-white font-bold mt-5 p-2 rounded-lg hover:bg-green-800 cursor-pointer"
                        />
                        <p className="text-center mt-3">
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-white ">Sign Up</Link>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
