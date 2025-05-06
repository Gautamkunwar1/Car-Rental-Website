import React from "react";

export default function BlogPost({imgUrl,heading,userPic,username,date,desc}){
    return(
        <>
        <div className="mt-5 w-[70vw] mb-15">
            <div>
                <img src={imgUrl} alt="can't load" />
            </div>
            <div>
                <h1 className="text-3xl font-medium p-3 ml-2">{heading}</h1>
                <div className="flex items-center gap-5 pl-5">
                    <img src={userPic} alt="can't load" className="h-[50px] w-[60px] rounded-[50%]"/>
                    <h1>{username}</h1>
                    <h2>{date}</h2>
                </div>
                <p className="pl-5">{desc}</p>
                <button className="ml-5 mt-3 p-2 rounded-lg font-semibold bg-blue-600 text-white cursor-pointer">Read More</button>
            </div>
        </div>
        </>
    )
}