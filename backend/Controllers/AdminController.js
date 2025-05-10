import User from '../model/userSchema.js';
import Car from  "../model/carDetail.js"
export const deleteUser = async(req,res)=>{
    const {id} = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if(deletedUser){
            return res.status(201).json({message:"User deleted Successfully"});
        }else{
            return res.status(400).json({message:"User not found"})
        }
    } catch (error) {
        return res.status(500).json({message:"Server Error",error:error.message})
    }
}

export const deleteCar = async(req,res)=>{
    const {id } = req.params;
    try {
        const deletedCar = await Car.findByIdAndDelete(id);
        if(deletedCar){
            return res.status(201).json({message:"Car deleted successfully"});
        }else{
            return res.status(400).json({message:"Car not found"});
        }
    } catch (error) {
        return res.status(500).json({message:"Server Error",error:error.message})
    }
}