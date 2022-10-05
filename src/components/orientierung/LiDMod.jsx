import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Lernbereich from "./LernbereichOrientierung";



const baseUrl = import.meta.env.VITE_BACKEND_URL;

const LiDMod = () => {
    const [questions, setQuestions] = useState([]);
    const [isTesting, setIsTesting] = useState(false);


    const { category } = useParams();

    const fetchDataForModelltest = async () => {
        const response = await fetch(`${baseUrl}/all-questions/${category}`);
        const questionsDB = await response.json();
        const bundesland = questionsDB.filter((question) => {
            return question.category === category;
        });
        // const qu = bundesland[Math.floor(Math.random() * 4)];
        let randomQuestions = [...bundesland]
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
        // console.log(randomQuestion);
        const randomDeutschland = questionsDB.filter((question) => {
            return question.category === "deutschland";
        });
        const randomDeutschlandQuestions = [...randomDeutschland]
            .sort(() => 0.5 - Math.random())
            .slice(0, 30);
        randomQuestions = [...randomQuestions, ...randomDeutschlandQuestions];
        randomQuestions.forEach((randomQuestion) => {
            randomQuestion.chosenAnswer = "";
        });
        setQuestions(randomQuestions);

        //  console.log(questions);
        // console.log({ randomDeutschlandQuestions });
        // console.log(randomQuestion);
    };

    useEffect(() => {
        fetchDataForModelltest();
    }, []);



    const handleStartTest = () => {
        setIsTesting(true);
        setTimeout(() => {
            setIsTesting(false);
            console.log("Time over");

        }, 1000 * 60 * 60);

    };

    const handleClickedAnswer = (qu, answer) => {
        qu.chosenAnswer = answer;
        setQuestions([...questions]);
        console.log(qu.chosenAnswer);
    };
    return (
        <div className="">
            Modelltest {category}
            <div className="">{questions.length} Fragen</div>
            <div className="">
                <nav className="m-10">
                    <NavLink
                        to={`/lernbereich/${category}`}
                        element={<Lernbereich />}className="bg-palette-50 p-6 m-4 text-palette-60 rounded-xl border-4 border-palette-80 text-xl md:w-3/12 md:text-center hover:bg-palette-80 hover:border-palette-50 active:bg-palette-60 active:text-palette-50 active:border-palette-80"
                    >
                        Zurück zum Lernbereich
                    </NavLink>
                </nav>

                <div className="flex justify-center">
                    {" "}
                    {!isTesting && (
                        <div className="bg-palette-80 w-6/12 flex flex-col items-center justify-center text-palette-60 border-4 border-palette-50 rounded-xl p-4">
                            <h1 className="text-4xl p-4 border-b-4 border-palette-50">
                                Willkommen zum Modelltest
                            </h1>
                            <h2 className="text-2xl p-4">Prüfe dein Wissen</h2>
                            <h3 className="w-full text-xl">Anweisungen:</h3>
                            <ul className="list-disc text-lg">
                                <li>Antworte alle 33 Fragen</li>
                                <li>Du hast 60 Minuten Zeit</li>
                                <li>
                                    Sende im Anschluss dein Test ab und erhalte
                                    sofort das Ergebnis
                                </li>
                            </ul>
                            <button
                                className="m-8 bg-palette-50 p-6 border-4 border-palette-60 rounded-3xl w-2/6 text-2xl"
                                onClick={handleStartTest}
                            >
                                Starte den Test
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-center">
                {isTesting && (
                    <div className="">
                        {questions.map((qu, index) => (
                            <div className="flex justify-center" key={index}>
                                <div className=" bg-palette-80 m-4 w-6/12 p-4 text-palette-60  text-center border-4 border-palette-50 rounded-xl">
                                    {" "}
                                    <div className="bg-palette-50 border-4 border-palette-60 rounded-xl m-8 p-4">
                                        {qu.question}
                                    </div>
                                    <div className="flex flex-col items-center">
                                        {" "}
                                        <div
                                            className={
                                                qu.chosenAnswer !== "answerA"
                                                    ? "bg-palette-50 border-4 border-palette-60 rounded-xl w-4/6 m-6 p-4"
                                                    : "bg-palette-40 border-4 border-palette-50 text-palette-50 rounded-xl w-4/6 m-6 p-4"
                                            }
                                            onClick={() => handleClickedAnswer(
                                                qu,
                                                "answerA"
                                            )}
                                        >
                                            {qu.answerA}
                                        </div>
                                        <div
                                            className={
                                                qu.chosenAnswer !== "answerB"
                                                    ? "bg-palette-50 border-4 border-palette-60 rounded-xl w-4/6 m-6 p-4"
                                                    : "bg-palette-40 border-4 border-palette-50 text-palette-50 rounded-xl w-4/6 m-6 p-4"
                                            }
                                            onClick={() => handleClickedAnswer(
                                                qu,
                                                "answerB"
                                            )}
                                        >
                                            {qu.answerB}
                                        </div>
                                        <div
                                            className={
                                                qu.chosenAnswer !== "answerC"
                                                    ? "bg-palette-50 border-4 border-palette-60 rounded-xl w-4/6 m-6 p-4"
                                                    : "bg-palette-40 border-4 border-palette-50 text-palette-50 rounded-xl w-4/6 m-6 p-4"
                                            }
                                            onClick={() => handleClickedAnswer(
                                                qu,
                                                "answerC"
                                            )}
                                        >
                                            {qu.answerC}
                                        </div>
                                        <div
                                            className={
                                                qu.chosenAnswer !== "answerD"
                                                    ? "bg-palette-50 border-4 border-palette-60 rounded-xl w-4/6 m-6 p-4"
                                                    : "bg-palette-40 border-4 border-palette-50 text-palette-50 rounded-xl w-4/6 m-6 p-4"
                                            }
                                            onClick={() => handleClickedAnswer(
                                                qu,
                                                "answerD"
                                            )}
                                        >
                                            {qu.answerD}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LiDMod;
