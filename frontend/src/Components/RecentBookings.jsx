import React from "react";
import TableRow from "./tableRow";
import { TiExport } from "react-icons/ti";

function RecentBookings() {
    const tableData = [
        {id:"EN1231480",name:"Maruti Suzuki",status:"done",date:"26 April 2025",amount:5000},
        {id:"EN1234565",name:"Toyota Fortuner",status:"done",date:"28 April 2025",amount:7000},
        {id:"EN1504545",name:"Alto 800",status:"pending",date:"01 May 2025",amount:4000},
        {id:"EN1501476",name:"Maruti Suzuki",status:"done",date:"06 May 2025",amount:5000},
    ]
    return (
        <>
        <div className='flex justify-between items-center text-center text-bold pt-2 bg-blue-400 h-15 text-white'>
                <h1 className='text-xl font-bold pl-7'>All Booking Details</h1>
                <h2 className='flex items-center gap-2 pr-7 cursor-pointer'><TiExport /></h2>
                </div>
            <table className="w-full border border-black border-collapse  mt-3 bg-[#cad9f371] shadow-2xl">
                <thead>
                    <tr>
                        <th className="border border-blue-400 px-4 py-2 bg-gray-100">Booking Id</th>
                        <th className="border border-blue-400 px-4 py-2 bg-gray-100">Car</th>
                        <th className="border border-blue-400 px-4 py-2 bg-gray-100">Payment Status</th>
                        <th className="border border-blue-400 px-4 py-2 bg-gray-100">Date</th>
                        <th className="border border-blue-400 px-4 py-2 bg-gray-100">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row)=>{
                        return <TableRow td1={row.id} td2={row.name} td3={row.status} td4={row.date} td5={row.amount}/>
                    })}
                </tbody>
            </table>
        </>
    );
}

export default RecentBookings;
