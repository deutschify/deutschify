import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./Navbar";

const Header = () => {
    return (
        <div className="w-full bg-palette-80 text-palette-50 flex">
            <img
                src="./images/deutschify.png"
                className="w-36 p-2 "

                alt=""
            />
            <SearchBar />
            <NavBar />
           
        </div>
    );
};

export default Header;
