import CarDetail from "../model/carDetail.js";
import { sendResponse } from "../utils/response.util.js";

export const allCars = async(req,res)=>{
    try {
        const allCars = await CarDetail.find();
        return sendResponse(res,200,true,"data founded successfully",allCars)
    } catch (error) {
        return sendResponse(res,500,false,"Server Error")
    }
}