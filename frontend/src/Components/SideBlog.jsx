import React from "react";

function SideBlog({heading,imgUrl,desc,date}){
    return(
        <>
        <div className="border-1 shadow-xl h-[10%] mt-5 w-[25vw]">
            <h1 className="text-center text-lg font-bold">{heading}</h1>
            <div className="flex w-[25vw] mt-5">
                <div className="w-[70%]">
                    <img src={imgUrl} alt="" />
                </div>
                <div className="w-full">
                    <p className="line-clamp-4">{desc}</p>
                    <p className="text-right font-medium text-sm pr-5">{date}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default SideBlog;