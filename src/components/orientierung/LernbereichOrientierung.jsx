import { useParams, NavLink } from "react-router-dom";
import { Image } from "cloudinary-react";
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
    // const [searchResult, setSearchResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { category } = useParams();

    const usersPerPage = 10;
    const pagesVisited = questionsPerPage * usersPerPage;

    const fetchDataBundesland = async () => {
        setIsLoading(true);
        
        const response = await fetch(
            `${baseUrl}/all-questions/${category}`
        );

        const questions = await response.json();
        setQuestions(questions);
        setIsLoading(false);
        // console.log(questions);
    };
    useEffect(() => {
        
        fetchDataBundesland();
    }, []);

    const filteredQuestions =  () => {
        const filtered = questions?.filter((question) => {
               if (query.length === 0) {
                   // console.log(question);
                   return question;
               } 
                if (query.length > 0 &&  question.question?.toLowerCase().includes(query.toLowerCase()))  
          
                  { return question}  
           });
           console.log(filtered); 
     
           return filtered
       }
   
       useEffect(() => {
         filteredQuestions()
       
       }, [query])

    //    For Pagination
    const displayQuestions = filteredQuestions()
        .slice(pagesVisited, pagesVisited + usersPerPage)

        .map((question, index) => {
            return (
                <div
                    key={index}
                    className="bg-palette-50 m-4 p-2 w-9/12 text-left rounded-xl border-2 border-palette-60 "
                >
                    <div className="text-palette-60  ">{question.number}</div>
                    <div className="text-palette-60 m-2 p-2">
                        {" "}
                        <div className="mb-2 border-b-2 border-palette-60 ">
                            Frage
                        </div>
                        {question.question}
                    </div>{" "}
                    {question.imageURL && (
                        <>
                            <div className="text-palette-60 m-2 p-2">
                                {" "}
                                <Image
                                    cloudName="dsyhfgbli"
                                    publicId={`${question.imageURL}`}
                                />
                            </div>{" "}
                        </>
                    )}
                    <div className="text-palette-60 m-2 p-2">
                        <div className="mb-2 border-b-2 border-palette-60">
                            Antwort
                        </div>
                        {question.correctAnswer}
                    </div>
                </div>
            );
        })


     


    const pageCount = Math.ceil(questions.length / usersPerPage);
    const changePage = ({ selected }) => {
        setQuestionsPerPage(selected);
    };

 
    
    return (
        <div className="border-4 border-palette-50 m-2 p-4 rounded-xl text-center">
            <h1 className="text-palette-50 text-2xl">
                Bereite dich auf den "Leben in Deutschland - Test" vor
            </h1>
            <nav className="flex justify-between md:text-2xl">
                <NavLink
                    to={`/lernbereich/${category}/excercise`}
                    element={<LiDExc />}
                    className="bg-palette-50 p-6 m-4 text-palette-60 rounded-xl border-4 border-palette-80 md:w-4/12 hover:bg-palette-80 hover:border-palette-50 active:bg-palette-60 active:text-palette-50 active:border-palette-80"
                >
                    Zum Übungstest
                </NavLink>
                <div className="p-4">
                    {/* Searchbar für Testfragen */}
                    <div className="">
                        <input
                            className="searchInput"
                            type="text"
                            placeholder="Stichwort..."
                            onChange={(event) => {
                                setQuery(event.target.value);
                                
                            }}
                        />
                    </div>
                    <div className="text-palette-80">
                        {filteredQuestions().length} Fragen
                    </div>
                </div>

                <NavLink
                    to={`/lernbereich/${category}/modelltest`}
                    element={<LiDMod />}
                    className="bg-palette-50 p-6 m-4 text-palette-60 rounded-xl border-4 border-palette-80 md:w-4/12 hover:bg-palette-80 hover:border-palette-50 active:bg-palette-60 active:text-palette-50 active:border-palette-80"
                >
                    Zum Modelltest
                </NavLink>
            </nav>
            <div className="bg-palette-80 rounded-xl border-4 border-palette-50">
                <div className=" text-palette-60 p-6">
                    <div className="flex flex-col items-center">
                        <div className="text-2xl ">
                            Fragen zu {category.charAt(0).toUpperCase() + category.slice(1)}
                        </div>
                        <div className="bg-palette-60 border-4 border-palette-50 rounded-xl text-palette-50 flex flex-col items-center w-6/12  p-10">{isLoading  ? <Circles color="#2F4858"
/>  : displayQuestions}  </div>
                        
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
