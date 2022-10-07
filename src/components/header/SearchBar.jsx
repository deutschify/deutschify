import { BsSearch } from "react-icons/bs";
import React from "react";

const SearchBar = () => {
    return (
        <div className="flex items-center ">
            <div className="flex h-10  bg-palette-60 text-palette-80 rounded-3xl p-2 m-4 items-center shadow-inner">
                <input
                    className="bg-transparent text-palette-50 placeholder:text-palette-50/75 p-4"
                    type="text"
                    placeholder="Suche..."
                />
                <button type="submit">
                    <BsSearch className="flex text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
