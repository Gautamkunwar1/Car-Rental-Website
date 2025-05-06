import React from 'react'
import CarTable from '../Components/CarTable';
import { TiExport } from "react-icons/ti";

function AllCar() {

    return (
        <>
        <div className='flex justify-between items-center text-center text-bold pt-2 bg-blue-400 h-15 text-white'>
        <h1 className='text-xl font-bold pl-7'>All Cars List List</h1>
        <h2 className='flex items-center gap-2 pr-7 cursor-pointer'><TiExport /></h2>
        </div>
        <div className='w-[70vw] mx-auto'>
            <CarTable  />
        </div>
        </>
    )
}

export default AllCar;
