
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Route, Routes, NavLink } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import RateUs from "./RateUs";
import Homepage from "../Homepage";

const Footer = () => {
    // footer
    return (
        // footer
        <div className="w-full flex text-center bg-palette-50 text-palette-60 fixed bottom-0">
            <div className="w-3/12">
            <NavLink
                className=""
                to="/"
                element={<Homepage />}
            >
                <img
                    src="./images/deutschify-side.png"
                    className="w-40
                     m-2"
                    alt=""
                />
                </NavLink>
                <div className="flex justify-center m-3 space-x-4 md:justify-start md:text-2xl md:ml-10 ">
                    <a className="hover:text-palette-80"
                        href="https://www.facebook.com/profile.php?id=100085315394768"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsFacebook />
                    </a>
                    <a className="hover:text-palette-80"
                    href="https://www.instagram.com/deutschify.integrationscoach/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <BsInstagram />
                    </a>
                </div>
            </div>
            <div className="w-11/12 p-1 md:w-6/12 md:text-2xl">
                <NavLink
                    className="text-palette-60 m-2 p-2 hover:text-palette-80"
                    to="/about-us"
                    element={<AboutUs />}
                >
                    {" "}
                    About Us{" "}
                </NavLink>
                <NavLink
                    className="text-palette-60 m-2 p-2 hover:text-palette-80"
                    to="/contact-us"
                    element={<ContactUs />}
                >
                    {" "}
                    Contact Us{" "}
                </NavLink>
                <NavLink
                    className="text-palette-60 m-2 p-2 hover:text-palette-80"
                    to="/rate-us"
                    element={<RateUs />}
                >
                    {" "}
                    Rate Us{" "}
                </NavLink>

                <div className="w-12/12 m-2 flex  justify-center gap-1">
                    deutschify <AiOutlineCopyrightCircle /> 2022
                </div>

            </div>
            {/* Copyright */}
        </div>
    );
};

export default Footer;
