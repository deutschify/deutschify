import React from "react";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai"

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
            <div className="w-6/12">
                <button className="text-palette-50 m-2 p-2">ABOUT US</button>
                <button className="text-palette-50 m-2 p-2">CONTACT US</button>
                <button className="text-palette-50 m-2 p-2">IMPRESSUM</button>
                <div className="w-12/12 m-2 flex  justify-center gap-1">deutschify <AiOutlineCopyrightCircle /> 2022</div>
            </div>
            {/* Copyright */}
        </div>
    );
};

export default Footer;
