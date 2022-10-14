import React, { useState } from "react";
import { Nav } from "rsuite";
import Sprachkurs from "../sprachkurs/Sprachkurs";
import A1 from "../sprachkurs/A1";
import A2 from "../sprachkurs/A2";
import B1 from "../sprachkurs/SchreibenB1";
import Einbuergerungstest from "../orientierung/Einbuergerungstest";
import Dictionary from "../dictionary/Dictionary";
import Forum from "../Forum";
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useStore } from "../../store";
import PageLogin from "../../Pages/PageLogin";
import PageRegister from "../../Pages/PageRegister";
import { PageLogout } from "../../Pages/PageLogout";
import PageUserSettings from "../../Pages/PageUserSettings";
import NavbarDesktop from "./NavbarDesktop";
import "../../App.css";

const NavBar = () => {
    // const fetchCurrentUser = useStore((state) => state.fetchCurrentUser);
    const currentUser = useStore((state) => state.currentUser);
    const [showNav, setShowNav] = useState(false);
    return (
        <div className="w-full">     <div className="flex justify-end h-full">
            <div className="w-full relative text-5xl flex overflow-auto items-center justify-center rounded-full w-20 h-20 m-5 bg-palette-80 ring-0 ring-palette-70 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md md:hidden">
                {showNav ? (
                    <BiX onClick={() => setShowNav(!showNav)} className="" />
                ) : (
                    <BiMenu onClick={() => setShowNav(!showNav)} className="" />
                )}
                <div
                    className={
                        (showNav ? "left-10" : "left-full") +
                        " bg-palette-40/75 w-full fixed left-10 right-0 top-28 bottom-10 z-40 text-palette-50 flex justify-center text-center text-2xl rounded-bl-3xl rounded-tl-3xl transition-ease-in duration-1000 backdrop-blur-md"
                    }
                    onClick={() => setShowNav(!showNav)}
                >
                    <nav className="gradient flex flex-col items-center justify-center gap-10  ">
                        <NavLink to="/sprachkurs" element={<Sprachkurs />}>
                            Sprachkurs
                        </NavLink>
                        <NavLink
                            to="/einbuergerungstest"
                            element={<Einbuergerungstest />}
                        >
                            Orientierungskurs
                        </NavLink>
                        <NavLink to="/dictionary" element={<Dictionary />}>
                            Wörterbuch
                        </NavLink>
                        <NavLink to="/forum" element={<Forum />}>
                            Forum
                        </NavLink>

                        {currentUser.accessGroups?.includes(
                            "loggedOutUsers"
                        ) && (
                            <div className="flex flex-col mt-10 items-center">
                                <NavLink
                                    className="w-60 text-center border-4 border-palette-60 bg-palette-70 p-4 text-2xl rounded-xl shadow-outer hover:shadow-inner hover:text-palette-50 m-8"
                                    to="/login"
                                    element={<PageLogin />}
                                >
                                    Login
                                </NavLink>
                                <NavLink
                                    className="w-60 text-center bg-palette-80 border-4 border-palette-60 p-4 text-2xl rounded-xl hover:shadow-inner hover:text-palette-50 shadow-outer"
                                    to="/registration"
                                    element={<PageRegister />}
                                >
                                    Register
                                </NavLink>
                            </div>
                        )}

                        {currentUser.accessGroups?.includes(
                            "loggedInUsers"
                        ) && (
                            <div className="flex items-center m-5">
                                <NavLink
                                    className="bg-palette-80 p-4 text-2xl py-2 rounded-full hover:shadow-inner hover:text-palette-50"
                                    to={`/${currentUser.firstName}`}
                                    element={<PageUserSettings />}
                                >
                                    {currentUser.avatar ? (
                                        <img
                                            src={`${currentUser.avatar}`}
                                            alt=""
                                        />
                                    ) : (
                                        <p>{currentUser.firstName[0]}</p>
                                    )}
                                </NavLink>
                            </div>
                        )}

                        {currentUser.accessGroups?.includes(
                            "loggedInUsers"
                        ) && <PageLogout />}
                    </nav>
                </div>
            </div>

            <NavbarDesktop />
        </div></div>
   
    );
};

export default NavBar;
