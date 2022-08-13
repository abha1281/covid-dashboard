import React, { useState } from "react";
import SearchInput from "../global/atoms/SearchInput";
import DropDown from "../global/molecules/DropDown";
import useHttp from "../../hooks/useHttp";
import states from "../../pages/api/states"


const StatMap = () => {
const { http } = useHttp();
  const [search, setSearch] = useState("");

  const getStates = async () => {
    try {
      const response = await http.get(
        "https://api.countrystatecity.in/v1/countries",
        {
          headers: {
            "X-CSCAPI-KEY": "API_KEY",
          },
        }
      );

      console.log(response)
    } catch (error) {}
  }

  return (
    <div className="mt-[58px] flex gap-x-4">
      <div className="w-52">
        <SearchInput value={search} onChange={value => setSearch(value)} />
      </div>
      <div>
        <DropDown list={states} onSelect={value => console.log(value)} />
      </div>
      <div>
        <DropDown list={states} onSelect={value => console.log(value)} />
      </div>
    </div>
  );
};

export default StatMap;
