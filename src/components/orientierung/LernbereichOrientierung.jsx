import {useParams} from "react-router-dom"
import axios from "axios";
import {useEffect, useState} from "react";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const Lernbereich = () => {

        const [questions, setQuestions] = useState("")
        // const [imageUrl, setImageUrl] = useState("")
        const { bundesland } = useParams()
        
 
        useEffect(() => {
            const fetchData = async () => {
              const response = await axios.get(`${baseUrl}/questions${bundesland}`).data
              const questions = await response.json()
              setQuestions(questions)
            }
            fetchData()
          })

       
    return ( 
        <div className=""><h1>Lernbereich { cat }</h1>
       <div className="">
           {/* <img src={imageUrl} alt="" /> */}
              {/*    {imageUrl && setImageUrl(jsonFromDB.image)} */}

         
       </div>
        </div>
     );
    };
 
export default Lernbereich;