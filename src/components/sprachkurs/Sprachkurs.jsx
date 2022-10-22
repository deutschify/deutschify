import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import A1 from "./A1";
import A2 from "./A2";
import B1 from "./B1";
import ImgSprachkursA from "../../../public/images/illus/sprachkurs2.png";
import ImgSprachkursB from "../../../public/images/illus/sprachkurs3.png";
import { useStore } from "../../store";

const Sprachkurs = () => {
    const navigate = useNavigate();
    const currentUser = useStore((state) => state.currentUser);
    
    return (
        <>
            {currentUser.accessGroups?.includes("loggedInUsers") ? (
                <div className="mb-12">
                    <div className="cover m-10">
                        <div className="title text-center text-2xl p-2 text-palette-60 font-block3">
                            Hier hast du die Möglichkeit dich in den vier
                            Bereichen, Hörverstehen, Leseverstehen,
                            schriftlicher- und mündlicher Ausdruck
                            vorzubereiten!
                        </div>
                    </div>

                    <div className="cover flex flex-col items-center m-5 mb-16">
                        <div className="coaster m-10">
                            {" "}
                            <div className="text-center text-palette-60 p-2 font-block1 text-xl">
                                Wähle zunächst dein Sprachniveau aus
                            </div>
                        </div>
                        <div className="imgFrame w-40 border-4 shadow-outer">
                            <img src="/images/illus/sprachkurs2.png" alt="" className="" />
                        </div>

                        <nav className="md:flex justify-center">
                            <div className="btn w-60 h-40 border-palette-60 hover:border-palette-50 hover:bg-palette-60 hover:text-palette-50  m-10">
                                {" "}
                                <NavLink
                                    to="/sprachkurs/A1"
                                    element={<A1 />}
                                    className="h-full text-5xl flex items-center justify-center"
                                >
                                    A1
                                </NavLink>
                            </div>
                            <div className="btn w-60 h-40 border-palette-60 hover:border-palette-50 hover:bg-palette-60 hover:text-palette-50  m-10">
                                {" "}
                                <NavLink
                                    to="/sprachkurs/A2"
                                    element={<A2 />}
                                    className="h-full text-5xl flex items-center justify-center"
                                >
                                    A2
                                </NavLink>
                            </div>
                            <div className="btn w-60 h-40 border-palette-60 hover:border-palette-50 hover:bg-palette-60 hover:text-palette-50  m-10">
                                {" "}
                                <NavLink
                                    to="/sprachkurs/B1"
                                    element={<B1 />}
                                    className="h-full text-5xl flex items-center justify-center"
                                >
                                    B1
                                </NavLink>
                            </div>
                        </nav>
                        <div className="imgFrame w-40 border-4 mb-10 shadow-outer">
                            <img src="/images/illus/sprachkurs3.png" alt="" className="mt-4" />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {" "}
                        <button
                            onClick={() => navigate(-1)}
                            className="btn p-1 md:p-6 text-palette-60 rounded-full h-20 md:rounded-xl text-lg"
                        >
                            zurück
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <p>Login to see our form</p>
                    <Navigate replace to="/login" />
                </>
            )}
        </>
    );
};

export default Sprachkurs;
