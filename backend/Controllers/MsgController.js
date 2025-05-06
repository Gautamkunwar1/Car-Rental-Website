import Msg from "../model/messageSchema.js";
import { sendResponse } from "../utils/response.util.js";

export const addMsg = async(req,res)=>{
    const{name,email,msg} = req.body;
    if(!name || !email ||!msg) return sendResponse(res,400,false,"All fields are required");
    if(name.length <4) return sendResponse(res,400,false,"Name should be of atleast 4 characters")
        try {
            const newMsg = await Msg.create({
                name,
                email,
                msg
            });
            return sendResponse(res,201,true,"Message sent successfully",newMsg);
        } catch (error) {
            console.error(`Error in addMsg Controller:${error.message}`)
            return sendResponse(res,500,false,"Server Error")
        }
}

export const getAllMsg = async (req, res) => {
    try {
        const allMsg = await Msg.find();
        return sendResponse(res, 200, true, "Data found successfully", allMsg);
    } catch (error) {
        return sendResponse(res, 500, false, "Server Error");
    }
};