import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const Lernbereich = () => {
    const [questions, setQuestions] = useState("");
    // const [imageUrl, setImageUrl] = useState("")
    const { bundesland } = useParams();
    console.log(bundesland);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `${baseUrl}/all-questions/${bundesland}`
            );
            const questions = await response.send();
            setQuestions(questions);
        };
        fetchData();
    });

    return (
        <div className="">
            <h1>Lernbereich {bundesland}</h1>
            <div className="">
                {/* <img src={imageUrl} alt="" /> */}
                {/*    {imageUrl && setImageUrl(jsonFromDB.image)} */}

                
            </div>
        </div>
    );
};

export default Lernbereich;
