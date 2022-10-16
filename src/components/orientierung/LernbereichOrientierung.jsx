import { useParams, NavLink } from "react-router-dom";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import LiDExc from "../orientierung/LiDExc";
import LiDMod from "../orientierung/LiDMod";
import { Circles } from "react-loader-spinner";
import { useStore } from "../../store";
import { BsTranslate } from "react-icons/bs";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const Lernbereich = () => {
    const [questions, setQuestions] = useState([]);
    const [questionsPerPage, setQuestionsPerPage] = useState(0);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [questionId, setQuestionId] = useState("");
    const textArr = useStore((state) => state.textArr);
    const [isClicked, setIsClicked] = useState(false);
    const translation = useStore((state) => state.translation);
    const fetchCurrentUser = useStore((state) => state.fetchCurrentUser);
    const currentUser = useStore((state) => state.currentUser);

    // Create a Cloudinary instance and set your cloud name.
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

    const usersPerPage = 10;
    const pagesVisited = questionsPerPage * usersPerPage;

    const fetchDataBundesland = async () => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}/all-questions/${category}`);

        const questions = await response.json();
        setQuestions(questions);
        setIsLoading(false);
    };
    useEffect(() => {
        fetchDataBundesland();
    }, []);

    // Searchbar for all questions
    const filteredQuestions = () => {
        const filtered = questions?.filter((question) => {
            if (query.length === 0) {
                return question;
            }
            if (
                (query.length > 0 &&
                    question.question
                        ?.toLowerCase()
                        .includes(query.toLowerCase()),
                // question.correctAnswer in question
                //     ? question[question.correctAnswer]
                //     : question.correctAnswer
                //           .toLowerCase()
                //           .includes(query.toLowerCase()),
                question.answerA?.toLowerCase().includes(query.toLowerCase()),
                question.answerB?.toLowerCase().includes(query.toLowerCase()),
                question.answerC?.toLowerCase().includes(query.toLowerCase()),
                question.answerD?.toLowerCase().includes(query.toLowerCase()),
                question.explanation
                    ?.toLowerCase()
                    .includes(query.toLowerCase()))
            ) {
                return question;
            }
            if (question.number.includes(query)) {
                return question;
            }
        });

        return filtered;
    };

    useEffect(() => {
        filteredQuestions();
    }, [query]);

    const filteredResults = filteredQuestions();

    const handelClick = (text, num, e) => {
        console.log(e.currentTarget.id);
        const id = e.currentTarget.id;
        console.log(text);
        translation(
            text,
            "de",
            currentUser.language.substring(0, 2).toLowerCase()
        );
        console.log(textArr);
        setQuestionId(id);
        setIsClicked(true);
    };

    //    For Pagination
    const displayQuestions = filteredResults
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((question, index) => {
            return (
                <div
                    key={index}
                    className="coaster m-4 text-left border-palette-80 md:w-96"
                >
                    <div className="text-xl text-palette-60 flex items-center justify-center m-2 px-1 border-2 bg-palette-50 border-palette-80 w-2/12 rounded-full">
                        {question.number}
                    </div>
                    <div className="text-xl text-palette-60 flex items-center justify-center m-2 px-1 border-2 bg-palette-50 border-palette-80 w-2/12 rounded-full">
                        <button
                            id={question.id}
                            onClick={function (e) {
                                return handelClick(
                                    `Frage * ${question.question} * die Antwort * ${question[question.correctAnswer]} * ${question.explanation &&
                                    `die Erklärung * ${question.explanation}`}`,
                                    question.number,
                                    e
                                );
                            }
                            }
                        >
                            <BsTranslate />
                        </button>
                    </div>
                    {isClicked && questionId === question.number ? (
                        <>
                            <div className="text-palette-60 m-2 p-2">
                                {" "}
                                <div className="mb-2 border-b-2 border-palette-80 ">
                                    {textArr[0]}
                                </div>
                                {textArr[1]}
                            </div>{" "}
                            {question.imageURL && (
                                <>
                                    <div className="text-palette-60 m-2 p-2 flex justify-center">
                                        {" "}
                                        <AdvancedImage
                                            className="bg-palette-60 rounded-xl border-4 border-palette-80"
                                            cldImg={fetchImage(
                                                question.imageURL
                                            )}
                                            // publicId={`${question.imageURL}`}
                                        />
                                    </div>{" "}
                                </>
                            )}
                            <div className="text-palette-60 m-2 p-2">
                                <div className="mb-2 border-b-2 border-palette-80">
                                    {textArr[2]}
                                </div>
                                {textArr[3]}
                            </div>
                            {question.explanation !== "" && (
                                <div className="text-palette-60 m-2 p-2">
                                    <div className="mb-2 border-b-2 border-palette-80">
                                        {question.explanation && textArr[4]}
                                    </div>
                                    {question.explanation && textArr[5]}
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <div className="text-palette-60 m-2 p-2">
                                {" "}
                                <div className="mb-2 border-b-2 border-palette-80 ">
                                    Frage
                                </div>
                                {question.question}
                            </div>{" "}
                            {question.imageURL && (
                                <>
                                    <div className="text-palette-60 m-2 p-2 flex justify-center">
                                        {" "}
                                        <AdvancedImage
                                            className="bg-palette-60 rounded-xl border-4 border-palette-80"
                                            cldImg={fetchImage(
                                                question.imageURL
                                            )}
                                            // publicId={`${question.imageURL}`}
                                        />
                                    </div>{" "}
                                </>
                            )}
                            <div className="text-palette-60 m-2 p-2">
                                <div className="mb-2 border-b-2 border-palette-80">
                                    Antwort
                                </div>
                                {question.correctAnswer in question
                                    ? question[question.correctAnswer]
                                    : question.correctAnswer}
                            </div>
                            {question.explanation !== "" && (
                                <div className="text-palette-60 m-2 p-2">
                                    <div className="mb-2 border-b-2 border-palette-80">
                                        Erklärung
                                    </div>
                                    {question.explanation}
                                </div>
                            )}
                        </>
                    )}
                </div>
            );
        });

    const pageCount = Math.ceil(questions.length / usersPerPage);
    const changePage = ({ selected }) => {
        setQuestionsPerPage(selected);
    };

    return (
        <div className="">
            <div className="mb-12 relative">
                <h1 className="title text-palette-80 text-4xl text-center m-5 font-block1">
                    Bereite dich auf den Orientierungstest vor
                </h1>
                <nav className="flex flex-col md:flex-row justify-between items-center md:text-2xl">
                    <NavLink
                        to={`/lernbereich/${category}/excercise`}
                        element={<LiDExc />}
                        className="btn w-60 p-6 border-palette-80 text-center md:w-4/12"
                    >
                        Zum Übungstest
                    </NavLink>

                    {/* Searchbar für Testfragen */}
                    <div className="coaster  border-palette-80 w-72 p-6 m-4 md:w-4/12 shadow-outer">
                        <div className="">
                            <input
                                className="searchInput w-60  h-10 bg-palette-60 rounded-3xl p-6 text-palette-50 placeholder:text-palette-50/75 border-4 border-palette-80 shadow-inner focus:outline-none"
                                type="text"
                                placeholder="Stichwort..."
                                onChange={(event) => {
                                    setQuery(event.target.value);
                                }}
                            />
                        </div>
                        {/* <div className="text-palette-80">
                        {filteredQuestions().length} Fragen
                    </div> */}
                    </div>

                    <NavLink
                        to={`/lernbereich/${category}/modelltest`}
                        element={<LiDMod />}
                        className="btn w-60 p-6 border-palette-80 text-center md:w-4/12"
                    >
                        Zum Modelltest
                    </NavLink>
                </nav>
                <div className="text-2xl text-center p-6 text-palette-50">
                    {!query
                        ? `Hier haben wir alle ${
                              questions.length
                          } Fragen zu Deutschland und
                            ${
                                category.charAt(0).toUpperCase() +
                                category.slice(1)
                            }
                                 für dich`
                        : `Wir haben zu deiner Anfrage ${filteredResults.length} Übereinstimmungen gefunden`}{" "}
                </div>
                <div className="flex justify-center">
                    <div className="cover w-72 md:w-[80%] p-4 h-full">
                        {" "}
                        <div className="">
                            <div className="hidden md:block bg-palette-40 w-3/12 border-4 border-palette-60 rounded-xl sticky left top-2/4 left-72 shadow-inner">
                                <img
                                    src="../../../images/illus/study1.png"
                                    alt=""
                                />
                            </div>{" "}
                            <div className="w-full flex flex-col items-center md:-mt-56 md:items-end md:w-">
                                <div className="flex md:justify-end md:mr-40 md:w-[80%]">
                                    {" "}
                                    <div className="input flex flex-col items-center md:w-6/12  md:p-10 ">
                                        {isLoading ? (
                                            <Circles color="#2F4858" />
                                        ) : (
                                            displayQuestions
                                        )}{" "}
                                    </div>
                                </div>

                                <ReactPaginate
                                    previousLabel={"<"}
                                    nextLabel={">"}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={
                                        " flex md:justify-end md:m-6 m-4 md:mr-36 text-palette-60 text-xxs"
                                    }
                                    pageLinkClassName={
                                        "md:p-4 p-2  border-4 border-palette-50 rounded-xl hover:bg-palette-50 hover:border-palette-60 hover:text-palette-60 active:bg-palette-60 active:text-palette-50 active:border-palette-50"
                                    }
                                    previousLinkClassName={
                                        // "w-4 md: text-palette-60 p-2  border-4 border-palette-50 rounded-xl hover:bg-palette-50 hover:border-palette-60 hover:text-palette-60 active:bg-palette-60 active:text-palette-50 active:border-palette-50"
                                        "p-2 md:p-4 md:m-10 border-4 border-palette-50 rounded-xl hover:bg-palette-50 hover:border-palette-60 active:bg-palette-60 active:text-palette-50 active:border-palette-50"
                                    }
                                    nextLinkClassName={
                                        "p-2 md:p-4 md:m-10 border-4 border-palette-50 rounded-xl hover:bg-palette-50 hover:border-palette-60 active:bg-palette-60 active:text-palette-50 active:border-palette-50"
                                    }
                                    activeClassName={"text-sm text-palette-50"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lernbereich;
