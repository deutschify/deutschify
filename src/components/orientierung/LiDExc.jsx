import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Lernbereich from "./LernbereichOrientierung";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import "../../App.css";
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
                number: rawDeutschlandquestion.number,
                question: rawDeutschlandquestion.question,
                answerA: rawDeutschlandquestion.answerA,
                answerB: rawDeutschlandquestion.answerB,
                answerC: rawDeutschlandquestion.answerC,
                answerD: rawDeutschlandquestion.answerD,
                answerAButtonClass: "normal",
                answerBButtonClass: "normal",
                answerCButtonClass: "normal",
                answerDButtonClass: "normal",
                correctAnswer: rawDeutschlandquestion.correctAnswer,
                imageURL: rawDeutschlandquestion.imageURL,
                current: index === 0,
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

    const goToNextQuestion = () => {
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
        }

        if (displayQuestions.filter((m) => m.current).length === 0) {
            displayQuestions[0].current = true;
            console.log(displayQuestions);
        }
    };

    const nextQuestionHandler = () => {
        goToNextQuestion();
        setDisplayQuestions([...displayQuestions]);
    };

    const prevQuestionHandler = () => {
        displayQuestions.reverse();
        goToNextQuestion();
        displayQuestions.reverse();
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

    const rightAnswerHandler = (answer) => {
        const displayQuestion = displayQuestions.find((m) => m.current)
        
        const chosenAnswerText = displayQuestion[answer]
        console.log(chosenAnswerText);
        if (chosenAnswerText === displayQuestion.correctAnswer) {
            console.log("right");
            displayQuestion[answer + "ButtonClass"] = "right"
            console.log(displayQuestion);
           
        } else {
            // console.log("wrong");
            displayQuestion[answer + "ButtonClass"] = "wrong"
            displayQuestion[displayQuestion.correctAnswer + "ButtonClass"] = "right"

        }
         setDisplayQuestions([...displayQuestions]);
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
                <div className="m-6 w-7/12 p-10 h-100 bg-palette-80 text-palette-60 text-xl flex flex-col items-center justify-start border-4 border-palette-50 rounded-xl">
                    {canDisplayQuestions() && (
                        <>
                            {" "}
                            <div className="">
                                {displayQuestions.find((m) => m.current).number}
                            </div>
                            <div className="bg-palette-50 p-4 border-4 border-palette-60 rounded-xl m-4 ">
                                {
                                    displayQuestions.find((m) => m.current)
                                        .question
                                }
                            </div>
                            {/* <div className="">{
                                
                                    displayQuestions.find((m) => m.current)
                                        .imageURL && (
                                            <>
                                                <div className="">
                                                    {" "}
                                                    <Image
                                                        cloudName="dsyhfgbli"
                                                        publicId={`${displayQuestions.find((m) => m.current)
                                                            .imageURL}`}
                                                    />
                                                </div>{" "}
                                            </>
                                        )
                                }</div> */}
                            <div className="">
                                <button
                                    className={`${displayQuestions.find((m) => m.current).answerAButtonClass}   bg-palette-50 p-4 border-4 border-palette-60 rounded-xl m-4 hover:bg-palette-60 hover:border-palette-50 hover:text-palette-50`}
                                    onClick={() =>
                                        rightAnswerHandler("answerA")
                                    }
                                >
                                    {
                                        displayQuestions.find((m) => m.current)
                                            .answerA
                                    }
                                </button>
                                <button
                                    className={`${displayQuestions.find((m) => m.current).answerBButtonClass} bg-palette-50 p-4 border-4 border-palette-60 rounded-xl m-4 hover:bg-palette-60 hover:border-palette-50 hover:text-palette-50`}
                                    onClick={() =>
                                        rightAnswerHandler("answerB")
                                    }
                                >
                                    {
                                        displayQuestions.find((m) => m.current)
                                            .answerB
                                    }
                                </button>
                                <button
                                    className={`${displayQuestions.find((m) => m.current).answerCButtonClass} bg-palette-50 p-4 border-4 border-palette-60 rounded-xl m-4 hover:bg-palette-60 hover:border-palette-50 hover:text-palette-50`}
                                    onClick={() =>
                                        rightAnswerHandler("answerC")
                                    }
                                >
                                    {
                                        displayQuestions.find((m) => m.current)
                                            .answerC
                                    }
                                </button>
                                <button
                                    className={`${displayQuestions.find((m) => m.current).answerDButtonClass} bg-palette-50 p-4 border-4 border-palette-60 rounded-xl m-4 hover:bg-palette-60 hover:border-palette-50 hover:text-palette-50`}
                                    onClick={() =>
                                        rightAnswerHandler("answerD")
                                    }
                                >
                                    {
                                        displayQuestions.find((m) => m.current)
                                            .answerD
                                    }
                                </button>
                            </div>
                        </>
                    )}
                    <div className="mt-20 flex justify-between  w-full">
                        {" "}
                        <button
                            className="border-4 border-palette-60 w-4/12 p-4 rounded-xl bg-palette-50 hover:bg-palette-60 hover:border-palette-50 hover:text-palette-80"
                            onClick={prevQuestionHandler}
                        >
                            <div className="flex justify-center flex-unwrap">
                                {" "}
                                <MdArrowBackIos className="text-3xl" />
                                vorherige Frage
                            </div>
                        </button>
                        <button
                            className="border-4 border-palette-60 p-4 w-4/12 rounded-xl bg-palette-50 hover:bg-palette-60 hover:border-palette-50 hover:text-palette-80"
                            onClick={nextQuestionHandler}
                        >
                            <div className="flex justify-center flex-unwrap">
                                nächste Frage{" "}
                                <MdArrowForwardIos className="text-3xl" />{" "}
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiDExc;
