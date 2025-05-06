export const signupApi = async(userData)=>{
    try{
    const response= await fetch('http://localhost:5000/api/auth/signup',{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
        },
        body : JSON.stringify(userData),
    });
    console.log(response)
    const responseData = await response.json();
    if(response.ok){
        console.log("User Created",responseData);
    }else{
        console.error(`Error :${error}`)
    }
}catch(error){
    console.error("form: 'Network error. Please try again later.'");
}
}

export const loginApi = async(userData)=>{
    try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData),
            credentials: "include",
        });

        const responseData = await response.json();

        if (!response.ok) {
            console.log("Invalid user details");
        
        }
        set({user:responseData.data})
        return responseData
    } catch (error) {
        console.error("Network error:", error);
    }
}

export const logoutApi = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/auth/logout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include", 
        });

        if (!response.ok) {
            console.log("Something went wrong while logging out");
        } else {
            set({ user: null });
            console.log("User logged out successfully");
        }
    } catch (error) {
        console.error("Network error:", error);
    }
}