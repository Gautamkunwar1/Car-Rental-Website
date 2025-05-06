export const addMsgApi = async(formdata)=>{
    try {
        const response = await fetch('http://localhost:5000/api/msg/addMsg',
            {
                method:"POST",
                headers:{
                    'Content-Type':'application.json'
                },
                body:JSON.stringify(formdata)
            })
            const responseData = await response.json();
            if(response.ok){
                console.log("Messsage added successfully",responseData);
            }else{
                console.error(`Error :${responseData.message}`)
            }
    } catch (error) {
        console.error(`Network error.Please tyr again later`)
    }
}

export const getMsgApi = async()=>{
    try {
        const response = await fetch("http://localhost:5000/api/msg/getAllMsg",
            {
                method:"GET",
                headers:{
                    'Content-Type':'application/json'
                },
                credentials:"include"
            }
        );
        const responseData = await response.json();
        if(!response.ok){
            console.log("Something went wrong");
            return [];
        }
        return responseData.data
    } catch (error) {
        console.error("Network error",error);
        return [];
    }
}
