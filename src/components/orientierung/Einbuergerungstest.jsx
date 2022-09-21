import { useParams, Route, Routes, NavLink } from "react-router-dom";
import axios from "axios";
// import { baseUrl } from "../../App";
import Lernbereich from "./LernbereichOrientierung";


const Einbuergerungstest = () => {


    return (
        <div className=" bg-palette-80 m-10 shadow-bs border-4 border-palette-80 rounded-xl ">
            <h1 className="text-center text-2xl m-10 text-palette-50">
                Übungen zu "Leben in Deutschland"
            </h1>
            <h2 className="text-center text-xl text-palette-50">
                Wähle zuerst dein Bundesland aus
            </h2>

            <nav className="bg-palette-50  rounded-xl p-4 flex flex-col items-center justify-center mx-16 my-8 shadow-bs border-4 border-palette-60 md:flex-row md:flex-wrap md:w-11/12 md:justify-center ">
                <NavLink
                    to="/lernbereich/baden-wuerttemberg"
                    element={<l />}
                    className="bg-palette-60 w-80 h-20 rounded-xl border-palette-50 border-2 m-2 flex justify-center items-center text-xl text-palette-50 hover:bg-palette-50 hover:border-palette-60 hover:text-palette-60 font-block3 font-bold"
                >
                    Baden-Württemberg
                </NavLink>

                <NavLink
                    to="/lernbereich/bayern"
                    element={<Lernbereich />}
                    className="bg-palette-60 w-80 h-20 rounded-xl border-palette-50 border-2 m-2 flex justify-center items-center text-xl text-palette-50 hover:bg-palette-50 hover:border-palette-60 hover:text-palette-60 font-block3 font-bold"
                >
                    Bayern
                </NavLink>

                <NavLink
                    to="/lernbereich/berlin"
                    element={<Lernbereich />}
                    className="bg-palette-60 w-80 h-20 rounded-xl border-palette-50 border-2 m-2 flex justify-center items-center text-xl text-palette-50 hover:bg-palette-50 hover:border-palette-60 hover:text-palette-60 font-block3 font-bold"
                >
                    Berlin
                </NavLink>

                <NavLink
                    to="/lernbereich/brandenburg"
                    element={<Lernbereich />}
                    className="bg-palette-60 w-80 h-20 rounded-xl border-palette-50 border-2 m-2 flex justify-center items-center text-xl text-palette-50 hover:bg-palette-50 hover:border-palette-60 hover:text-palette-60 font-block3 font-bold"
                >
                    Brandenburg
                </NavLink>

                <NavLink
                    to="/lernbereich/bremen"
                    element={<Lernbereich />}
                    className="bg-palette-60 w-80 h-20 rounded-xl border-palette-50 border-2 m-2 flex justify-center items-center text-xl text-palette-50 hover:bg-palette-50 hover:border-palette-60 hover:text-palette-60 font-block3 font-bold"
                >
                    Bremen
                </NavLink>

                <NavLink
                    to="/lernbereich/hamburg"
                    element={<Lernbereich />}
                    className="bg-palette-60 w-80 h-20 rounded-xl border-palette-50 border-2 m-2 flex justify-center items-center text-xl text-palette-50 hover:bg-palette-50 hover:border-palette-60 hover:text-palette-60 font-block3 font-bold"
                >
                    Hamburg
                </NavLink>

                <NavLink
                    to="/lernbereich/hessen"
                    element={<Lernbereich />}
                    className="bg-palette-60 w-80 h-20 rounded-xl border-palette-50 border-2 m-2 flex justify-center items-center text-xl text-palette-50 hover:bg-palette-50 hover:border-palette-60 hover:text-palette-60 font-block3 font-bold"
                >
                    Hessen
                </NavLink>

                <NavLink
                    to="/lernbereich/mecklenburg-vorpommern"
                    element={<Lernbereich />}
                    className="bg-palette-60 w-80 h-20 rounded-xl border-palette-50 border-2 m-2 flex justify-center items-center text-xl text-palette-50 hover:bg-palette-50 hover:border-palette-60 hover:text-palette-60 font-block3 font-bold"
                >
                    Mecklenburg-Vorpommern
                </NavLink>

                <NavLink
                    to="/lernbereich/niedersachsen"
                    element={<Lernbereich />}
                    className="bg-palette-60 w-80 h-20 rounded-xl border-palette-50 border-2 m-2 flex justify-center items-center text-xl text-palette-50 hover:bg-palette-50 hover:border-palette-60 hover:text-palette-60 font-block3 font-bold"
                >
                    Niedersachsen
                </NavLink>

                <NavLink
                    to="/lernbereich/nordrhein-westfalen"
                    element={<Lernbereich />}
                    className="bg-palette-60 w-80 h-20 rounded-xl border-palette-50 border-2 m-2 flex justify-center items-center text-xl text-palette-50 hover:bg-palette-50 hover:border-palette-60 hover:text-palette-60 font-block3 font-bold"
                >
                    Nordrhein-Westfalen
                </NavLink>

                <NavLink
                    to="/lernbereich/rheinland-pfalz"
                    element={<Lernbereich />}
                    className="bg-palette-60 w-80 h-20 rounded-xl border-palette-50 border-2 m-2 flex justify-center items-center text-xl text-palette-50 hover:bg-palette-50 hover:border-palette-60 hover:text-palette-60 font-block3 font-bold"
                >
                    Rheinland-Pfalz
                </NavLink>

                <NavLink
                    to="/lernbereich/saarland"
                    element={<Lernbereich />}
                    className="bg-palette-60 w-80 h-20 rounded-xl border-palette-50 border-2 m-2 flex justify-center items-center text-xl text-palette-50 hover:bg-palette-50 hover:border-palette-60 hover:text-palette-60 font-block3 font-bold"
                >
                    Saarland
                </NavLink>

                <NavLink
                    to="/lernbereich/sachsen"
                    element={<Lernbereich />}
                    className="bg-palette-60 w-80 h-20 rounded-xl border-palette-50 border-2 m-2 flex justify-center items-center text-xl text-palette-50 hover:bg-palette-50 hover:border-palette-60 hover:text-palette-60 font-block3 font-bold"
                >
                    Sachsen
                </NavLink>

                <NavLink
                    to="/lernbereich/sachsen-anhalt"
                    element={<Lernbereich />}
                    className="bg-palette-60 w-80 h-20 rounded-xl border-palette-50 border-2 m-2 flex justify-center items-center text-xl text-palette-50 hover:bg-palette-50 hover:border-palette-60 hover:text-palette-60 font-block3 font-bold"
                >
                    Sachsen-Anhalt
                </NavLink>

                <NavLink
                    to="/lernbereich/schleswig-holstein"
                    element={<Lernbereich />}
                    className="bg-palette-60 w-80 h-20 rounded-xl border-palette-50 border-2 m-2 flex justify-center items-center text-xl text-palette-50 hover:bg-palette-50 hover:border-palette-60 hover:text-palette-60 font-block3 font-bold"
                >
                    Schleswig-Holstein
                </NavLink>

                <NavLink
                    to="/lernbereich/thueringen"
                    element={<Lernbereich />}
                    className="bg-palette-60 w-80 h-20 rounded-xl border-palette-50 border-2 m-2 flex justify-center items-center text-xl text-palette-50 hover:bg-palette-50 hover:border-palette-60 hover:text-palette-60 font-block3 font-bold"
                >
                    Thüringen
                </NavLink>



                
            </nav>

        </div>
    );
};

export default Einbuergerungstest;
