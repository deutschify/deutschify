import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Lernbereich from "./LernbereichOrientierung";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const LiDExc = () => {
    const [displayQuestions, setDisplayQuestions] = useState([]);

    const { category } = useParams();

    const fetchDataBundesland = async () => {
        const response = await fetch(`${baseUrl}/all-questions/${category}`);
        const rawDeutschlandquestions = await response.json();
        // console.log(rawDeutschlandquestions);
        const _displayQuestions = [];

        rawDeutschlandquestions.forEach((rawDeutschlandquestion, index) => {
            const displayQuestion = {
                question: rawDeutschlandquestion.question,

                current: index === 308,
            };
            _displayQuestions.push(displayQuestion);
        });
        // console.log(_displayQuestions.find());

        setDisplayQuestions(_displayQuestions);
    };

    useEffect(() => {
        fetchDataBundesland();
        // console.log(displayQuestions);
    }, []);

    // const prevQuestionHandler = () => {
    //     setCurrentQuestion(current ===  0 ? -1 : current - 1)
    // }

    const nextQuestionHandler = () => {
        let switchNextQuestion = false;
        for (const displayQuestion of displayQuestions) {
            // console.log("hallo");
            if (switchNextQuestion) {
                displayQuestion.current = true;
                break;
            }
            if (displayQuestion.current) {
                displayQuestion.current = false;
                switchNextQuestion = true;
            }
            // console.log();
        }
        if (displayQuestions.filter((m) => m.current).length === 0) {
            displayQuestions[0].current === true;
            console.log(displayQuestions);
        }
        setDisplayQuestions([...displayQuestions]);
    };

    const canDisplayQuestions = () => {
        // displayQuestions.length > 0 &&
        //    displayQuestions.filter((m) => m.current).length >
        //        0
        return (
            displayQuestions.length > 0 &&
            displayQuestions.filter((m) => m.current).length > 0
        );
    };
    return (
        <div className="">
            Übungssatz {category}
            <div className="">{displayQuestions.length} Fragen</div>
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
                <div className="m-10 p-8 h-80 bg-palette-80 text-palette-60 flex flex-col items-center justify-center border-4 border-palette-50 rounded-xl">
                    {canDisplayQuestions() && (
                        <>{displayQuestions.find((m) => m.current).question}</>
                    )}
                    <div className="mt-10 flex justify-between  w-full">
                        {" "}
                        <button
                            className="border-4 border-palette-60 p-4 rounded-xl bg-palette-50"
                            // onClick={prevQuestionHandler}
                        >
                            vorherige Frage
                        </button>
                        <button
                            className="border-4 border-palette-60 p-4 rounded-xl bg-palette-50"
                            onClick={nextQuestionHandler}
                        >
                            nächste Frage
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiDExc;
