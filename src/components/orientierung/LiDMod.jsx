import { useState, useEffect } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import Lernbereich from "./LernbereichOrientierung";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { CgArrowUpO } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import Timer from "./Timer";
import TimeoutPopup from "./TimeoutPopup";
import { useStore } from "../../store";
// import ResultLidMod from "./ResultLidMod";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const LiDMod = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isTesting, setIsTesting] = useState(false);
    const [timePopup, setTimePopup] = useState(false);
    const result = useStore((state) => state.result);
    const setResult = useStore((state) => state.setResult);
    const fetchDataForModelltest = useStore(
        (state) => state.fetchDataForModelltest
    );
    const questions = useStore((state) => state.questions);

    const navigate = useNavigate();

    const { category } = useParams();

    const cld = new Cloudinary({
        cloud: {
            cloudName: "dsyhfgbli",
        },
    });

    const fetchImage = (publicId) => {
        const myImg = cld.image(`deutschify/${publicId}`);
        return myImg;
    };

    useEffect(() => {
        fetchDataForModelltest(category)
    }, []);

    const togglePopup = () => {
        setTimePopup(true)
    };

    const handleStartTest = () => {
        setIsTesting(true);
        fetchDataForModelltest(category);
        setTimeout(() => {
            setIsTesting(false);
            setTimePopup(true);
        }, 1000 * 60 * 60);
        setTimePopup(false);
    };

    const clicked = () => {
        setIsClicked(clicked => !clicked)
    }

    const handleClickedAnswer = (qu, answer) => {
        // const key = Object.keys(qu).find(key => qu[key] === answer)
        qu.chosenAnswer = answer;
        [...questions, qu.chosenAnswer];
        clicked()
    };

    const cancelHandler = () => {
        setIsTesting(false);
        questions.splice(0, questions.length);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const handelSubmitBtn = () => {
        let resultScore = 0;
        questions.filter((qu) => {
            if (qu.chosenAnswer === qu.correctAnswer) {
                resultScore++;
            }
        });
        console.log(resultScore);
        if (resultScore < 15) {
            setResult(
                `Du hast den Test mit ${resultScore} richtigen Antworten leider nicht bestanden`
            );
            console.log(result);
        } else if (resultScore >= 15 && resultScore < 17) {
            setResult(
                `Du hast den Integrationstest bestanden, dir fehlen aber ${
                    17 - resultScore
                } richtige Antworten um den Einbürgerungstest zu bestehen`
            );
            console.log(result);
        } else {
            setResult(
                `Du hast ${resultScore} richtige Antworten. 
                 Du hast den Einbürgerungstest bestanden.`
            );
            console.log(result);
        }
        // console.log(questions);
        navigate(`/lernbereich/${category}/modelltest/result`);
    };

    return (
        <div className="">
            {/* Modelltest {category}
            <div className="">{questions.length} Fragen</div> */}
            <div className="">
                <nav className="m-10 flex justify-end">
                    <NavLink
                        to={`/lernbereich/${category}`}
                        element={<Lernbereich />}
                        className="bg-palette-50 p-6 m-4 text-palette-60 rounded-xl border-4 border-palette-80 text-xl w-full text-center md:w-3/12 md:text-center hover:bg-palette-80 hover:border-palette-50 active:bg-palette-60 active:text-palette-50 active:border-palette-80 shadow-outer"
                    >
                        Zurück zum Lernbereich
                    </NavLink>
                </nav>

                <div className="flex justify-center">
                    {" "}
                    {!isTesting && (
                        <div className="bg-palette-80 w-11/12  md:w-6/12 flex flex-col items-center justify-center text-palette-60 border-4 border-palette-50 rounded-xl p-4 shadow-outer">
                            <h1 className="text-4xl p-4 border-b-4 border-palette-50 text-center">
                                Willkommen zum Modelltest
                            </h1>
                            <h2 className="text-2xl p-4">Prüfe dein Wissen</h2>
                            <h3 className="w-full text-xl">Anweisungen:</h3>
                            <ul className="list-disc text-lg pl-10">
                                <li>Antworte alle 33 Fragen</li>
                                <li>Du hast 60 Minuten Zeit</li>
                                <li>
                                    Sende im Anschluss dein Test ab und erhalte
                                    sofort das Ergebnis
                                </li>
                            </ul>
                            <button
                                className="m-8 bg-palette-50 p-6 border-4 border-palette-60 rounded-3xl md:w-2/6 text-2xl shadow-outer"
                                onClick={handleStartTest}
                            >
                                Starte den Test
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-center">
                <div className="">
                    <div className="mt-20">
                        {timePopup && (
                            <TimeoutPopup
                                content={
                                    <>
                                        <p className="shadow-outer">
                                            Die Zeit ist leider abgelaufen.
                                            Versuche es erneut!
                                        </p>
                                    </>
                                }
                                handleClose={togglePopup}
                            />
                        )}
                    </div>
                </div>
                {isTesting && (
                    <div className="">
                        <div className="flex flex-col items-center fixed left-0 md:top-56 md:w-1/12 h-max bg-palette-80 text-palette-50 border-t-4 border-r-4 border-b-4 border-palette-50 rounded-tr-xl rounded-br-xl shadow-outer">
                            <div className="timer stroke-palette-80 m-4">
                                <Timer />
                            </div>

                            <div
                                className="text-8xl m-2 relative"
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                <CgArrowUpO />
                                {/*  <div className="text-palette-60 text-lg z-10 absolute top-5 left-8 opacity-0 hover:opacity-100">
                                    nach oben scrollen
                                </div> */}
                            </div>
                            <div
                                className="text-7xl m-2 relative"
                                onClick={cancelHandler}
                            >
                                <CgCloseO />
                                {/* <div className="text-palette-60 text-lg z-10 absolute top-5 left-4 opacity-0 hover:opacity-100">
                                        abbrechen
                                  
                                </div> */}
                            </div>
                        </div>
                        {/* {questions.map((qu, index) => (
                            <div className="flex justify-center" key={index}>
                                <div className=" bg-palette-80 m-4 w-6/12 p-4 text-palette-60  text-center border-4 border-palette-50 rounded-xl shadow-outer">
                                    <div className="index text-palette-60">
                                        {index + 1}
                                    </div>
                                    <div className="bg-palette-50 border-4 border-palette-60 rounded-xl m-8 p-4 shadow-outer">
                                        {qu.question}
                                    </div>
                                    <div className="flex justify-center">
                                        {qu.imageURL && (
                                            <AdvancedImage
                                                cldImg={fetchImage(qu.imageURL)}
                                                className="bg-palette-60 rounded-xl  border-4 border-palette-50"
                                            />
                                        )}
                                    </div>
                                    <div className="flex flex-col items-center">
                                        {" "}
                                        <div
                                            className={
                                                qu.chosenAnswer !== "answerA"
                                                    ? "bg-palette-50 border-4 border-palette-60 rounded-xl w-4/6 m-6 p-4 shadow-outer"
                                                    : "bg-palette-40 border-4 border-palette-50 text-palette-50 rounded-xl w-4/6 m-6 p-4 shadow-outer"
                                                    ? "bg-palette-50 border-4 border-palette-60 rounded-xl w-4/6 m-6 p-4 cursor-pointer"
                                                    : "bg-palette-40 border-4 border-palette-50 text-palette-50 rounded-xl w-4/6 m-6 p-4 cursor-pointer"
                                            }
                                            onClick={() =>
                                                handleClickedAnswer(
                                                    qu,
                                                    "answerA"
                                                )
                                            }
                                        >
                                            {qu.answerA}
                                        </div>
                                        <div
                                            className={
                                                qu.chosenAnswer !== "answerB"
                                                    ? "bg-palette-50 border-4 border-palette-60 rounded-xl w-4/6 m-6 p-4 shadow-outer"
                                                    : "bg-palette-40 border-4 border-palette-50 text-palette-50 rounded-xl w-4/6 m-6 p-4 shadow-outer"
                                                    ? "bg-palette-50 border-4 border-palette-60 rounded-xl w-4/6 m-6 p-4 cursor-pointer"
                                                    : "bg-palette-40 border-4 border-palette-50 text-palette-50 rounded-xl w-4/6 m-6 p-4 cursor-pointer"
                                            }
                                            onClick={() =>
                                                handleClickedAnswer(
                                                    qu,
                                                    "answerB"
                                                )
                                            }
                                        >
                                            {qu.answerB}
                                        </div>
                                        <div
                                            className={
                                                qu.chosenAnswer !== "answerC"
                                                    ? "bg-palette-50 border-4 border-palette-60 rounded-xl w-4/6 m-6 p-4 shadow-outer"
                                                    : "bg-palette-40 border-4 border-palette-50 text-palette-50 rounded-xl w-4/6 m-6 p-4 shadow-outer"
                                                    ? "bg-palette-50 border-4 border-palette-60 rounded-xl w-4/6 m-6 p-4 cursor-pointer"
                                                    : "bg-palette-40 border-4 border-palette-50 text-palette-50 rounded-xl w-4/6 m-6 p-4 cursor-pointer"
                                            }
                                            onClick={() =>
                                                handleClickedAnswer(
                                                    qu,
                                                    "answerC"
                                                )
                                            }
                                        >
                                            {qu.answerC}
                                        </div>
                                        <div
                                            className={
                                                qu.chosenAnswer !== "answerD"
                                                    ? "bg-palette-50 border-4 border-palette-60 rounded-xl w-4/6 m-6 p-4 shadow-outer"
                                                    : "bg-palette-40 border-4 border-palette-50 text-palette-50 rounded-xl w-4/6 m-6 p-4 shadow-outer"
                                                    ? "bg-palette-50 border-4 border-palette-60 rounded-xl w-4/6 m-6 p-4 cursor-pointer"
                                                    : "bg-palette-40 border-4 border-palette-50 text-palette-50 rounded-xl w-4/6 m-6 p-4 cursor-pointer"
                                            }
                                            onClick={() =>
                                                handleClickedAnswer(
                                                    qu,
                                                    "answerD"
                                                )
                                            }
                                        >
                                            {qu.answerD}
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        ))} */}
                        {questions.map((qu, index) => (
                <div className="flex justify-end md:justify-center" key={index}>
                    <div className="bg-palette-80 m-4 w-8/12 p-4 text-palette-60  text-center border-4 border-palette-50 rounded-xl">
                        <div className="index text-palette-60 bg-palette-50 border-4 border-palette-60 w-16 text-xl rounded-full p-4">{index + 1}</div>
                        <div className="bg-palette-50 border-4 border-palette-60 rounded-xl m-8 p-4">
                            {qu.question}
                        </div>
                        <div className="flex justify-center">
                            {qu.imageURL && (
                                <AdvancedImage
                                    cldImg={fetchImage(qu.imageURL)}
                                    className="bg-palette-60 border-palette-50  w-max rounded-xl"
                                />
                            )}
                        </div>
                        <div className="flex flex-col items-center">
                            {Object.values(
                                Object.fromEntries(
                                    Object.entries(qu).filter(([key]) =>
                                        key.includes("answer")
                                    )
                                )
                            ).map((choice, i) => {
                                return (
                                    <div
                                        onClick={() =>
                                                handleClickedAnswer(
                                                    qu,
                                                    Object.keys(qu).find(key => qu[key] === choice)
                                                )
                                            }
                                        className={
                                            `border-4 border-palette-60 rounded-xl w-4/6 m-6 p-4 cursor-pointer ${Object.keys(qu).find(key => qu[key] === choice) !== qu.chosenAnswer
                                            // !isClicked
                                                ? "bg-palette-50"
                                                : "bg-palette-40"}`
                                        }
                                        key={i}
                                    >
                                        {choice} 
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ))}
                        <div className="flex justify-center">
                            <button
                                className="bg-palette-50 m-4 w-6/12 p-4 text-palette-60  text-center border-4 border-palette-80 rounded-xl hover:bg-palette-80 hover:border-palette-50 active:bg-palette-60 active:text-palette-50 active:border-palette-80 shadow-outer"
                                onClick={handelSubmitBtn}
                            >
                                Testbogen absenden
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LiDMod;
