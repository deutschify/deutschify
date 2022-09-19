import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as qmat from "./qtools/qmat";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const LiDExc = () => {
    const [questions, setQuestions] = useState([]);

    const { category } = useParams();

    const fetchDataBundesland = async () => {
        const response = await fetch(`${baseUrl}/all-questions/${category}`);
        const questions = await response.json();
        setQuestions(questions);
    };

    useEffect(() => {
        fetchDataBundesland();
    }, []);

    return (
        <div className="">
            Übungssatz {category}
            <div className="">{questions.length} Fragen</div>
        </div>
    );
};

export default LiDExc;
