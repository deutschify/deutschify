import {useParams} from "react-router-dom"
import axios from "axios";
import {useEffect, useState} from "react";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const Lernbereich = () => {

        const [query, setQuery] = useState({})

        const { bundesland } = useParams()

        console.log(bundesland);

        // const getQuestion = () => {

        //     (async () => {
        //         setQuery((await axios.get(`${baseUrl} + "/:bundesland"`)).data);
        //     })();
        // }

        const getQuestion = () => {
            fetch(`${baseUrl}`)
        }
        
        useEffect(() => {
            // getQuestion();
        }, []);
    return ( 
        <div className=""><h1>Lernbereich { bundesland }</h1>
       <div className=""></div>
        </div>
     );
    };
 
export default Lernbereich;