import { dataset } from "@/DataSet";

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

 export const getElectricRangeDistribution = () => {
    return dataset.filter(ev => ev?.["Electric Range"] > 0).map(ev => ev?.["Electric Range"]);
  };