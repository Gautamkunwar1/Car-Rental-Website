import React from "react";
import AboutUs from "../Components/AboutUs";
import Section from "../Components/Section";
import AboutInfo from "../Components/AboutInfo";

function About() {
    const aboutData = [
        {
            id:"1",
            head:"Sustainability",
            desc:"we are committing to becoming a fully electric, zero-emission platform by 2040, with 100% of rides taking place in zero-emission vehicles, on public transit, or with micromobility. It is our responsibility as the largest mobility platform in the world to more aggressively tackle the challenge of climate change. We will do this by offering riders more ways to ride green, helping drivers go electric, making transparency a priority and partnering with NGOs and the private sector to help expedite a clean and just energy transition",
            imgUrl:"src/Images/Sustainability.jpg"
        },
        {
            id:"2",
            head:"Safety",
            desc:" It is our responsibility as the largest mobility platform in the world to more aggressively tackle the challenge of climate change. We will do this by offering riders more ways to ride green, helping drivers go electric, making transparency a priority and partnering with NGOs and the private sector to help expedite a clean and just energy transition",
            imgUrl:"src/Images/safety.jpg"
        }
    ]
    return (
        <>
            <Section 
                imgUrl={"src/Images/menCar.jpg"} 
                heading={"Home >> About Us"} 
                features={[]} 
                subheading={"Explore your destination with ease – rent a car today and hit the road in style!"} 
            />
            <div className="bg-blue-400 h-10 text-white">
                <p className="text-center text-3xl mt-5 font-bold decoration-dashed">About us</p>
            </div>
            <AboutUs />

            {aboutData.map((item)=>{
            return (
            <AboutInfo key={item.id} head={item.head} desc={item.desc} imgUrl={item.imgUrl}/>
            )
            })}
        </>
    );
}

export default About;


