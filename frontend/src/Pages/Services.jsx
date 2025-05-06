import React from "react";
import Section from "../Components/Section";
import Card from "../Components/Card";
function Services() {
    const cardItem = [
        {
            id: 1,
            imgUrl: "src/Images/maruti.jpg",
            title: "Maruti Suzuki(4 Seater)",
            head: "",
            desc: "Book your car effortlessly and travel with ease — whether it's a city drive or a road trip",
        },
        {
            id: 2,
            imgUrl: "src/Images/toyota.jpg",
            title: "Toyata (7 Seater)",
            head: "",
            desc: "Your Way Choose from a variety of cars, rent with ease, and enjoy a smooth, hassle-free journey",
        },
        {
            id: 3,
            imgUrl: "src/Images/bus.jpg",
            title: "Bus(18 Seater)",
            head: "",
            desc: "Select your car, confirm your reservation, and enjoy a seamless travel experience!",
        },
        {
            id: 4,
            imgUrl: "src/Images/maruti.jpg",
            title: "Maruti Suzuki(4 Seater)",
            head: "",
            desc: "Book your car effortlessly and travel with ease — whether it's a city drive or a road trip",
        },
        {
            id: 5,
            imgUrl: "src/Images/toyota.jpg",
            title: "Toyota (7 Seater)",
            head: "",
            desc: "Your Way Choose from a variety of cars, rent with ease, and enjoy a smooth, hassle-free journey",
        },
        {
            id: 6,
            imgUrl: "src/Images/bus.jpg",
            title: "Bus (18 Seater)",
            head: "",
            desc: "Select your car, confirm your reservation, and enjoy a seamless travel experience!",
        },
    ];
    return (
        <>
            <Section imgUrl={"src/Images/safety.jpg"}
                heading={"Home >> Service"}
                features={[]}
                subheading={"Your one-stop car rental service, offering convenient online bookings and a wide range of vehicles for every travel need."} />

            <h1 className="text-center text-2xl font-semibold">Available Cars And Buses </h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-center m-4 gap-2">
                {cardItem.map((card) => {
                    return <Card key={card.id} imgUrl={card.imgUrl} title={card.title} head={card.head} desc={card.desc} btnText={"Book Now"}/>
                })}
            </div>
        </>
    )
}
export default Services;