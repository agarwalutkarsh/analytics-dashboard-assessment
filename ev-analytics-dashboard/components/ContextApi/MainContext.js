"use client"

import { dataset } from '@/DataSet'
import React, { createContext, useCallback, useEffect, useState } from 'react'


export const MainContext = createContext()
// Context Api for the state management throughout the application

const MainContextWrapper = (props) => {
    // These state powers the dropdown of the filters
    const [makersList, setMakersList] = useState([])
    const [countyList, setCountyList] = useState([])
    const [cityList, setCityList] = useState([])
    const [yearList, setYearList] = useState([])

    // Selected Filters state
    const [sidebarFilters, setSidebarFilters] = useState({})

    // Different Functions for different dropdown
    
    const makersListArrFunc = useCallback(() => {
        const extractedList = dataset?.map(item => item?.Make)
        setMakersList([...new Set(extractedList?.toSorted())])
    }, [dataset])

    const countyListArrFunc = useCallback(() => {
        const extractedList = dataset?.map(item => item?.County)
        setCountyList([...new Set(extractedList?.toSorted())])
    }, [dataset])

    const cityListArrFunc = useCallback(() => {
        const extractedList = dataset?.map(item => item?.City)
        setCityList([...new Set(extractedList?.toSorted())])
    }, [dataset])

    const yearListArrFunc = useCallback(() => {
        const extractedList = dataset?.map(item => item?.["Model Year"])
        setYearList([...new Set(extractedList?.toSorted((a, b) => a - b))])
    }, [dataset])

    // Calling these functions when the dataset is ready
    useEffect(() => {
        makersListArrFunc(),
        cityListArrFunc(),
        countyListArrFunc(),
        yearListArrFunc()
    }, [dataset])

    const state = {
        makersList,
        countyList,
        cityList,
        yearList,
        sidebarFilters,
        setSidebarFilters
    }
    
  return (
    <div>
        <MainContext.Provider value={{...state}}>
            {props.children}
        </MainContext.Provider>

    </div>
  )
}

export default MainContextWrapper