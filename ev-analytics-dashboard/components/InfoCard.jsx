"use client"

import React, { useContext, useMemo } from 'react'
import { MainContext } from './ContextApi/MainContext'
import { getProducedInYear } from '@/GlobalFunctions/HelperFunctions'
import { dataset } from '@/DataSet'

const InfoCard = () => {

    const mainContext = useContext(MainContext)

    const data = useMemo(() => {
        const totalEvArr = getProducedInYear()
        const totalEv = totalEvArr[totalEvArr?.length - 1]?.count
        return (
            [
                {
                    name: 'Total EVs in 2024',
                    value: totalEv,
                    svg: <svg width="25" height="25" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M51 25.3108H56.25C56.7675 25.3108 57.1875 25.7289 57.1875 26.2483V28.1233C57.1875 28.6408 56.79 29.192 56.2969 29.357" stroke="black" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.1875 50.6233V55.3108C12.1875 56.3458 11.3494 57.1858 10.3125 57.1858H6.5625C5.52563 57.1858 4.6875 56.3458 4.6875 55.3108V50.6233" stroke="black" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M55.3125 49.6858V55.3108C55.3125 56.3458 54.4744 57.1858 53.4375 57.1858H49.6875C48.6506 57.1858 47.8125 56.3458 47.8125 55.3108V49.6858" stroke="black" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 25.3108H3.75C3.2325 25.3108 2.8125 25.7289 2.8125 26.2483V28.1233C2.8125 28.6408 3.21 29.192 3.70313 29.357" stroke="black" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.70459 31.8808L10.5058 19.2433C11.0065 16.9933 12.8177 15.2664 15.0958 14.9064C16.6915 14.657 18.6733 14.4152 21.619 14.2539" stroke="black" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M39.313 14.3083C41.7561 14.4677 43.4849 14.6852 44.9024 14.9065C47.1805 15.2665 48.9936 16.9933 49.4924 19.2433L52.2936 31.8827" stroke="black" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M55.3125 49.6858H4.6875C3.65063 49.6858 2.8125 48.8458 2.8125 47.8108V45.9358H57.1875V47.8108C57.1875 48.8458 56.3494 49.6858 55.3125 49.6858Z" stroke="black" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.8125 41.2483V36.5608C2.8125 31.052 9.53063 30.9358 30 30.9358C50.4694 30.9358 57.1875 31.0539 57.1875 36.5608V40.6633" stroke="black" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M57.1875 36.5608V42.1858H45.9375V38.4358C45.9375 37.3989 46.7756 36.5608 47.8125 36.5608H53.4375" stroke="black" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.5625 36.5608H12.1875C13.2244 36.5608 14.0625 37.3989 14.0625 38.4358V42.1858H2.8125V36.5608" stroke="black" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.8125 42.1858V40.3108C17.8125 38.2483 19.5 36.5608 21.5625 36.5608H38.4375C40.5 36.5608 42.1875 38.2483 42.1875 40.3108V42.1858" stroke="black" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M30.9375 12.1838L32.8125 2.80884L23.4375 17.8088H29.0625L27.1875 27.1838L36.5625 12.1838" stroke="black" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                },
                {
                    name: 'Total Makers',
                    value: [...new Set(dataset?.map(item => item?.Make))]?.length,
                    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                </svg>
                },
                {
                    name: 'Total Cities',
                    value: [...new Set(dataset?.map(item => item?.City))]?.length,
                    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                }
            ]
        )
    }, [dataset])


    return (

        <div className='flex justify-evenly w-[50%] ml-auto mr-0'>
            {
                data?.map((item, index) => <div key={index} className='w-[40%] mx-3 my-auto h-[100%] border-1 shadow-md rounded-xl border-[#cccccc] bg-white'>
                <h1 className='flex text-left p-3 text-md font-extrabold'>
                    {item?.svg}
                    {item?.name}</h1>
                <hr />
                <h1 className='text-3xl my-auto p-3 font-bold text-left'>
                    {item?.value}</h1>
            </div>)
            }

        </div>
    )
}

export default InfoCard