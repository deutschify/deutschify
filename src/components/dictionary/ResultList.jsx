import axios from "axios";
import { useEffect, useState } from "react";
import { useStore } from "../../store";
// import Antonym from "./Antonym";
import Example from "./Example";
import MeanigList from "./MeaningList";
import Synonym from "./Synonym";

const dictionaryAPI = "https://api.dictionaryapi.dev/api/v2/entries/en";

const ResultList = ({ inputValue }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);    
    const textArr = useStore((state) => state.textArr);
    const translation = useStore((state) => state.translation);
    const [preferedLanguage, setPreferedLanguage] = useState("");
    
    // console.log(inputValue);
    const fetchData = async (param) => {
        try {
            setLoading(true);
            const res = await axios(`${dictionaryAPI}/${param[0]}`);
            setResponse(res.data);
            // setPreferedLanguage(param[1].toLowerCase()) 
            // console.log(response);
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (inputValue.length>1) {
            fetchData(inputValue);
        }
    }, [inputValue]);

    if (loading) {
        return (
            <div className="flex flex-col space-y-3 animate-pulse p-4 container mx-auto max-w-2xl">
                <div className="h-6 bg-gray-300 mt-5 rounded-md"></div>
                <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
                <div className="h-8 bg-gray-300 mt-5 rounded-md"></div>
                <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
            </div>
        );
    }

    if (error) {
        return (
            <h3 className="text-center mt-10 font-semibold text-palette-60">
                Keine Definitionen gefunden 😥
            </h3>
        );
    }

    return (
        <div>
            {response && (
                <div>
                    <div>
                        <div>
                            <h3 className="text-2xl font-bold mt-4 text-center text-palette-60  ">
                                Bedeutung & Definitionen:
                            </h3>
                            <MeanigList mean={response} />
                            <h3 className="text-2xl font-bold mt-4 text-center text-palette-60 ">
                                Beispiel:
                            </h3>
                            <Example mean={response} />
                            <h3 className="text-2xl font-bold mt-4 text-center text-palette-60  ">
                                Synonyme:
                            </h3>
                            <Synonym mean={response} />
                            {/* <h3 className="text-2xl font-bold mt-4">
                                Antonym:
                            </h3> */}

                            {/* <Antonym mean={response} /> */}
                        </div>
                        {/* <div className="">
                            <img  src={Image} alt="" />
                        </div>{" "} */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResultList;
