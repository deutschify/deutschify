import { NavLink, useNavigate } from "react-router-dom";
import Lesen from "../../../public/images/lesen.png";
import Schreiben from "../../../public/images/schreiben.png";
import Hoeren from "../../../public/images/hoeren.png";
import Sprechen from "../../../public/images/sprechen.png";
import LesenA2 from "./LesenA2";
import HoerenA2 from "./HoerenA2";
import SchreibenA2 from "./SchreibenA2";
import SprechenA2 from "./SprechenA2";

const A2 = () => {
    const navigate = useNavigate();
    return (
        <div className="">
            <div className="bg-palette-80 border-4 border-palette-50 rounded-xl m-10 text-center md:flex md:justify-center">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-palette-50 p-1 md:p-6 text-palette-60 border-4 border-palette-60 rounded-full h-20 md:rounded-xl text-xl absolute left-14 top-56 md:top-48 md:left-16"
                >
                    zurück
                </button>
                <div className="text-palette-60 p-4 text-4xl  flex flex-col items-center m- font-block1">
                    Willkommen in deinem Sprachniveau
                    <div className="font-block2 bg-palette-50 border-4 border-palette-60 rounded-xl w-40 m-10 text-center text-5xl p-4">
                        A2
                    </div>
                    <nav className="md:grid grid-col-4 grid-row-4">
                        <NavLink
                            to="/sprachkurs/a2/hoerverstehen"
                            element={<HoerenA2 />}
                            className="w-80 h-60 m-8 p-2  border-4 border-palette-60 rounded-xl flex  flex-col justify-center items-center text-center bg-palette-50 col-start-1 col-end-2 row-start-1 row-end-2"
                        >
                            <img
                                src={Hoeren}
                                alt=""
                                className="w-56 h-80 bg-palette-40 border-4 border-palette-60 mb-4 rounded-xl"
                            />
                            Hörverstehen
                        </NavLink>
                        <NavLink
                            to="/sprachkurs/a2/leseverstehen"
                            element={<LesenA2 />}
                            className="w-80 h-60 m-8 p-2 border-4 border-palette-60 rounded-xl flex flex-col justify-center items-center text-center bg-palette-50 col-start-3 col-end-4 row-start-1 row-end-2"
                        >
                            <img
                                src={Lesen}
                                alt=""
                                className="w-56 h-80 bg-palette-40 border-4 border-palette-60 rounded-xl"
                            />
                            Leseverstehen
                        </NavLink>
                        <NavLink
                            to="/sprachkurs/a2/sprachbausteine"
                            element={<SprechenA2 />}
                            className="w-80 h-60 m-8 p-2  border-4 border-palette-60 rounded-xl flex flex-col justify-center items-center text-center bg-palette-50 col-start-1 col-end-2 row-start-3 row-end-4"
                        >
                            <img
                                src={Sprechen}
                                alt=""
                                className="w-56 h-80 bg-palette-40 border-4 border-palette-60 rounded-xl"
                            />
                            Sprachbausteine
                        </NavLink>
                        <NavLink
                            to="/sprachkurs/a2/schriftlicher-ausdruck"
                            element={<SchreibenA2 />}
                            className="w-80 h-60 m-8 p-2 border-4 border-palette-60 rounded-xl flex flex-col justify-center items-center text-center bg-palette-50 col-start-3 col-end-4 row-start-3 row-end-4 text-3xl"
                        >
                            <img
                                src={Schreiben}
                                alt=""
                                className="w-56 h-80 bg-palette-40 border-4 border-palette-60 rounded-xl"
                            />
                            schriftlicher Ausdruck
                        </NavLink>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default A2;
