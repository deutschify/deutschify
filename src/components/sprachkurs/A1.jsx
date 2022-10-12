import { NavLink, useNavigate } from "react-router-dom";
import Lesen from "../../../public/images/lesen.png";
import Schreiben from "../../../public/images/schreiben.png";
import Hoeren from "../../../public/images/hoeren.png";
import Sprechen from "../../../public/images/sprechen.png";
import LesenA1 from "./LesenA1";
import HoerenA1 from "./HoerenA1";
import SchreibenA1 from "./SchreibenA1";
import SprechenA1 from "./SprechenA1";

const A1 = () => {
    const navigate = useNavigate();
    return (
        <div className="mb-12">
            <div className="cover m-5 text-center md:flex md:justify-center">
                <div className="text-palette-60 p-4 text-4xl  flex flex-col items-center m- font-block1">
                    Willkommen in deinem Sprachniveau
                    <div className="font-block2 bg-palette-50 border-4 border-palette-60 rounded-xl w-40 m-10 text-center text-5xl p-4">
                        A1
                    </div>{" "}
                    <nav className="md:grid grid-col-4 grid-row-4">
                        {" "}
                        <div className="flex flex-col items-center">
                            <NavLink
                                to="/sprachkurs/a1/hoerverstehen"
                                element={<HoerenA1 />}
                                className="coaster w-48 h-60 m-8 p-2 rounded-xl flex  flex-col justify-center items-center text-center text-2xl col-start-1 col-end-2 row-start-1 row-end-2"
                            >
                                <img
                                    src={Hoeren}
                                    alt=""
                                    className="w-56 h-80 bg-palette-40 border-4 border-palette-60 mb-4 rounded-xl"
                                />
                                Hörverstehen
                            </NavLink>
                            <NavLink
                                to="/sprachkurs/a1/leseverstehen"
                                element={<LesenA1 />}
                                className="coaster w-48 h-60 m-8 p-2 rounded-xl flex  flex-col justify-center items-center text-center text-2xl col-start-1 col-end-2 row-start-1 row-end-2"
                            >
                                <img
                                    src={Lesen}
                                    alt=""
                                    className="w-56 h-80 bg-palette-40 border-4 border-palette-60 rounded-xl"
                                />
                                Leseverstehen
                            </NavLink>
                            <NavLink
                                to="/sprachkurs/a1/schriftlicher-ausdruck"
                                element={<SchreibenA1 />}
                                className="coaster w-48 h-60 m-8 p-2 rounded-xl flex  flex-col justify-center items-center text-center text-2xl col-start-1 col-end-2 row-start-1 row-end-2"
                            >
                                <img
                                    src={Schreiben}
                                    alt=""
                                    className="w-56 h-80 bg-palette-40 border-4 border-palette-60 rounded-xl"
                                />
                                schriftlicher Ausdruck
                            </NavLink>
                            <NavLink
                                to="/sprachkurs/a1/sprachbausteine"
                                element={<SprechenA1 />}
                                className="coaster w-48 h-60 m-8 p-2 rounded-xl flex  flex-col justify-center items-center text-center text-2xl col-start-1 col-end-2 row-start-1 row-end-2"
                            >
                                <img
                                    src={Sprechen}
                                    alt=""
                                    className="w-56 h-80 bg-palette-40 border-4 border-palette-60 rounded-xl"
                                />
                                Sprachbausteine
                            </NavLink>{" "}
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-palette-50 p-1 md:p-6 text-palette-60 border-4 border-palette-60 rounded-full h-20 md:rounded-xl text-lg"
                                // className="buttons"
                            >
                                zurück
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default A1;
