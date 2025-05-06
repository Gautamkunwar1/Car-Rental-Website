import jwt from "jsonwebtoken";
import User from "../model/userSchema.js";
import { sendResponse } from "../utils/response.util.js";

const createToken = async (userId)=>{
    const token =  jwt.sign({userId}, process.env.JWT_SECRET_KEY, {expiresIn:"7d"})
    return token;
}

const setCookies = async(res, refreshToken)=>{
    res.cookie("refreshToken", refreshToken, {
        httpOnly:true,
        secure:process.env.NODE_ENV === "production",
        sameSite:"strict",
        maxAge:7 * 24 * 60  * 60 * 1000
    })
}

export const signup = async (req, res) => {
    const { email, password, name } = req.body;
    const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/

    if (!email || !password || !name) return sendResponse(res, 400, false, "All fields are required");

    if (!emailRegx.test(email)) return sendResponse(res, 400, false, "Please provide a valid email");

    if (password.length < 6) return sendResponse(res, 400, false, "Password must be at least 6 characters long")

    if (!passwordRegx.test(password)) return sendResponse(res, 400, false, "Password  must contain at least one digit and one uppercase character")
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) return sendResponse(res, 404, false, "Email is already in use")
        const newUser = await User.create({
            name,
            email,
            password
        })
        return sendResponse(res, 200, true, "User added successfully", {name, email})

    } catch (error) {
        console.error(`Error in signup controller : ${error.message} `)
        return sendResponse(res, 500, false, "Internal server error")
    }
};

export const login = async (req, res) => {
    const {email, password } = req.body;
    if(!email || !password) return sendResponse(res, 400, false, "Invalid credentials")
    try {
    const user  = await User.findOne({email})
    if(!user) return sendResponse(res, 401, false,"Invalid credentials" )
    const isAuthenticated = await user.comparePassword(password)
    if(!isAuthenticated) return sendResponse(res, 400, false, "Invalid credentials");
    const token =  await createToken(user._id)
    await setCookies(res, token)
    const data = {
        id:user._id,
        name:user.name,
        email:user.email,
        role:user.role,
        cartItem:user.cartItem,
    }
    return sendResponse(res, 200, true, "LoggedIn successfully", data);
    } catch (error) {
        console.error(`Error in login controller : ${error.message} `)
        return sendResponse(res, 500, false, "Internal server error")
    }
};

export const logout = async (req,res) => {
    res.clearCookie("refreshToken",{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite:"strict"
    })
    return sendResponse(res,200,true,"Logged out successfully")
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }
        return res.status(200).json({ message: "user deleted successfully" })
    } catch (error) {
        console.error(`Error:${error}`);
        return res.status(500).json({ message: "Server Error" })
    }
};