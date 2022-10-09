import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Route, Routes, NavLink } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import RateUs from "./RateUs";
import Homepage from "../homepage/Homepage";
import LogoSide from "../../../public/images/deutschify-smallletter-side.png"

const Footer = () => {
    // footer
    return (
        // footer
        <div className="w-full flex items-center text-center bg-palette-50 text-palette-60 fixed bottom-0 z-20 shadow-outer">
            <div className="w-3/12">
                <NavLink className="" to="/" element={<Homepage />}>
                    <img
                        src={LogoSide}
                        className="w-40 m-2"
                        alt=""
                    />
                </NavLink>
            </div>
            <div className="w-11/12 m-2 md:w-6/12 md:text-lg">
                <NavLink
                    className="text-palette-60 m-2 p-2 hover:text-palette-80"
                    to="/about-us"
                    element={<AboutUs />}
                >
                    {" "}
                    über uns{" "}
                </NavLink>
                <NavLink
                    className="text-palette-60 m-2 p-2 hover:text-palette-80"
                    to="/contact-us"
                    element={<ContactUs />}
                >
                    {" "}
                    kontaktier' uns{" "}
                </NavLink>
                <NavLink
                    className="text-palette-60 m-2 p-2 hover:text-palette-80"
                    to="/rate-us"
                    element={<RateUs />}
                >
                    {" "}
                    bewerte uns{" "}
                </NavLink>

                <div className=" w-full m-2 flex justify-center gap-1">
                    deutschify <AiOutlineCopyrightCircle /> 2022
                </div>
            </div>{" "}
            <div className="flex items-center mx-4 w-3/12 space-x-4 md:justify-end md:text-2xl">
                <a
                    className="hover:text-palette-80"
                    href="https://www.facebook.com/profile.php?id=100085315394768"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsFacebook />
                </a>
                <a
                    className="hover:text-palette-80"
                    href="https://www.instagram.com/deutschify.integrationscoach/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsInstagram />
                </a>
            </div>
        </div>
    );
};

export default Footer;
