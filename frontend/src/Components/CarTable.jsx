import React, { useEffect, useState } from "react";
import TableRow from "./tableRow";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { allCarApi } from "../api/allCarApi";

export default function CarTable() {
    const tableHeader = ["CarName", "CarNo.", "Desc", "Rent", "Availability","Date","Action"];
    const [tableRowData, setTableRowData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const cars = await allCarApi();
            setTableRowData(cars);
        };
        fetchData();
    }, []);

    return (
        <table className="border-collapse border border-blue-500 w-full mt-5">
            <thead>
                <tr className="text-center bg-gray-100">
                    {tableHeader.map((head, index) => (
                        <th key={index} className="border border-blue-400 px-4 py-2">
                            {head}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-[#cad9f371] shadow-xl">
                {tableRowData.map((row) => (
                    <TableRow
                        key={row._id}
                        td1={row.name}
                        td2={row.carNo}
                        td3={row.desc}
                        td4={row.rent}
                        td5={row.availability}
                        td6={new Date(row.createdAt).toLocaleDateString()}
                        td7={<span className="flex gap-4 text-lg cursor-pointer"><FiEdit /> <FaTrashAlt /></span>}
                    />
                ))}
            </tbody>
        </table>
    );
}
