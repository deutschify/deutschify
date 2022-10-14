import { useState, useEffect } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import Lernbereich from "./LernbereichOrientierung";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { CgArrowUpO } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { TiArrowRightOutline } from "react-icons/ti";
import { TiArrowLeftOutline } from "react-icons/ti";
import Timer from "./Timer";
import TimeoutPopup from "./TimeoutPopup";
import { useStore } from "../../store";
// import ResultLidMod from "./ResultLidMod";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const LiDMod = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isTesting, setIsTesting] = useState(false);
    const [timePopup, setTimePopup] = useState(false);
    const [isShown, setIsShown] = useState(false);
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
        fetchDataForModelltest(category);
    }, []);

    const togglePopup = () => {
        setTimePopup(true);
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
        setIsClicked((clicked) => !clicked);
    };

    const handleClickedAnswer = (qu, answer) => {
        // const key = Object.keys(qu).find(key => qu[key] === answer)
        qu.chosenAnswer = answer;
        [...questions, qu.chosenAnswer];
        clicked();
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
            <div className="">
                <div className="flex justify-center">
                    {" "}
                    {!isTesting && (
                        <div className="bg-palette-80 w-11/12  md:w-6/12 flex flex-col items-center justify-center text-palette-60 border-4 border-palette-50 rounded-xl m-4 p-4 shadow-outer">
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
                        <div className="relative">
                            <div
                                className={
                                    (isShown ? "left-0" : "-left-60") +
                                    " flex md:flex-col items-center justify-end justify-around w-72 fixed top-40 left-10 right-20  md:left-0 md:top-56 md:w-1/12 h-max bg-palette-50 md:bg-palette-80 text-palette-60 md:text-palette-50 border-t-4 border-r-4 border-b-4 border-palette-50 rounded-tr-xl rounded-br-xl shadow-outer transition-ease-in duration-1000"
                                }
                                onClick={() => setIsShown(!isShown)}
                            >
                                <div className="timer stroke-palette-80 md:m-4">
                                    <Timer />
                                </div>

                                <div
                                    className="text-7xl m-0 md:m-2"
                                    onClick={() => {
                                        window.scrollTo({
                                            top: 0,
                                            left: 0,
                                            behavior: "smooth",
                                        });
                                    }}
                                >
                                    <CgArrowUpO />
                                </div>
                                <div
                                    className="text-5xl md:m-2 relative"
                                    onClick={cancelHandler}
                                >
                                    <CgCloseO />
                                </div>
                                {isShown ? (
                                    <TiArrowLeftOutline
                                        className="text-3xl border-2 border-palette-60 rounded-full md:hidden"
                                        onClick={() => setIsShown(!isShown)}
                                    />
                                ) : (
                                    <TiArrowRightOutline
                                        className="text-3xl border-2 border-palette-60 rounded-full md:hidden"
                                        onClick={() => setIsShown(!isShown)}
                                    />
                                )}
                            </div>
                        </div>

                        {questions.map((qu, index) => (
                            <div
                                className="flex justify-center"
                                key={index}
                            >
                                <div className="flex flex-col items-center bg-palette-80 m-4 w-8/12 p-4 text-palette-60  text-center border-4 border-palette-50 box-content rounded-xl">
                                    <div className="index text-palette-60 bg-palette-50 border-4 border-palette-60 w-16 text-xl rounded-full p-4">
                                        {index + 1}
                                    </div>
                                    <div className="bg-palette-50 w-full border-4 border-palette-60 rounded-xl m-2 p-4">
                                        {qu.question}
                                    </div>
                                    <div className="flex justify-center">
                                        {qu.imageURL && (
                                            <AdvancedImage
                                                cldImg={fetchImage(qu.imageURL)}
                                                className="bg-palette-60 border-palette-50 w-max rounded-xl"
                                            />
                                        )}
                                    </div>
                                    <div className="flex flex-col items-center w-full md:w-6/12 m-2 box-content">
                                        {Object.values(
                                            Object.fromEntries(
                                                Object.entries(qu).filter(
                                                    ([key]) =>
                                                        key.includes("answer")
                                                )
                                            )
                                        ).map((choice, i) => {
                                            return (
                                                <div
                                                    onClick={() =>
                                                        handleClickedAnswer(
                                                            qu,
                                                            Object.keys(
                                                                qu
                                                            ).find(
                                                                (key) =>
                                                                    qu[key] ===
                                                                    choice
                                                            )
                                                        )
                                                    }
                                                    className={`border-4 border-palette-60 rounded-xl w-5/6 text-auto m-4 p-4 cursor-pointer ${
                                                        Object.keys(qu).find(
                                                            (key) =>
                                                                qu[key] ===
                                                                choice
                                                        ) !== qu.chosenAnswer
                                                            ? // !isClicked
                                                              "bg-palette-50 hover:bg-palette-60 hover:border-palette-50 hover:text-palette-50 w-full"
                                                            : "bg-palette-40"
                                                    }`}
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
            <nav className="m-10 flex justify-end">
                <NavLink
                    to={`/lernbereich/${category}`}
                    element={<Lernbereich />}
                    className="bg-palette-50 p-6 m-4 text-palette-60 rounded-xl border-4 border-palette-80 text-xl w-full text-center md:w-3/12 md:text-center hover:bg-palette-80 hover:border-palette-50 active:bg-palette-60 active:text-palette-50 active:border-palette-80 shadow-outer"
                >
                    Zurück zum Lernbereich
                </NavLink>
            </nav>
        </div>
    );
};

export default LiDMod;
