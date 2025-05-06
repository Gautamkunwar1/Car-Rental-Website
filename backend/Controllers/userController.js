import { sendResponse } from "../utils/response.util.js"
import User from "../model/userSchema.js";

export const allUsers = async(req,res)=>{
    try {
        const users = await User.find();
        return sendResponse(res,200,true,"data found successfully",users)
    } catch (error) {
        return sendResponse(res,500,false,"Server Error");
    }
}