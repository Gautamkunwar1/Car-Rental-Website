import { create } from "zustand";
// import { loginApi,logoutApi,signupApi } from "../api/userAuthApi.js";

const useUserStore = create((set)=>({
    user:null,
    loading:true,
    emailError:"",
    signup:async(userData)=>{
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
                setErrors({form:response.message})
            }
        }catch(error){
            setErrors({ form: "Network error. Please try again later." });
        }
    },
    login:async(userData)=>{
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
    },
    logout: async () => {
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
    
}))

export default useUserStore