import { useParams, Route, Routes, NavLink } from "react-router-dom";
import axios from "axios";
// import { baseUrl } from "../../App";
import Lernbereich from "./LernbereichOrientierung";
import "../../App.css";

const Einbuergerungstest = () => {
    return (
        <div className="mb-12 md:m-12">
            {" "}
            <div className="cover m-4 overflow-hidden md:flex md:flex-col md:items-center">
                <h1 className="title text-center text-3xl md:text-5xl p-5 text-palette-60 font-block1">
                    Übungen zum Orientierungskurs
                </h1>
                <h3 className="text-center text-xl md:text-2xl p-5 text-palette-60">
                    Bereite dich hier auf den Einbürgerungstest vor!
                </h3>
                <h2 className="coaster text-center text-xl text-palette-60 m-4 md:w-80 md:p-4 md:m-2">
                    Wähle zuerst dein Bundesland aus
                </h2>

                <nav className="coaster p-4 md:w-[80%] flex md:m-2 md:p-20 flex-col items-center justify-center  md:flex-row md:flex-wrap md:justify-center shadow-outer">
                    <NavLink
                        to="/lernbereich/baden-wuerttemberg"
                        element={<Lernbereich />}
                        className="bg-palette-60 w-60  h-20 rounded-xl m-4 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                    >
                        Baden-Württemberg
                    </NavLink>

                    <NavLink
                        to="/lernbereich/bayern"
                        element={<Lernbereich />}
                        className="bg-palette-60 w-60 h-20 rounded-xl m-4 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                    >
                        Bayern
                    </NavLink>

                    <NavLink
                        to="/lernbereich/berlin"
                        element={<Lernbereich />}
                        className="bg-palette-60 w-60 h-20 rounded-xl m-4 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                    >
                        Berlin
                    </NavLink>

                    <NavLink
                        to="/lernbereich/brandenburg"
                        element={<Lernbereich />}
                        className="bg-palette-60 w-60 h-20 rounded-xl m-4 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                    >
                        Brandenburg
                    </NavLink>

                    <NavLink
                        to="/lernbereich/bremen"
                        element={<Lernbereich />}
                        className="bg-palette-60 w-60 h-20 rounded-xl m-4 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                    >
                        Bremen
                    </NavLink>

                    <NavLink
                        to="/lernbereich/hamburg"
                        element={<Lernbereich />}
                        className="bg-palette-60 w-60 h-20 rounded-xl m-4 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                    >
                        Hamburg
                    </NavLink>

                    <NavLink
                        to="/lernbereich/hessen"
                        element={<Lernbereich />}
                        className="bg-palette-60 w-60 h-20 rounded-xl m-4 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                    >
                        Hessen
                    </NavLink>

                    <NavLink
                        to="/lernbereich/mecklenburg-vorpommern"
                        element={<Lernbereich />}
                        className="bg-palette-60 w-60 h-20 rounded-xl m-4 flex justify-center items-center text-xl text-center text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                    >
                        Mecklenburg-Vorpommern
                    </NavLink>

                    <NavLink
                        to="/lernbereich/niedersachsen"
                        element={<Lernbereich />}
                        className="bg-palette-60 w-60 h-20 rounded-xl m-4 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                    >
                        Niedersachsen
                    </NavLink>

                    <NavLink
                        to="/lernbereich/nordrhein-westfalen"
                        element={<Lernbereich />}
                        className="bg-palette-60 w-60 h-20 rounded-xl m-4 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                    >
                        Nordrhein-Westfalen
                    </NavLink>

                    <NavLink
                        to="/lernbereich/rheinland-pfalz"
                        element={<Lernbereich />}
                        className="bg-palette-60 w-60 h-20 rounded-xl m-4 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                    >
                        Rheinland-Pfalz
                    </NavLink>

                    <NavLink
                        to="/lernbereich/saarland"
                        element={<Lernbereich />}
                        className="bg-palette-60 w-60 h-20 rounded-xl m-4 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                    >
                        Saarland
                    </NavLink>

                    <NavLink
                        to="/lernbereich/sachsen"
                        element={<Lernbereich />}
                        className="bg-palette-60 w-60 h-20 rounded-xl m-4 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                    >
                        Sachsen
                    </NavLink>

                    <NavLink
                        to="/lernbereich/sachsen-anhalt"
                        element={<Lernbereich />}
                        className="bg-palette-60 w-60 h-20 rounded-xl m-4 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                    >
                        Sachsen-Anhalt
                    </NavLink>

                    <NavLink
                        to="/lernbereich/schleswig-holstein"
                        element={<Lernbereich />}
                        className="bg-palette-60 w-60 h-20 rounded-xl m-4 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                    >
                        Schleswig-Holstein
                    </NavLink>

                    <NavLink
                        to="/lernbereich/thueringen"
                        element={<Lernbereich />}
                        className="bg-palette-60 w-60 h-20 rounded-xl m-4 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                    >
                        Thüringen
                    </NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Einbuergerungstest;
