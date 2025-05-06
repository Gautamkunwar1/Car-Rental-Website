const addCarApi = async (carData) => {
    try {
        const response = await fetch('http://localhost:5000/api/car/addCar', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carData)
        });

        console.log(response);
        const responseData = await response.json();

        if (response.ok) {
            console.log("Car added successfully", responseData);
        } else {
            console.error(`Error: ${responseData.message}`);
        }
    } catch (error) {
        console.error("Form: Network error, Please try again later", error);
    }
};

export default addCarApi;