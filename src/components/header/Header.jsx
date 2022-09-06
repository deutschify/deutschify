
import React from "react";

import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-full bg-palette-80 text-palette-50 flex">
            <img
                src="./images/deutschify.png"
                className="w-40 p-2 stroke-palette-50"
                alt=""
            />
            <div className="flex items-center ">
                <div className="flex h-10  bg-palette-50 text-palette-80 rounded-3xl p-2 m-4 items-center">
                    <input
                        className="bg-transparent"
                        type="text"
                        placeholder="Suche..."
                    />
                    <BsSearch className="flex text-xl" />
                </div>
            </div>
            <nav className="flex items-center m-5 text-center">
                <NavLink to="#" className="m-4">
                    Integrationsaufgaben
                </NavLink>
                <NavLink to="#" className="m-4">
                    Wörterbuch
                </NavLink>
                <NavLink to="#" className="m-4">
                    Forum
                </NavLink>
            </nav>
            <div className="flex items-center m-5   ">
                <div className="bg-palette-10 p-4 text-2xl py-2 rounded-full">
                    A
                </div>
            </div>
            <div className="flex items-center m-10">
                <div className="bg-palette-10 p-4 text-xl py-2 rounded-full">Login</div>
            </div>
            
        </div>
    );
};

export default Header;
