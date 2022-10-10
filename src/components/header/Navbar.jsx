import React, { useState } from "react";
import { Nav } from "rsuite";
import A1 from "../A1";
import A2 from "../A2";
import B1 from "../b1/B1";

import Einbuergerungstest from "../orientierung/Einbuergerungstest";

import Dictionary from "../dictionary/Dictionary";
import Forum from "../Forum";
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { Route, Routes, NavLink } from "react-router-dom";
import { useStore } from "../../store";
import PageLogin from "../../Pages/PageLogin";
import PageRegister from "../../Pages/PageRegister";
import { PageLogout } from "../../Pages/PageLogout";
import PageUserSettings from "../../Pages/PageUserSettings";

const NavBar = () => {
    // const fetchCurrentUser = useStore((state) => state.fetchCurrentUser);
    const currentUser = useStore((state) => state.currentUser);
    const [showNav, setShowNav] = useState(false);
    return (
        // Hamburger-Button

        <div className="">
            <div className="relative text-5xl flex overflow-hidden items-center justify-center rounded-full w-20 h-20 m-5 bg-palette-80 ring-0 ring-palette-70 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md md:hidden">
                {showNav ? (
                    <BiX onClick={() => setShowNav(!showNav)} className="" />
                ) : (
                    <BiMenu onClick={() => setShowNav(!showNav)} className="" />
                )}
                {/* Navbar-field in mobile Version */}
                <div
                    className={
                        (showNav ? "left-20" : "left-full") +
                        " bg-palette-70/75  fixed left-20 right-0 top-28 bottom-10 z-40 text-palette-50 text-center text-2xl p-10 rounded-bl-3xl rounded-tl-3xl transition-ease-in duration-1000"
                    }
                >
                    <Nav className="m-2 mt-20">
                        <div className="">
                            <div className="">
                                <Nav.Menu
                                    className="border-none hover:text-palette-80"
                                    trigger={["click", "hover"]}
                                    title="Übungen"
                                >
                                    <div className="bg-palette-80 text-palette-50 w-60 hover:text-palette-60 rounded-t-lg">
                                        <Nav.Menu
                                            className="text-center appearance-none"
                                            title="Sprachniveau"
                                        >
                                            <div className="flex flex-col w-60 absolute left-60 text-center">
                                                <NavLink
                                                    className="bg-palette-60 text-palette-50 hover:text-palette-80 rounded-t-lg"
                                                    to="/A1"
                                                    element={<A1 />}
                                                >
                                                    A1
                                                </NavLink>
                                                <NavLink
                                                    className="bg-palette-60 text-palette-50 hover:text-palette-80"
                                                    to="/A2"
                                                    element={<A2 />}
                                                >
                                                    A2
                                                </NavLink>
                                                <NavLink
                                                    className="bg-palette-60 text-palette-50 hover:text-palette-80 rounded-b-lg"
                                                    to="/B1"
                                                    element={<B1 />}
                                                >
                                                    B1
                                                </NavLink>
                                            </div>
                                        </Nav.Menu>
                                    </div>
                                    <NavLink
                                        className="flex bg-palette-80 text-palette-50 w-60 hover:text-palette-60 rounded-b-lg"
                                        to="/einbuergerungstest"
                                        element={<Einbuergerungstest />}
                                    >
                                        Leben in Deutschland
                                    </NavLink>
                                </Nav.Menu>
                            </div>
                            <div className="">
                                <NavLink
                                    className="flex justify-center p-10 hover:text-palette-80"
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
                            </div>
                        </div>
                    </Nav>
                    <Nav className="m-2 mt-20">
                        <NavLink
                            className="flex justify-center hover:text-palette-80"
                            to="/forum"
                            element={<Forum />}
                        >
                            Forum
                        </NavLink>
                    </Nav>
                    <div className=" w-20 ">
                        <div className="hidden bg-palette-50 p-4 text-2xl justify-center rounded-full">
                            A
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-palette-80 p-4 mt-24  text-xl rounded-full shadow-outer  hover:text-palette-60">
                            Login
                        </div>
                    </div>
                </div>
            </div>

            {/* desktop Version */}

            <div className="hidden md:block">
                <Nav className=" w-full h-24">
                    <div className="flex h-24 mt-6">
                        <div className="p-10 w-80 relative">
                            <Nav.Menu
                                className="text-2xl border-none hover:text-palette-80"
                                trigger={["click", "hover"]}
                                title="Übungen"
                            >
                                {" "}
                                <div className="bg-palette-80 w-80 rounded-lg">
                                    <div className=" text-palette-50 hover:text-palette-60">
                                        <Nav.Menu
                                            className="text-center"
                                            title="Sprachniveau"
                                        >
                                            <div className="flex flex-col w-40 absolute left-80">
                                                <NavLink
                                                    className="bg-palette-70 text-palette-50 hover:text-palette-80 rounded-t-lg"
                                                    to="/A1"
                                                    element={<A1 />}
                                                >
                                                    A1
                                                </NavLink>
                                                <NavLink
                                                    className="bg-palette-70 text-palette-50 hover:text-palette-80"
                                                    to="/A2"
                                                    element={<A2 />}
                                                >
                                                    A2
                                                </NavLink>
                                                <NavLink
                                                    className="bg-palette-70 text-palette-50 hover:text-palette-80 rounded-b-lg"
                                                    to="/B1"
                                                    element={<B1 />}
                                                >
                                                    B1
                                                </NavLink>
                                            </div>
                                        </Nav.Menu>
                                    </div>{" "}
                                    <NavLink
                                        className="bg-palette-80 text-palette-50 hover:text-palette-60 flex justify-center"
                                        to="/einbuergerungstest"
                                        element={<Einbuergerungstest />}
                                    >
                                        Leben in Deutschland
                                    </NavLink> 
                                </div>
                            </Nav.Menu>
                        </div>
                        <NavLink
                            className="p-10 w-80 text-2xl hover:text-palette-80"
                            to="/dictionary"
                            element={<Dictionary />}
                        >
                            Wörterbuch
                        </NavLink>

                        <NavLink
                            className="p-10 text-2xl w-80 hover:text-palette-80"
                            to="/forum"
                            element={<Forum />}
                        >
                            Forum
                        </NavLink>
                        {currentUser.accessGroups?.includes(
                            "loggedOutUsers"
                        ) && (
                            <div className="flex items-center m-10">
                                <NavLink
                                    className="flex items-center bg-palette-70 p-4 text-xl rounded hover:shadow-inner hover:text-palette-50 m-5"
                                    to="/login"
                                    element={<PageLogin />}
                                >
                                    Login
                                </NavLink>
                                <NavLink
                                    className="flex items-center bg-palette-80 p-4 text-xl rounded hover:shadow-inner hover:text-palette-50"
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
                            <NavLink className="bg-palette-80 p-4 text-2xl py-2 rounded-full hover:shadow-inner hover:text-palette-50"
                            to={`/${currentUser.firstName}`} element={<PageUserSettings/>}>
                                {currentUser.avatar ? <img src={`${currentUser.avatar}`} alt="" /> : <p>{currentUser.firstName[0] }</p>}
                            </NavLink>
                            </div>
                        )}
                        
                        {currentUser.accessGroups?.includes(
                            "loggedInUsers"
                        ) && (
                            <PageLogout/>
                        )}
                        

                        {/* <div className="flex items-center m-5">
                            <div className="bg-palette-80 p-4 text-2xl py-2 rounded-full hover:shadow-inner hover:text-palette-50">
                                A
                            </div>
                        </div> */}

                    </div>
                </Nav>
            </div>
        </div>
    );
};

export default NavBar;
