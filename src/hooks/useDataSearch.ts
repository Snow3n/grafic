// useDataSearch.js
import { useState } from "react";
import jsonData from "../data.json"; // Import your JSON data
import { matchSorter } from "match-sorter";

const useDataSearch = () => {
  const [searchResult, setSearchResult] = useState<any>([]);

  const searchData = (street: string, addressNumber: string) => {
    // Filter the JSON data based on street and address number
    // const result = jsonData.data.find(
    //   (item: any) =>
    //     item.name.find(
    //       (el: any) => el.street.toLowerCase() === street.toLowerCase() // &&
    //     )
    // item.numbers === parseInt(addressNumber)
    // );
    const result = [];

    for (let i = 0; i < jsonData.data.length; i++) {
      for (let j = 0; j < jsonData.data[i].name.length; j++) {
        // console.log(jsonData.data, street, addressNumber);
        const res = matchSorter(jsonData.data[i].name, street, {
          keys: [`street`],
        });
        if (res.length > 0) {
          result.push(res[0]);
          break;
        }
      }
    }

    setSearchResult(result); // Set the search result
  };

  return { searchResult, searchData };
};

export default useDataSearch;
