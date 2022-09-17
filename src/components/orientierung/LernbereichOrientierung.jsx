import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LiDExc from "../orientierung/LiDExc";
import LiDMod from "../orientierung/LiDMod"

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const Lernbereich = () => {
    const [questions, setQuestions] = useState([]);
    // const [imageUrl, setImageUrl] = useState("")
    const { category } = useParams();

    useEffect(() => {
        const fetchDataBundesland = async () => {
            const response = await fetch(
                `${baseUrl}/all-questions/${category}`
            );
            const questions = await response.json();
            setQuestions(questions);
        };

        //   const fetchDataDeutschland = async () => {
        //     const response = await fetch(
        //         `${baseUrl}/all-questions/deutschland`
        //     );
        //     const questions = await response.json();
        //     setQuestions(questions);
        // };
        fetchDataBundesland();
        // fetchDataDeutschland();
    });

    //       const fetchData = async () => {
    //     const response = await Promise.all([

    //         fetch(`${baseUrl}/all-questions/${category}`). then((response) => response.json()),
    //         fetch(`${baseUrl}/all-questions/deutschland`).then((response) => response.json())

    //     ]);
    //     let questions = await response.json();
    //     setQuestions(questions);
    // };
    // fetchData();
    //   });

    return (
        <div className="border-4 border-palette-50 m-2 p-4 rounded-xl text-center">
            <h1 className="text-palette-50 text-2xl">
                Bereite dich auf den "Leben in Deutschland - Test" vor
            </h1>
            <nav className="flex justify-between md:text-2xl">
                <NavLink
                    to="/lernbereich/excercise/:category/*"
                    element={<LiDExc/>}
                    className="bg-palette-50 p-6 m-4 text-palette-60 rounded-xl border-4 border-palette-80 md:w-4/12 hover:bg-palette-80 hover:border-palette-50 active:bg-palette-60 active:text-palette-50 active:border-palette-80"
                >
                    Zum Übungstest
                </NavLink>
                <NavLink
                    to="/lernbereich/modell/:category/*"
                    element={<LiDMod/>}
                    className="bg-palette-50 p-6 m-4 text-palette-60 rounded-xl border-4 border-palette-80 md:w-4/12 hover:bg-palette-80 hover:border-palette-50 active:bg-palette-60 active:text-palette-50 active:border-palette-80"
                >
                    Zum Modelltest
                </NavLink>
            </nav>
            <div className="bg-palette-80 rounded-xl border-4 border-palette-50">
                {/* <img src={imageUrl} alt="" /> */}
                {/*    {imageUrl && setImageUrl(jsonFromDB.image)} */}
                <div className="flex flex-col items-center text-palette-60 p-6">
                    <div className="text-2xl capitalize">Fragen zu {category}</div>

                    {questions.map((question, index) => {
                        return (
                            <div
                                key={index}
                                className="bg-palette-50 m-4 p-2 w-9/12 text-left rounded-xl border-2 border-palette-60 "
                            >
                                <div className="text-palette-60  ">
                                    {question.number}
                                </div>
                                <div className="text-palette-60 m-2 p-2">
                                    {" "}
                                    <div className="mb-2 border-b-2 border-palette-60 ">
                                        Frage:
                                    </div>
                                    {question.question}
                                </div>{" "}
                                <div className="text-palette-60 m-2 p-2">
                                    <div className="mb-2 border-b-2 border-palette-60">
                                        Antwort:
                                    </div>
                                    {question.correctAnswer}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Lernbereich;
