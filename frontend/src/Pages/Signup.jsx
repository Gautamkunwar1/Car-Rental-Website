import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useUserStore from "../store/useUserStore";


function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: '',
    });

    const {signup}  = useUserStore()

    const [errors, setErrors] = useState({});
    const [showPassword,setShowPassword] = useState(false);
    const[cShowPassword,cSetShowPassword] = useState(false);
    

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value, });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("submitted")
        const newErrors = validateForm(formData);
        setErrors(newErrors);
        if (Object.keys(newErrors).length == 0) {
            submitFormData(formData);
            setFormData({
                name: '',
                email: '',
                password: '',
                cpassword: '',
            })
        }
    }


    //frontend to backend connectivity
    async function submitFormData(data){
        signup(data)
    }

    function validateForm(data) {

        const errors = {};
        const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
        if (!data.name.trim()) {
            errors.name = "name is required";
        } else if (data.name.length < 4) {
            errors.name = "name must be of atleast 4 words";
        }

        if (!data.email.trim()) {
            errors.email = "Email field can't be empty"
        } else if (!emailRegx.test(data.email)) {
            errors.email = "Email must content atleast one upperCase letter, one number,and @"
        }

        if (!data.password.trim()) {
            errors.password = "Password is required"
        } else if (!passwordRegx.test(data.password)) {
            errors.password = "Password must content atleast one upperCase letter, one number,and one special character"
        }

        if (data.cpassword !== data.password) {
            errors.cpassword = "Password do not match"
        }

        return errors;
    };

    return (
        <>
            <div className="bg-[url(src/Images/blueCar.jpg)] bg-center bg-no-repeat bg-cover flex justify-center items-center h-[75vh]">
                <form action="" className="flex justify-center items-center h-[90%] w-[40%] bg-[#20202063] border-1 shadow-2xl text-white" onSubmit={handleSubmit}>
                    <div className=" w-full p-7 mb-5 mt-5">

                        <label htmlFor="name">Name:</label>
                        <input type="text" className="bg-white p-1.5 pl-2 w-full mb-2 outline-0 text-black" name="name" id="name" placeholder="Enter name" value={formData.name} onChange={handleChange} />
                        <span className="text-red-500">{errors.name}</span><br />

                        <label htmlFor="email">Email:</label>
                        <input type="email" className="bg-white p-1.5 pl-2 w-full mb-2 outline-0 text-black" name="email" id="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
                        <span className="text-red-500">{errors.email}</span><br />

                        <label htmlFor="password">Password:</label>
                        <div className="flex justify-between items-center pr-4 mb-2 bg-white">
                        <input type={showPassword?"text":"password"} className="bg-white w-full outline-0 p-1 pl-2 mb-1 text-black" name="password" id="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} />
                        <span className="text-gray-400 cursor-pointer opacity-50" onClick={() => setShowPassword(!showPassword)}>{showPassword?<FaEyeSlash />:<FaEye/>}</span>
                        </div>
                        <span className="text-red-500">{errors.password}</span>

                        <label htmlFor="Cpassword">Confirm Password:</label>
                        <div className="flex justify-between items-center bg-white pr-4 mb-2">
                        <input type={cShowPassword?"text":"password"} className="bg-white p-1 w-full outline-0 pl-2 mb-1 text-black" name="cpassword" id="cpassword" placeholder="Confirm Password" value={formData.cpassword} onChange={handleChange} />
                        <span className="text-gray-400 cursor-pointer opacity-50" onClick={()=>cSetShowPassword(!cShowPassword)}>{cShowPassword?<FaEyeSlash />:<FaEye/>}</span>
                        </div>
                        <span className="text-red-500">{errors.cpassword}</span>

                        <input type="submit" className="w-full bg-green-500 text-white font-bold mt-3 p-2 rounded-lg hover:bg-green-800 cursor-pointer"/>
                        <p className="text-center">Already have an account?<Link to="/login">Sign In</Link></p>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Signup;