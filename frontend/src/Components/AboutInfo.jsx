import React from "react";

function AboutInfo({head,desc,imgUrl}){
        return(
            <>
            <div className="flex  shadow-2xl bg-blue-100 mb-5 gap-5">
                <div className="pl-5 m-5">
                    <h1 className="text-xl font-semibold pb-2">{head}</h1>
                    <p className="pb-3">{desc}</p>
                    <button className="bg-blue-400 p-2 text-white font-bold cursor-pointer">Learn More</button>
                </div>
                
                <div className="w-full p-3">
                    <img src={imgUrl} alt="" />
                </div>
                
            </div>
            </>
        )
    }
    
export default AboutInfo;