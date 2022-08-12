import { Combobox } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import Icon from "../../icons/Icon";

type Item = {
    id: string;
    name: string;
    iso2?: string;
}

type Props = {
  list: Item[];
  defaultValue?: Item;
  onSelect: (selectedItem: Item) => void
};

const DropDown = ({ list, defaultValue, onSelect }: Props) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue ?? list[0]);
  const [search, setSearch] = useState("");

  const filteredList =
    search === ""
      ? list
      : list.filter(item => {
          return item.name.toLowerCase().includes(search.toLowerCase());
        });

    const handleChange = (item: Item) => {
      setSelectedValue(item);
      onSelect(item);
    };

  return (
    <Combobox as="div"  value={selectedValue} onChange={handleChange}>
      <div className="bg-white rounded-3xl h-10 flex gap-x-1 justify-between items-center px-[14px]">
        <Combobox.Input
          className="focus:outline-none text-sm"
          onChange={event => setSearch(event.target.value)}
          displayValue={() => selectedValue.name}
        />
        <div className="">
          <Icon name="Triangle" />
        </div>
      </div>
      <Combobox.Options className="max-h-60 bg-white mt-2 rounded-md overflow-y-scroll">
        {filteredList.length !== 0 ? (
          filteredList.map(item => (
            <Combobox.Option className="hover:bg-gray-200 cursor-pointer text-sm py-1 px-[14px] max-w-40" key={item.id} value={item}>
              {item.name}
            </Combobox.Option>
          ))
        ) : (
          <p className="px-[14px] text-sm">No results found</p>
        )}
      </Combobox.Options>
    </Combobox>
  );
};

export default DropDown;
