import React, { useState } from "react";
import addCarApi from '../api/addCarApi'

export default function AddCar() {
    const [formData, setFormData] = useState({
        name: '',
        carNo: '',
        desc: '',
        rent: '',
        availability: '',
        image:'',
    });

    const [errors, setErrors] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("Car details submitted successfully");

        const newErrors = validateForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setFormData({
                name: '',
                carNo: '',
                desc: '',
                rent: '',
                availability: '',
                image:'',
            });
            await addCarApi(formData); 
        }
    }

    function validateForm(data) {
        const errors = {};
        if (!data.name.trim()) {
            errors.name = "Car name is required";
        } else if (data.name.length < 4) {
            errors.name = "Car name must be at least 4 characters long";
        }

        if (!data.desc.trim()) {
            errors.desc = "Description field cannot be empty";
        } else if (data.desc.length < 10) {
            errors.desc = "Description should be at least 10 characters long";
        }

        if (!data.carNo || data.carNo.length !== 10) {
            errors.num = "Car number should be of 10 digits";
        }

        if (!data.rent) {
            errors.rent = "Rent field cannot be empty";
        }
        if(!data.image){
            errors.image = "Image Url field can't set be empty"
        }

        return errors;
    }

    return (
        <>
            <div>
                <h1 className="text-center font-semibold text-2xl underline mt-5 mb-2">Add Car</h1>
                <div className="bg-blue-200 mx-auto w-[70vw]">
                    <form action="" className="p-6 shadow-2xl" onSubmit={handleSubmit}>
                        <label htmlFor="name">Car Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Car name"
                            className="bg-white outline-0 w-full p-2 mb-1"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <span className="text-red-500">{errors.name}</span><br />

                        <label htmlFor="carNo">Car Number:</label>
                        <input
                            type="text"
                            name="carNo"
                            id="carNo"
                            placeholder="Enter Car number"
                            className="bg-white outline-0 w-full p-2 mb-1"
                            value={formData.carNo}
                            onChange={handleChange}
                        />
                        <span className="text-red-500">{errors.num}</span><br />

                        <label htmlFor="desc">Description:</label>
                        <textarea
                            name="desc"
                            id="desc"
                            placeholder="Enter Car Description"
                            className="bg-white outline-0 w-full p-2 mb-1"
                            value={formData.desc}
                            onChange={handleChange}
                        ></textarea>
                        <span className="text-red-500">{errors.desc}</span><br />

                        <label htmlFor="rent">Rent:</label>
                        <input
                            type="text"
                            id="rent"
                            name="rent"
                            placeholder="Enter rent"
                            className="bg-white outline-0 w-full p-2 mb-2"
                            value={formData.rent}
                            onChange={handleChange}
                        />
                        <span className="text-red-500">{errors.rent}</span><br />

                        <label htmlFor="image">ImageUrl:</label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            placeholder="Enter url of Image"
                            className="bg-white outline-0 w-full p-2 mb-2"
                            value={formData.image}
                            onChange={handleChange}
                        />
                        <span className="text-red-500">{errors.rent}</span><br />

                        <input
                            type="submit"
                            value="Submit"
                            className="w-full bg-[#7179eba4] hover:bg-[#7179eb] text-white p-2 mt-3 cursor-pointer"
                        />
                    </form>
                </div>
            </div>
        </>
    );
}
