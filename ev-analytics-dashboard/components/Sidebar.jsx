"use client"
import { useState } from 'react';

export default function Sidebar() {
    const [selectedFilters, setSelectedFilters] = useState({});

    const handleFilterChange = (e) => {
        setSelectedFilters({
            ...selectedFilters,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <aside className="fixed top-0 left-0 w-64 h-screen bg-[#A2B8BB] text-black">
            <div className="p-4 mt-[80%] ">
                <h2 className="text-2xl font-bold text-center">Filters</h2>
                <hr className='w-full p-0 text-black' />
                <div className="mt-6">
                    <label className="flex mb-1 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                        </svg>
                        Manufacturer
                    </label>

                    <select
                        name="make"
                        onChange={handleFilterChange}
                        className="bg-[#617779] w-full p-2 rounded h-14"
                    >
                        <option value="">All</option>
                        <option value="TESLA">Tesla</option>
                        <option value="NISSAN">Nissan</option>
                        <option value="BMW">BMW</option>
                    </select>


                    <label className="flex mb-1 mt-6 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                        </svg>
                        Country</label>
                    <select
                        name="make"
                        onChange={handleFilterChange}
                        className="bg-[#617779] w-full p-2 rounded h-14"
                    >
                        <option value="">All</option>
                        <option value="TESLA">Tesla</option>
                        <option value="NISSAN">Nissan</option>
                        <option value="BMW">BMW</option>
                    </select>


                    <label className="flex mb-1 mt-6 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        City</label>
                    <select
                        name="make"
                        onChange={handleFilterChange}
                        className="bg-[#617779] w-full p-2 rounded h-14"
                    >
                        <option value="">All</option>
                        <option value="TESLA">Tesla</option>
                        <option value="NISSAN">Nissan</option>
                        <option value="BMW">BMW</option>
                    </select>


                </div>
                {/* Add more filters as needed */}
            </div>
        </aside>
    );
}
