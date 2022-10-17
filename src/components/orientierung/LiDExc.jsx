import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import Lernbereich from "./LernbereichOrientierung";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import "../../App.css";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { useStore } from "../../store";
import { BsTranslate } from "react-icons/bs";
const baseUrl = import.meta.env.VITE_BACKEND_URL;

const LiDExc = () => {
    const [displayQuestions, setDisplayQuestions] = useState([]);
    const translation = useStore((state) => state.translation);
    const currentUser = useStore((state) => state.currentUser);
    const textArr = useStore((state) => state.textArr);
    const [isClicked, setIsClicked] = useState(false);

    const cld = new Cloudinary({
        cloud: {
            cloudName: "dsyhfgbli",
        },
    });

    const fetchImage = (publicId) => {
        const myImg = cld.image(`deutschify/${publicId}`);
        return myImg;
    };

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

                // imageURL: cld.image(
                //     `deutschify/${rawDeutschlandquestion.imageURL}`
                // ),
                imageURL: rawDeutschlandquestion.imageURL,
                current: index === 0,
                isAnswered: false,
                isFirst: index === 0,
                isLast: index === rawDeutschlandquestion.length - 1,
            };
            _displayQuestions.push(displayQuestion);
        });

        setDisplayQuestions(_displayQuestions);
    };

    useEffect(() => {
        fetchDataBundesland();
    }, []);

    // const myImage = cld.image(`deutschify/${imageURL}`);

    const getCurrentQuestion = () => {
        return displayQuestions.find((m) => m.current);
    };

    const goToNextQuestion = () => {
        let switchNextQuestion = false;
        let index = 0;
        for (const displayQuestion of displayQuestions) {
            if (switchNextQuestion && !displayQuestion.isAnswered) {
                displayQuestion.current = true;
                break;
            }
            if (displayQuestion.current) {
                if (index < displayQuestions.length - 1) {
                    displayQuestion.current = false;
                    switchNextQuestion = true;
                }
            }
            index++;
        }

        if (getCurrentQuestion().length === 0) {
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
        return (
            displayQuestions.length > 0 &&
            displayQuestions.filter((m) => m.current).length > 0
        );
    };

    const rightAnswerHandler = (answer, count) => {
        const displayQuestion = displayQuestions.find((m) => m.current);
        // let answeredQuestions = [];
        const chosenAnswerText = displayQuestion[answer];
        console.log(chosenAnswerText);
        if (chosenAnswerText === displayQuestion.correctAnswer) {
            console.log("right");
            displayQuestion[answer + "ButtonClass"] = "right";
            // answeredQuestions = [...answeredQuestions, displayQuestion.number]
            console.log(displayQuestion);
            // const questionsToAsk = displayQuestions.splice(displayQuestion.isAnswered)
            // console.log(displayQuestions);
        } else {
            // console.log("wrong");
            displayQuestion[answer + "ButtonClass"] = "wrong";
            displayQuestion[displayQuestion.correctAnswer + "ButtonClass"] =
                "right";
            displayQuestion.isAnswered = true;
        }

        setDisplayQuestions([...displayQuestions]);
        // console.log(answeredQuestions);
        //    await axios.post(`${baseUrl}}/current-user`, answeredQuestions)
    };

    const handelClick = (text) => {
        translation(
            text,
            "de",
            currentUser.language.substring(0, 2).toLowerCase()
        );
        console.log(textArr);
        setIsClicked((click) => !click);
    };

    return (
        <>
            {currentUser.accessGroups?.includes("loggedInUsers") ? (
                <div className="mb-10">
                    {" "}
                    {/* Übungssatz {category}
            <div className="">{displayQuestions.length} Fragen</div> */}
                    <div className="flex flex-col items-center justify-center">
                        <div className="coaster m-4 text-left p-4 md:text-2xl md:text-center">
                            Hier kannst du für den Integrationstest lernen.
                            Beantworte dafür nacheinander alle 300 Fragen zu
                            Deutschland und 10 Fragen zu{" "}
                            {category.charAt(0).toUpperCase() +
                                category.slice(1)}
                            . Wiederhole den Test bist du dich sicher genug
                            fühlst.
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <div className="cover w-64 m-4 md:w-[50vw] text-palette-60 flex flex-col items-center justify-center">
                                {canDisplayQuestions() && (
                                    <>
                                        {" "}
                                        <div className="flex">
                                            <div className="coaster text-center m-2 mb-4 md:text-2xl p-2 px-4 md:px-5 rounded-full">
                                                {getCurrentQuestion().number}
                                            </div>
                                            <div className="flex-end coaster text-center m-2 mb-4 md:text-2xl p-1 px-2 md:px-3 rounded-full">
                                                <button
                                                    id={
                                                        getCurrentQuestion()
                                                            .number
                                                    }
                                                    onClick={(e) =>
                                                        handelClick(
                                                            `${
                                                                getCurrentQuestion()
                                                                    .question
                                                            } * ${
                                                                getCurrentQuestion()
                                                                    .answerA
                                                            } * ${
                                                                getCurrentQuestion()
                                                                    .answerB
                                                            } * ${
                                                                getCurrentQuestion()
                                                                    .answerC
                                                            } * ${
                                                                getCurrentQuestion()
                                                                    .answerD
                                                            }`,
                                                            getCurrentQuestion()
                                                                .number,
                                                            e
                                                        )
                                                    }
                                                >
                                                    <BsTranslate />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="coaster w-56 p-2 md:w-10/12 md:text-2xl md:text-center">
                                            {isClicked
                                                ? textArr[0]
                                                : getCurrentQuestion().question}
                                        </div>
                                        <div className="flex justify-center md:w-10/12 md:text-2xl md:text-center md:m-10">
                                            {getCurrentQuestion().imageURL && (
                                                <AdvancedImage
                                                    cldImg={fetchImage(
                                                        getCurrentQuestion()
                                                            .imageURL
                                                    )}
                                                    className="bg-palette-60 rounded-xl border-4 border-palette-80"
                                                />
                                            )}
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <button
                                                className={`${
                                                    getCurrentQuestion()
                                                        .answerAButtonClass
                                                }    bg-palette-50 p-2 border-4 border-palette-60 rounded-xl m-6 hover:bg-palette-60 hover:border-palette-50 hover:text-palette-50 shadow-outer md:text-xl md:w-11/12 md:p-4`}
                                                onClick={() => {
                                                    rightAnswerHandler(
                                                        "answerA"
                                                    );
                                                }}
                                                disabled={
                                                    getCurrentQuestion()
                                                        .isAnswered
                                                }
                                            >
                                                {isClicked
                                                    ? textArr[1]
                                                    : getCurrentQuestion()
                                                          .answerA}
                                            </button>
                                            <button
                                                className={`${
                                                    getCurrentQuestion()
                                                        .answerBButtonClass
                                                } bg-palette-50 p-2 border-4 border-palette-60 rounded-xl m-6 hover:bg-palette-60 hover:border-palette-50 hover:text-palette-50 shadow-outer md:text-xl md:w-11/12 md:p-4`}
                                                onClick={() => {
                                                    rightAnswerHandler(
                                                        "answerB"
                                                    );
                                                }}
                                                disabled={
                                                    getCurrentQuestion()
                                                        .isAnswered
                                                }
                                            >
                                                {isClicked
                                                    ? textArr[2]
                                                    : getCurrentQuestion()
                                                          .answerB}
                                            </button>
                                            <button
                                                className={`${
                                                    getCurrentQuestion()
                                                        .answerCButtonClass
                                                } bg-palette-50 p-2 border-4 border-palette-60 rounded-xl m-6 hover:bg-palette-60 hover:border-palette-50 hover:text-palette-50 shadow-outer md:text-xl md:w-11/12 md:p-4`}
                                                onClick={() => {
                                                    rightAnswerHandler(
                                                        "answerC"
                                                    );
                                                }}
                                                disabled={
                                                    getCurrentQuestion()
                                                        .isAnswered
                                                }
                                            >
                                                {isClicked
                                                    ? textArr[3]
                                                    : getCurrentQuestion()
                                                          .answerC}
                                            </button>
                                            <button
                                                className={`${
                                                    getCurrentQuestion()
                                                        .answerDButtonClass
                                                } bg-palette-50 p-2 border-4 border-palette-60 rounded-xl m-6 hover:bg-palette-60 hover:border-palette-50 hover:text-palette-50 shadow-outer md:text-xl md:w-11/12 md:p-4`}
                                                onClick={() => {
                                                    rightAnswerHandler(
                                                        "answerD"
                                                    );
                                                }}
                                                disabled={
                                                    getCurrentQuestion()
                                                        .isAnswered
                                                }
                                            >
                                                {isClicked
                                                    ? textArr[4]
                                                    : getCurrentQuestion()
                                                          .answerD}
                                            </button>
                                        </div>
                                        <div className="m-10 flex justify-around text-sm md:text-lg md:w-5/6 md:justify-between">
                                            {" "}
                                            <button
                                                className="btn p-2 w-4/12 border-4 border-palette-60"
                                                onClick={prevQuestionHandler}
                                                disabled={
                                                    getCurrentQuestion().isFirst
                                                }
                                            >
                                                <div className="flex justify-center flex-unwrap">
                                                    {" "}
                                                    <MdArrowBackIos className="text-3xl" />
                                                    vorherige Frage
                                                </div>
                                            </button>
                                            <button
                                                className="btn p-2 w-4/12 border-4 border-palette-60"
                                                onClick={nextQuestionHandler}
                                            >
                                                <div className="flex justify-center flex-unwrap">
                                                    nächste Frage{" "}
                                                    <MdArrowForwardIos className="text-3xl" />{" "}
                                                </div>
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                            <nav className="m-6">
                                <NavLink
                                    to={`/lernbereich/${category}`}
                                    element={<Lernbereich />}
                                    className="btn p-5 w-32 md:w-2/12 md:text-center "
                                >
                                    Zurück zum Lernbereich
                                </NavLink>
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

export default LiDExc;
