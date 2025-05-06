import React from "react";
import MainSection from "../Components/MainSection";
import About from "../Components/AboutUs";
import Card from "../Components/Card";
import FAQ from "../Components/FAQ";

function Index() {
    const cardItem = [
        {
            id: 1,
            imgUrl: "src/Images/maruti.jpg",
            btnText: "Booking",
            head: "Book a Ride :",
            desc: "Book your car effortlessly and travel with ease — whether it's a city drive or a road trip",
        },
        {
            id: 2,
            imgUrl: "src/Images/toyota.jpg",
            btnText: "Rental",
            head: "Rent a Car  :",
            desc: "Your Way Choose from a variety of cars, rent with ease, and enjoy a smooth, hassle-free journey",
        },
        {
            id: 3,
            imgUrl: "src/Images/bus.jpg",
            btnText: "Reservation",
            head: "Reserve Your Ride Instantly  :",
            desc: "Select your car, confirm your reservation, and enjoy a seamless travel experience!",
        },
        {
            id: 4,
            imgUrl: "src/Images/maruti.jpg",
            btnText: "Booking",
            head: "Book a Ride :",
            desc: "Book your car effortlessly and travel with ease — whether it's a city drive or a road trip",
        },
        {
            id: 5,
            imgUrl: "src/Images/toyota.jpg",
            btnText: "Rental",
            head: "Rent a Bus :",
            desc: "Your Way Choose from a variety of cars, rent with ease, and enjoy a smooth, hassle-free journey",
        },
        {
            id: 6,
            imgUrl: "src/Images/bus.jpg",
            btnText: "Reservation",
            head: "Reserve Your Ride Instantly  :",
            desc: "Select your car, confirm your reservation, and enjoy a seamless travel experience!",
        },
    ];

    const imageUrl = "src/Images/blueCar.jpg";
    const heading = "Car Rental - Search, Compare & Save";
    const subheading = "Your Journey, Your Car, Your Way";
    const features = [
        { name: "Free Cancellations on most bookings" },
        { name: "50+ locations." },
        { name: "Customer support in 10+ languages." },
    ];

    return (
        <>
            <MainSection imgUrl={imageUrl} heading={heading} subheading={subheading} features={features} />
            <h1 className="text-center mt-4 text-2xl font-bold"> Our Services</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-2 text-center m-4 gap-2">
                {cardItem.map((card) => {
                    return <Card key={card.id} imgUrl={card.imgUrl} btnText={card.btnText} head={card.head} desc={card.desc} />;
                })}
            </div>
            <About />
            <FAQ/>
        </>
    );
}
export default Index;
