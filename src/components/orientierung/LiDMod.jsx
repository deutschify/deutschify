import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Lernbereich from "./LernbereichOrientierung";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { CgArrowUpO } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import Timer from "./Timer";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const LiDMod = () => {
    const [questions, setQuestions] = useState([]);
    const [isTesting, setIsTesting] = useState(false);

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
        }, 1000 * 60 * 60);
    };
    // const togglePopup = () => {
    //     setIsTesting(!isTesting);
    // };

    const handleClickedAnswer = (qu, answer) => {
        qu.chosenAnswer = answer;
        setQuestions([...questions]);
        console.log(qu.chosenAnswer);
    };

    const cancelHandler = () => {
        setIsTesting(false);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    
    const submitHandler = (qu) => {
        
      if  (qu.chosenAnswer === qu.correctAnswer) {
          console.log(qu.correctAnswer);
      } else {
          console.log("falsche Antwort");
      }
      
    }
    return (
        <div className="">
            Modelltest {category}
            <div className="">{questions.length} Fragen</div>
            <div className="">
                <nav className="m-10 flex justify-end">
                    <NavLink
                        to={`/lernbereich/${category}`}
                        element={<Lernbereich />}
                        className="bg-palette-50 p-6 m-4 text-palette-60 rounded-xl border-4 border-palette-80 text-xl md:w-3/12 md:text-center hover:bg-palette-80 hover:border-palette-50 active:bg-palette-60 active:text-palette-50 active:border-palette-80"
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
                        <div className="flex flex-col items-center fixed left-0 top-56 w-1/12 h-max bg-palette-80 text-palette-50 border-t-4 border-r-4 border-b-4 border-palette-50 rounded-tr-xl rounded-br-xl">
                            <div className="timer stroke-palette-80 m-4">
                                <Timer />
                            </div>

                            <div
                                className="text-8xl m-2"
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
                                className="text-7xl m-2 "
                                onClick={cancelHandler}
                            >
                                <CgCloseO />
                            </div>
                            
                        </div>
                        {questions.map((qu, index) => (
                            <div className="flex justify-center" key={index}>
                                <div className=" bg-palette-80 m-4 w-6/12 p-4 text-palette-60  text-center border-4 border-palette-50 rounded-xl">
                                   {/* <div className="text-palette-60">{qu.index}</div> */}
                                    <div className="bg-palette-50 border-4 border-palette-60 rounded-xl m-8 p-4">
                                        {qu.question}
                                    </div>
                                    <div className="">
                                        {qu.imageURL && (
                                            <AdvancedImage
                                                cldImg={fetchImage(qu.imageURL)}
                                            />
                                        )}
                                    </div>
                                    <div className="flex flex-col items-center">
                                        {" "}
                                        <div
                                            className={
                                                qu.chosenAnswer !== "answerA"
                                                    ? "bg-palette-50 border-4 border-palette-60 rounded-xl w-4/6 m-6 p-4"
                                                    : "bg-palette-40 border-4 border-palette-50 text-palette-50 rounded-xl w-4/6 m-6 p-4"
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
                                                    ? "bg-palette-50 border-4 border-palette-60 rounded-xl w-4/6 m-6 p-4"
                                                    : "bg-palette-40 border-4 border-palette-50 text-palette-50 rounded-xl w-4/6 m-6 p-4"
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
                                                    ? "bg-palette-50 border-4 border-palette-60 rounded-xl w-4/6 m-6 p-4"
                                                    : "bg-palette-40 border-4 border-palette-50 text-palette-50 rounded-xl w-4/6 m-6 p-4"
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
                                                    ? "bg-palette-50 border-4 border-palette-60 rounded-xl w-4/6 m-6 p-4"
                                                    : "bg-palette-40 border-4 border-palette-50 text-palette-50 rounded-xl w-4/6 m-6 p-4"
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
                                        <button className="" onClick={submitHandler}>send</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="flex justify-center"><div className="bg-palette-50 m-4 w-6/12 p-4 text-palette-60  text-center border-4 border-palette-80 rounded-xl hover:bg-palette-80 hover:border-palette-50 active:bg-palette-60 active:text-palette-50 active:border-palette-80" onClick={submitHandler}>Testbogen absenden</div></div>
                        
                    </div>
                    
                )}
            </div>
        </div>
    );
};

export default LiDMod;
