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
        <div className="w-full flex text-center bg-palette-80 text-palette-50">
            <div className="w-3/12">
                <img
                    src="./images/deutschifyLogo.png"
                    className="w-12 m-2"
                    alt=""
                />
                <div className="flex m-3 space-x-2">
                    <div className="">
                        <BsFacebook />
                    </div>
                    <div className="">
                        <BsInstagram />
                    </div>
                </div>
            </div>
            <div className="w-6/12 p-2">
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
