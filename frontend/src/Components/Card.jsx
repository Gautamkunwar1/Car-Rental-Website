import React from "react";

function Card({imgUrl,title,head,desc,btnText}){

    console.log(imgUrl)
    return(
        <>
            {/* Card */}
            <div className="shadow-lg ml-2 mb-3 bg-blue-50 border-1 border-red-200">
                {/* ImageBox */}
                <div className="pt-5">
                    <img src={imgUrl}  alt="img can't load" />
                </div> 

                {/* TextBox */}
                <div className="pt-4">
                    <p>
                        <h1 className="text-xl pb-2 font-medium">{title}</h1>
                        <b>{head}</b>
                        {desc}
                    </p>
                </div>
                <button className="bg-blue-400  text-white w-[150px] h-10 rounded-lg mb-5 mt-2 font-bold cursor-pointer">{btnText}</button>
            </div>
        </>
    )
}
export default Card;



