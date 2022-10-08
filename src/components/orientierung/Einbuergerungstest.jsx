import { useParams, Route, Routes, NavLink } from "react-router-dom";
import axios from "axios";
// import { baseUrl } from "../../App";
import Lernbereich from "./LernbereichOrientierung";
import "../../App.css";


const Einbuergerungstest = () => {


    return (
        <div className=" bg-palette-80 m-10 shadow-bs border-4 border-palette-50 rounded-xl shadow-outer">
            <h1 className="title text-center text-5xl m-10 text-palette-60 font-block1">
                Übungen zum Orientierungskurs <br/>
                
            </h1>
            <h3 className="text-center text-xl m-10 text-palette-60">Bereite dich hier auf den Einbürgerungstest vor!</h3>
            <h2 className="text-center text-xl text-palette-60">
                Wähle zuerst dein Bundesland aus
            </h2>

            <nav className="bg-palette-50  rounded-xl p-4 flex flex-col items-center justify-center mx-16 my-8 shadow-bs border-4 border-palette-60 md:flex-row md:flex-wrap md:w-11/12 md:justify-center shadow-outer">
                <NavLink
                    to="/lernbereich/baden-wuerttemberg"
                    element={<l />}
                    className="bundeslandBtn bg-palette-60 w-80 h-20 rounded-xl m-2 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                >
                    Baden-Württemberg
                </NavLink>

                <NavLink
                    to="/lernbereich/bayern"
                    element={<Lernbereich />}
                    className="bundeslandBtn bg-palette-60 w-80 h-20 rounded-xl m-2 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                >
                    Bayern
                </NavLink>

                <NavLink
                    to="/lernbereich/berlin"
                    element={<Lernbereich />}
                    className="bundeslandBtn bg-palette-60 w-80 h-20 rounded-xl m-2 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                >
                    Berlin
                </NavLink>

                <NavLink
                    to="/lernbereich/brandenburg"
                    element={<Lernbereich />}
                    className="bundeslandBtn bg-palette-60 w-80 h-20 rounded-xl m-2 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                >
                    Brandenburg
                </NavLink>

                <NavLink
                    to="/lernbereich/bremen"
                    element={<Lernbereich />}
                    className="bundeslandBtn bg-palette-60 w-80 h-20 rounded-xl m-2 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                >
                    Bremen
                </NavLink>

                <NavLink
                    to="/lernbereich/hamburg"
                    element={<Lernbereich />}
                    className="bundeslandBtn bg-palette-60 w-80 h-20 rounded-xl m-2 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                >
                    Hamburg
                </NavLink>

                <NavLink
                    to="/lernbereich/hessen"
                    element={<Lernbereich />}
                    className="bundeslandBtn bg-palette-60 w-80 h-20 rounded-xl m-2 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                >
                    Hessen
                </NavLink>

                <NavLink
                    to="/lernbereich/mecklenburg-vorpommern"
                    element={<Lernbereich />}
                    className="bundeslandBtn bg-palette-60 w-80 h-20 rounded-xl m-2 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                >
                    Mecklenburg-Vorpommern
                </NavLink>

                <NavLink
                    to="/lernbereich/niedersachsen"
                    element={<Lernbereich />}
                    className="bundeslandBtn bg-palette-60 w-80 h-20 rounded-xl m-2 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                >
                    Niedersachsen
                </NavLink>

                <NavLink
                    to="/lernbereich/nordrhein-westfalen"
                    element={<Lernbereich />}
                    className="bundeslandBtn bg-palette-60 w-80 h-20 rounded-xl m-2 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                >
                    Nordrhein-Westfalen
                </NavLink>

                <NavLink
                    to="/lernbereich/rheinland-pfalz"
                    element={<Lernbereich />}
                    className="bundeslandBtn bg-palette-60 w-80 h-20 rounded-xl m-2 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                >
                    Rheinland-Pfalz
                </NavLink>

                <NavLink
                    to="/lernbereich/saarland"
                    element={<Lernbereich />}
                    className="bundeslandBtn bg-palette-60 w-80 h-20 rounded-xl m-2 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                >
                    Saarland
                </NavLink>

                <NavLink
                    to="/lernbereich/sachsen"
                    element={<Lernbereich />}
                    className="bundeslandBtn bg-palette-60 w-80 h-20 rounded-xl m-2 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                >
                    Sachsen
                </NavLink>

                <NavLink
                    to="/lernbereich/sachsen-anhalt"
                    element={<Lernbereich />}
                    className="bundeslandBtn bg-palette-60 w-80 h-20 rounded-xl  m-2 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                >
                    Sachsen-Anhalt
                </NavLink>

                <NavLink
                    to="/lernbereich/schleswig-holstein"
                    element={<Lernbereich />}
                    className="bundeslandBtn bg-palette-60 w-80 h-20 rounded-xl m-2 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                >
                    Schleswig-Holstein
                </NavLink>

                <NavLink
                    to="/lernbereich/thueringen"
                    element={<Lernbereich />}
                    className="bundeslandBtn bg-palette-60 w-80 h-20 rounded-xl m-2 flex justify-center items-center text-xl text-palette-50 hover:text-palette-80 font-block3 font-bold shadow-inner hover:underline underline-offset-4"
                >
                    Thüringen
                </NavLink>



                
            </nav>

        </div>
    );
};

export default Einbuergerungstest;
