export const allCarApi = async()=>{
    try {
        const response = await fetch ('http://localhost:5000/api/car/getCar',{
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            },
            credentials:"include",
        });
        const responseData = await response.json();
        if(!response.ok){
            console.log("Something went wrong")
            return [];
        }
        return responseData.data
    } catch (error) {
        console.error("Network error",error);
        return[];
    }
}