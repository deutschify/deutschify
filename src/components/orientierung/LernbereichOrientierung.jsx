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

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const Lernbereich = () => {
    const [questions, setQuestions] = useState([]);
    const [questionsPerPage, setQuestionsPerPage] = useState(0);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

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

    //    For Pagination
    const displayQuestions = filteredResults
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((question, index) => {
            return (
                <div
                    key={index}
                    className="bg-palette-50 m-4 p-2 w-9/12 text-left rounded-xl border-4 border-palette-80 shadow-outer"
                >
                    <div className="text-xl text-palette-60 flex items-center justify-center  px-1 border-2 bg-palette-50 border-palette-80 w-1/12 rounded-full">{question.number}</div>
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
                                    cldImg={fetchImage(question.imageURL)}
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
                </div>
            );
        });

    const pageCount = Math.ceil(questions.length / usersPerPage);
    const changePage = ({ selected }) => {
        setQuestionsPerPage(selected);
    };

    return (
        <div className="border-4 border-palette-50 m-8 p-4 rounded-xl text-center shadow-inner relative">
            <h1 className="text-palette-50 text-2xl">
                Bereite dich auf den Orientierungstest vor
            </h1>
            <nav className="flex justify-between items-center md:text-2xl">
                <NavLink
                    to={`/lernbereich/${category}/excercise`}
                    element={<LiDExc />}
                    className="bg-palette-50 p-6 m-4 text-palette-60 rounded-xl border-4 border-palette-80 md:w-4/12 hover:bg-palette-80 hover:border-palette-50 active:bg-palette-60 active:text-palette-50 active:border-palette-80 shadow-outer"
                >
                    Zum Übungstest
                </NavLink>

                {/* Searchbar für Testfragen */}
                <div className="w-3/12 bg-palette-50 p-6 m-4 text-palette-60 rounded-xl border-4 border-palette-80 md:w-4/12 shadow-outer">
                    <div className="">
                        <input
                            className="searchInput h-10 bg-palette-60 rounded-3xl p-6 text-palette-50 placeholder:text-palette-50/75 border-4 border-palette-80 shadow-inner focus:outline-none"
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
                    className="bg-palette-50 p-6 m-4 text-palette-60 rounded-xl border-4 border-palette-80 md:w-4/12 hover:bg-palette-80 hover:border-palette-50 active:bg-palette-60 active:text-palette-50 active:border-palette-80 shadow-outer"
                >
                    Zum Modelltest
                </NavLink>
            </nav>
            <div className="text-2xl p-6 text-palette-50">
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

            <div className="bg-palette-80 rounded-xl border-4  border-palette-50 shadow-outer h-full m-10 -mt-4 p-10">
                {" "}
                <div className="text-palette-60 p-6 w-full -mt-28 relative">
                    <div className="bg-palette-40 w-3/12 border-4 border-palette-60 rounded-xl sticky left top-2/4 left-40 shadow-inner">
                        <img src="../../../images/illus/study1.png" alt="" />
                    </div>{" "}
                    {/* <div className="bg-palette-40 w-80 border-4 border-palette-60 rounded-xl absolute  left-20 top-3/4  shadow-inner">
                        <img src="../../../images/illus/study3.png" alt="" />
                    </div>{" "} */}
                    {/* <div className="bg-palette-40 w-80 border-4 border-palette-60 rounded-xl absolute top-2/4 right-20   shadow-inner">
                        <img src="../../../images/illus/study2.png" alt="" />
                    </div> */}
                    <div className="flex flex-col items-center -mt-56">
                        <div className="flex justify-end mr-40">
                            {" "}
                            <div className="bg-palette-60 border-4 border-palette-50 rounded-xl text-palette-50 flex flex-col items-center w-6/12  p-10 shadow-inner">
                                {isLoading ? (
                                    <Circles color="#2F4858" />
                                ) : (
                                    displayQuestions
                                )}{" "}
                            </div>
                        </div>

                        <ReactPaginate
                            previousLabel={"vorherige"}
                            nextLabel={"nächste"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"flex justify-center m-6"}
                            pageLinkClassName={
                                "p-4 m-2 border-4 border-palette-50 rounded-xl hover:bg-palette-50 hover:border-palette-60 hover:text-palette-60 active:bg-palette-60 active:text-palette-50 active:border-palette-50"
                            }
                            previousLinkClassName={
                                "p-4 m-10 border-4 border-palette-50 rounded-xl hover:bg-palette-50 hover:border-palette-60 active:bg-palette-60 active:text-palette-50 active:border-palette-50"
                            }
                            nextLinkClassName={
                                "p-4 m-10 border-4 border-palette-50 rounded-xl hover:bg-palette-50 hover:border-palette-60 active:bg-palette-60 active:text-palette-50 active:border-palette-50"
                            }
                            activeClassName={"text-3xl"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lernbereich;
