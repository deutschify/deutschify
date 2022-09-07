import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./Navbar";

const Header = () => {
    return (
        <div className="w-full bg-palette-80 text-palette-50 flex">
            <img
                src="./images/deutschify.png"
                className="w-36 p-2 stroke-palette-50"
                alt=""
            />
            <SearchBar />
            <NavBar />
            <div className="flex items-center m-5   ">
                <div className="bg-palette-10 p-4 text-2xl py-2 rounded-full">
                    A
                </div>
            </div>
            <div className="flex items-center m-10">
                <div className="bg-palette-10 p-4 text-xl py-2 rounded-full">
                    Login
                </div>
            </div>
        </div>
    );
};

export default Header;
