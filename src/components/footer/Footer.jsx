
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Route, Routes, NavLink } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import RateUs from "./RateUs";

const Footer = () => {
    // footer
    return (
        // footer
        <div className="w-full flex text-center bg-palette-80 text-palette-50 fixed bottom-0">
            <div className="w-3/12">
                <img
                    src="./images/deutschify-side.png"
                    className="w-40
                     m-2"
                    alt=""
                />
                <div className="flex justify-center m-3 space-x-4 md:justify-start md:text-2xl md:ml-10">
                    <div className="">
                        <BsFacebook />
                    </div>
                    <div className="">
                        <BsInstagram />
                    </div>
                </div>
            </div>
            <div className="w-11/12 p-2 md:w-6/12 md:text-2xl">
                <NavLink
                    className="text-palette-50 m-2 p-2"
                    to="/about-us"
                    element={<AboutUs />}
                >
                    {" "}
                    About Us{" "}
                </NavLink>
                <NavLink
                    className="text-palette-50 m-2 p-2"
                    to="/contact-us"
                    element={<ContactUs />}
                >
                    {" "}
                    Contact Us{" "}
                </NavLink>
                <NavLink
                    className="text-palette-50 m-2 p-2"
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
