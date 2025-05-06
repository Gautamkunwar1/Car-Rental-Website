import CarDetail from '../model/carDetail.js';
import { sendResponse } from '../utils/response.util.js';

export const addCar = async (req, res) => {
    const { name, carNo, desc, rent,image } = req.body;

    const carNoRegex = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;
    if (!name || !carNo || !desc || !rent) return sendResponse(res, 400, false, "All fields are required");
    if (name.length < 4) return sendResponse(res, 400, false, "Name should be at least 4 characters");
    if (!carNoRegex.test(carNo)) return sendResponse(res, 400, false, "Please provide a valid car number");
    if (carNo.length !== 10) return sendResponse(res, 400, false, "Car number should be exactly 10 characters");

    try {
        const existingCar = await CarDetail.findOne({ carNo });
        if (existingCar) return sendResponse(res, 400, false, "Car number already exists");

        const newCar = await CarDetail.create({
            name,
            carNo,
            desc,
            rent,
            image,
        });

        return sendResponse(res, 201, true, "New car details added successfully", newCar);
    } catch (error) {
        console.error(`Error in AddCarController: ${error.message}`);
        return sendResponse(res, 500, false, "Server error");
    }
};
