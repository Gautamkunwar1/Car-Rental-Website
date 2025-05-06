import React from "react";
import { FaCar, FaRupeeSign } from "react-icons/fa";
import { MdCarRental, MdEventAvailable } from "react-icons/md";
import DateCalendarValue from "../Components/Calender";
import CardDashboard from "../Components/CardDashboard";
import BarsDataset from "../Components/BarChart";


function Admin() {
    const cards = [
        { id: "revenue",symbol:<FaRupeeSign />, heading: "Total Revenue", detail: "₹8,450", growth:"5% this month" },
        { id: "bookings",symbol:<FaCar />, heading: "Total Bookings", detail: "15",growth:"20% this month"  },
        { id: "rent",symbol:<MdCarRental />, heading: "Rented Cars", detail: "20",growth:"15% this month" },
        { id: "available",symbol:<MdEventAvailable />, heading: "Available Cars", detail: "45",growth:"5% this quarter"  },
    ];

    return (
        <>
            <div className="flex">

                <div className="flex flex-col w-[75vw] h-[89vh] bg-[#cad9f371]">
                    <div className="flex gap-4 p-4 mt-4">
                        {cards.map((card) => (
                            <CardDashboard key={card.id} id={card.id} symbol={card.symbol} head={card.heading} detail={card.detail} growth={card.growth}/>
                        ))}
                    </div>

                    <div className="mt-5 flex gap-12 items-center">
                        <div className="w-full"><BarsDataset/></div>
                        <div className="bg-[#bfdcf0d0]">
                            <DateCalendarValue/>
                        </div>
                        </div>
                </div>
            </div>
        </>
    );
}

export default Admin;

