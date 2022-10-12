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
        <div className="flex justify-end">
            <div className="w-full relative text-5xl flex overflow-auto items-center justify-center rounded-full w-20 h-20 m-5 bg-palette-80 ring-0 ring-palette-70 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md md:hidden">
                {showNav ? (
                    <BiX onClick={() => setShowNav(!showNav)} className="" />
                ) : (
                    <BiMenu onClick={() => setShowNav(!showNav)} className="" />
                )}
                <div
                    className={
                         (showNav ? "left-20" : "left-full") +
                        " bg-palette-40/75 fixed right-0 top-28 bottom-10 z-40 text-palette-50 flex justify-center text-center text-2xl rounded-bl-3xl rounded-tl-3xl transition-ease-in duration-1000"
                    }
                    onClick={() => setShowNav(!showNav)}
                >
                    <Nav className="">
                        {/* <nav className="">
                            <NavLink
                            className="flex justify-center hover:text-palette-80 h-40"
                            to="/sprachkurs"
                            element={<Sprachkurs />}
                            >

                            </NavLink>
                        </nav> */}
                        <div className="">
                            <div className="">
                                <Nav.Menu
                                    className="border-none hover:text-palette-80 mt-20 h-40"
                                    trigger={["click", "hover"]}
                                    title="Übungen"
                                >
                                    <div className="bg-palette-80 text-palette-50 w-80  hover:text-palette-60 border-l-2 border-t-2 border-r-2 border-palette-50 rounded-t-xl p-4 -ml-20">
                                        <NavLink
                                            className=""
                                            to="/sprachkurs"
                                            element={<Sprachkurs />}
                                        >
                                            <Nav.Menu
                                                className="text-center appearance-none rounded-xl "
                                                title="Sprachkurs"
                                            >
                                                <div className="flex flex-col w-40 absolute left-96 text-center bg-palette-60/75 rounded-xl border-2 border-palette-50 p-4 -ml-20">
                                                    <NavLink
                                                        className="text-palette-50 hover:text-palette-80 rounded-t-lg"
                                                        to="/sprachkurs/a1"
                                                        element={<A1 />}
                                                    >
                                                        A1
                                                    </NavLink>
                                                    <NavLink
                                                        className=" text-palette-50 hover:text-palette-80"
                                                        to="/sprachkurs/a2"
                                                        element={<A2 />}
                                                    >
                                                        A2
                                                    </NavLink>
                                                    <NavLink
                                                        className=" text-palette-50 hover:text-palette-80 rounded-b-lg"
                                                        to="/sprachkurs/b1"
                                                        element={<B1 />}
                                                    >
                                                        B1
                                                    </NavLink>
                                                </div>
                                            </Nav.Menu>
                                        </NavLink>
                                    </div>
                                    <NavLink
                                        className="flex justify-center border-r-2 border-b-2 border-l-2 border-palette-50 bg-palette-80 text-palette-50 w-80  hover:text-palette-60 rounded-b-xl pb-4 -ml-20"
                                        to="/einbuergerungstest"
                                        element={<Einbuergerungstest />}
                                    >
                                        Orientierungskurs
                                    </NavLink>
                                </Nav.Menu>
                            </div>
                            <div className="">
                                <NavLink
                                    className="flex justify-center hover:text-palette-80 h-40"
                                    to="/dictionary"
                                    element={<Dictionary />}
                                >
                                    Wörterbuch
                                </NavLink>
                                <NavLink
                                    className="flex justify-center hover:text-palette-80"
                                    to="/forum"
                                    element={<Forum />}
                                >
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
                                                <p>
                                                    {currentUser.firstName[0]}
                                                </p>
                                            )}
                                        </NavLink>
                                    </div>
                                )}

                                {currentUser.accessGroups?.includes(
                                    "loggedInUsers"
                                ) && <PageLogout />}
                            </div>
                        </div>
                    </Nav>
                </div>
            </div>
            <NavbarDesktop />
        </div>
    );
};

export default NavBar;
