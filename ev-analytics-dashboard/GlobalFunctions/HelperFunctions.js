import { dataset } from "@/DataSet";


// Ev by Makers function
export const getMakeDistribution = () => {
  const makeCount = dataset.reduce((acc, curr) => {
    acc[curr.Make] = (acc[curr.Make] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(makeCount).map((make) => ({
    make,
    count: makeCount[make]
  }));
};


// Ev in a year function
export const getProducedInYear = () => {
  const prodCount = dataset.reduce((acc, curr) => {
    acc[curr?.["Model Year"]] = (acc[curr?.["Model Year"]] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(prodCount).map((production) => ({
    production,
    count: prodCount[production]
  }));
};

// Ev by a Maker in years function
export const getCountByManufacterer = (make) => {
  const makeLowerCase = make?.toLowerCase()
  const makeArr = dataset.reduce((acc, car) => {
    if (car.Make.toLowerCase() === makeLowerCase) {
      acc[car["Model Year"]] = (acc[car["Model Year"]] || 0) + 1;
    }
    return acc;
  }, {});
  return makeArr
}


// Ev type function
export const getEVTypeDistribution = () => {
  const evTypeCount = dataset.reduce((acc, curr) => {
    acc[curr?.["Electric Vehicle Type"]] = (acc[curr?.["Electric Vehicle Type"]] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(evTypeCount).map((type) => ({
    type,
    count: evTypeCount[type]
  }));
};

// Ev by Makers in a city in a year function
export const getMakeCountByCity = (city, year) => {
  const cityLowerCase = city?.toLowerCase()
  const yearInNumber = Number(year)
  const makeObj = dataset?.reduce((acc, curr) => {
    if (curr?.City?.toLowerCase() === cityLowerCase && Number(curr?.["Model Year"]) === yearInNumber) {
      acc[curr.Make] = (acc[curr.Make] || 0) + 1
    }
    return acc
  }, {})
  return Object.keys(makeObj)?.map(make => ({
    make,
    count: makeObj[make]
  }))

}

// Electric Utility by county function
export const getElectricUtilitiesByCounty = (county) => {
  const countyLowerCase = county?.toLowerCase()
  const countyObj = dataset?.reduce((acc, curr) => {
    if (countyLowerCase === curr?.County?.toLowerCase()) {
      acc[curr?.["Electric Utility"]] = (acc[curr?.["Electric Utility"]] || 0) + 1
    }
    return acc
  }, {})
  return Object.keys(countyObj)?.map(county => ({
    county,
    count: countyObj[county]
  }))
}