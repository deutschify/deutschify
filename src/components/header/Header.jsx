import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./Navbar";
import { Route, Routes, NavLink } from "react-router-dom";
import Homepage from "../Homepage"

const Header = () => {
    return (
        <div className="w-full bg-palette-80 text-palette-50 flex">
            

            <NavLink
                className="text-palette-50 m-2 p-2"
                to="/"
                element={<Homepage />}
            >
               <img src="./images/deutschify.png" className="w-36 p-2 " alt="" />
            </NavLink>

            <SearchBar />
            <NavBar />
        </div>
    );
};

export default Header;
