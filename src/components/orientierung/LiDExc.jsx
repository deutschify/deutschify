import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

import Lernbereich from "./LernbereichOrientierung";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const LiDExc = () => {
    const [questions, setQuestions] = useState([]);

    const { category } = useParams();

    const fetchDataBundesland = async () => {
        const response = await fetch(`${baseUrl}/all-questions/${category}`);
        const questions = await response.json();
        setQuestions(questions);
    };

    useEffect(() => {
        fetchDataBundesland();
    }, []);

    return (
        <div className="">
            Übungssatz {category}
            <div className="">{questions.length} Fragen</div>
            <div className="">
                {" "}
                <nav className="bg-palette-50 p-6 m-4 text-palette-60 rounded-xl border-4 border-palette-80 text-xl md:w-3/12 md:text-center hover:bg-palette-80 hover:border-palette-50 active:bg-palette-60 active:text-palette-50 active:border-palette-80">
                    <NavLink
                        to={`/lernbereich/${category}`}
                        element={<Lernbereich />}
                    >
                        Zurück zum Lernbereich
                    </NavLink>
                </nav>
            </div>
        </div>
    );
};

export default LiDExc;
