import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../store";

const Einbuergerungstest = () => {
    const bundeslandArr = [
        "Baden-Wuerttemberg",
        "Bayern",
        "Berlin",
        "Brandenburg",
        "Bremen",
        "Hamburg",
        "Hessen",
        "Mecklenburg-Vorpommern",
        "Niedersachsen",
        "Nordrhein-Westfalen",
        "Rheinland-Pfalz",
        "Saarland",
        "Sachsen",
        "Sachsen-Anhalt",
        "Schleswig-Holstein",
        "Thueringen",
    ];

    // const { bundesland } = useParams();

    const fetchQuestions = async (bundesland) => {
        const questions = (await axios.get(`${baseUrl}/${bundesland}`)).data;

        console.log(questions);
    };

    return (
        <div className=" bg-palette-80 m-10 shadow-bs border-4 border-palette-80 rounded-xl ">
            <h1 className="text-center text-2xl m-10 text-palette-50">
                Übungen zu "Leben in Deutschland"
            </h1>
            <h2 className="text-center text-xl text-palette-50">
                Wähle zuerst dein Bundesland aus
            </h2>
            <div className="bg-palette-50  rounded-xl p-4 flex flex-col items-center justify-center mx-16 my-8 shadow-bs border-4 border-palette-60 md:flex-row md:flex-wrap md:w-11/12 md:justify-center ">
                {bundeslandArr.map((bundesland, i) => {
                    return (<div
                        key={i}
                        className="bg-palette-60 w-80 h-20 rounded-xl border-palette-50 border-2 m-2 flex justify-center items-center text-xl text-palette-50 hover:bg-palette-50 hover:border-palette-60 hover:text-palette-60 font-block3 font-bold"
                    >
                        <button onClick={() => fetchQuestions(bundesland)}>
                            {bundesland}
                        </button>
                    </div>)
                })}
            </div>
        </div>
    );
};

export default Einbuergerungstest;
