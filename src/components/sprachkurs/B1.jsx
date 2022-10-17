import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Lesen from "../../../public/images/lesen.png";
import Schreiben from "../../../public/images/schreiben.png";
import Hoeren from "../../../public/images/hoeren.png";
import Sprechen from "../../../public/images/sprechen.png";
import SchreibenB1 from "./SchreibenB1";
import LesenB1 from "./LesenB1";
import HoerenB1 from "./HoerenB1";
import SprechenB1 from "./SprechenB1";
import { useStore } from "../../store";

const B1 = () => {
    const currentUser = useStore((state) => state.currentUser);
    const navigate = useNavigate();
    return (
        <>
            {currentUser.accessGroups?.includes("loggedInUsers") ? (
                <div className="mb-12 md:flex md:justify-center">
                    <div className="cover m-5 text-center md:w-[75%]">
                        <div className="text-palette-60 p-4 text-4xl  flex flex-col items-center m- font-block1">
                            Willkommen in deinem Sprachniveau
                            <div className="font-block2 bg-palette-50 border-4 border-palette-60 rounded-xl w-40 m-10 text-center text-5xl p-4">
                                B1
                            </div>{" "}
                            <nav className="">
                                {" "}
                                <div className="flex flex-col items-center md:grid grid-col-4 grid-row-4">
                                    <NavLink
                                        to="/sprachkurs/b1/hoerverstehen"
                                        element={<HoerenB1 />}
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
                                        to="/sprachkurs/b1/leseverstehen"
                                        element={<LesenB1 />}
                                        className="coaster w-48 h-60 m-8 p-2 rounded-xl flex  flex-col justify-center items-center text-center text-2xl col-start-3 col-end-4 row-start-1 row-end-2"
                                    >
                                        <img
                                            src={Lesen}
                                            alt=""
                                            className="w-56 h-80 bg-palette-40 border-4 border-palette-60 rounded-xl"
                                        />
                                        Leseverstehen
                                    </NavLink>
                                    <NavLink
                                        to="/sprachkurs/b1/schriftlicher-ausdruck"
                                        element={<SchreibenB1 />}
                                        className="coaster w-48 h-60 m-8 p-2 rounded-xl flex  flex-col justify-center items-center text-center text-2xl col-start-1 col-end-2 row-start-3 row-end-4"
                                    >
                                        <img
                                            src={Schreiben}
                                            alt=""
                                            className="w-56 h-80 bg-palette-40 border-4 border-palette-60 rounded-xl"
                                        />
                                        schriftlicher Ausdruck
                                    </NavLink>
                                    <NavLink
                                        to="/sprachkurs/b1/sprachbausteine"
                                        element={<SprechenB1 />}
                                        className="coaster w-48 h-60 m-8 p-2 rounded-xl flex  flex-col justify-center items-center text-center text-2xl col-start-3 col-end-4 row-start-3 row-end-4"
                                    >
                                        <img
                                            src={Sprechen}
                                            alt=""
                                            className="w-56 h-80 bg-palette-40 border-4 border-palette-60 rounded-xl"
                                        />
                                        Sprachbausteine
                                    </NavLink>{" "}
                                </div>
                                <button
                                    onClick={() => navigate(-1)}
                                    className="bg-palette-50 p-1 md:p-6 text-palette-60 border-4 border-palette-60 rounded-full h-20 md:rounded-xl text-lg"
                                    // className="buttons"
                                >
                                    zurück
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <p>Login to see our form</p>
                    <Navigate replace to="/login" />

                    {/* <PageLogin baseUrl={""}/> */}
                </>
            )}
        </>
    );
};

export default B1;
