import { BsSearch } from "react-icons/bs";
import React from "react";

const SearchBar = () => {
    return (
        <div className="flex items-center ">
            <div className="flex h-10  bg-palette-50 text-palette-80 rounded-3xl p-2 m-4 items-center">
                <input
                    className="bg-transparent"
                    type="text"
                    placeholder="Suche..."
                />
                <button type="submit">
                    <BsSearch className="flex text-xl" />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
