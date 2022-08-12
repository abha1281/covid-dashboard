import { SearchIcon } from "@heroicons/react/outline";
import React from "react";

type Props = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

const SearchInput = ({ value, onChange, placeholder = "Search" }: Props) => {
  return (
    <div className="relative w-full flex items-center rounded-3xl">
      <div className="pointer-events-none absolute left-[16.5px]">
        <SearchIcon className="w-5 h-5 text-[#817C9B]" />
      </div>
      <input
        name="search"
        id="search"
        className="border-none w-full sm:text-sm rounded-3xl py-2 pl-[42px] pr-3"
        value={value}
        autoComplete="off"
        placeholder={placeholder}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchInput;
