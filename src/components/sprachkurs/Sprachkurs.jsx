import React from "react";
import { NavLink } from "react-router-dom";
import A1 from "./A1";
import A2 from "./A2";
import B1 from "./B1";
import ImgSprachkursA from "../../../public/images/illus/sprachkurs2.png";
import ImgSprachkursB from "../../../public/images/illus/sprachkurs3.png";

const Sprachkurs = () => {
    return (
        <div className=" bg-palette-80 m-10 shadow-bs border-4 border-palette-50 rounded-xl shadow-outer">
            <div className="">
                <div className="title text-center text-4xl m-10 text-palette-60 font-block3">
                    Hier hast du die Möglichkeit dich in den vier Bereichen,
                    Hörverstehen, Leseverstehen, <br /> schriftlicher- und
                    mündlicher Ausdruck vorzubereiten!
                </div>
                <div className="text-center text-palette-60 font-block1 text-4xl">
                    Wähle zunächst dein Sprachniveau aus
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
                <div className="bg-palette-40 w-80 m-10 border-4 border-palette-60 rounded-xl">
                    <img src={ImgSprachkursA} alt="" className="" />
                </div>

                <nav className="md:flex justify-center m-10">
                    <div className="bg-palette-50 w-60 h-40 border-4 border-palette-60 rounded-xl m-10">
                        {" "}
                        <NavLink
                            to="/sprachkurs/A1"
                            element={<A1 />}
                            className="h-full text-palette-60 text-5xl flex items-center justify-center"
                        >
                            A1
                        </NavLink>
                    </div>
                    <div className="bg-palette-50 w-60 h-40 border-4 border-palette-60 rounded-xl m-10">
                        {" "}
                        <NavLink
                            to="/sprachkurs/A2"
                            element={<A2 />}
                            className="h-full text-palette-60 text-5xl flex items-center justify-center"
                        >
                            A2
                        </NavLink>
                    </div>
                    <div className="bg-palette-50 w-60 h-40 border-4 border-palette-60 rounded-xl m-10">
                        {" "}
                        <NavLink
                            to="/sprachkurs/B1"
                            element={<B1 />}
                            className="h-full text-palette-60 text-5xl flex items-center justify-center"
                        >
                            B1
                        </NavLink>
                    </div>
                </nav>
                <div className="bg-palette-40 w-80 m-10 border-4 border-palette-60 rounded-xl">
                    <img src={ImgSprachkursB} alt="" className="mt-4" />
                </div>
            </div>
        </div>
    );
};

export default Sprachkurs;
