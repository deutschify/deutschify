import { useParams } from "react-router-dom";
import { useStore } from "../../store";



function ResultLidMod({questions}) {
    const { category } = useParams();
console.log(questions);
    const result = useStore((state) => state.result);
    return (
        <div>
            ResultLidMod
            <div className="">{result}</div>


            {questions.map((qu, index) => (
                            <div className="flex justify-center" key={index}>
                                <div className=" bg-palette-80 m-4 w-6/12 p-4 text-palette-60  text-center border-4 border-palette-50 rounded-xl">
                                    <div className="index text-palette-60">
                                        {index + 1}
                                    </div>
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
                                            
                                            
                                        >
                                            {qu.answerA}
                                        </div>
                                        <div
                                            className={
                                                qu.chosenAnswer !== "answerB"
                                                    ? "bg-palette-50 border-4 border-palette-60 rounded-xl w-4/6 m-6 p-4"
                                                    : "bg-palette-40 border-4 border-palette-50 text-palette-50 rounded-xl w-4/6 m-6 p-4"
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
                                           
                                        >
                                            {qu.answerC}
                                        </div>
                                        <div
                                            className={
                                                qu.chosenAnswer !== "answerD"
                                                    ? "bg-palette-50 border-4 border-palette-60 rounded-xl w-4/6 m-6 p-4"
                                                    : "bg-palette-40 border-4 border-palette-50 text-palette-50 rounded-xl w-4/6 m-6 p-4"
                                            }
                                          
                                        >
                                            {qu.answerD}
                                        </div>
                                     
                                    </div>
                                </div>
                            </div>
                        ))}
        </div>
    );
}

export default ResultLidMod;
