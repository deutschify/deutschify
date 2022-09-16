import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./Navbar";
import { Route, Routes, NavLink } from "react-router-dom";
import Homepage from "../homepage/Homepage";

const Header = () => {
    return (
        <div className="w-full bg-palette-50 text-palette-60 flex shadow-outer">
            <NavLink
                className="text-palette-60 m-2 p-2"
                to="/"
                element={<Homepage />}
            >
                <img
                    src="./images/deutschify.png"
                    className="w-36 p-2 "
                    alt=""
                />
            </NavLink>

            <SearchBar />
            <NavBar />
        </div>
    );
};

export default Header;
