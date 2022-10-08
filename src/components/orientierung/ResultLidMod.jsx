import { useParams } from "react-router-dom";
import { useStore } from "../../store";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { useEffect } from "react";

function ResultLidMod() {
    // const { category } = useParams();
    const result = useStore((state) => state.result);
    const questions = useStore((state) => state.questions);

    const cld = new Cloudinary({
        cloud: {
            cloudName: "dsyhfgbli",
        },
    });

    const fetchImage = (publicId) => {
        const myImg = cld.image(`deutschify/${publicId}`);
        return myImg;
    };

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <div>
            <div className="">{result}</div>
            {questions.map((qu, index) => (
                <div className="flex justify-center" key={index}>
                    <div className=" bg-palette-80 m-4 w-6/12 p-4 text-palette-60  text-center border-4 border-palette-50 rounded-xl">
                        <div className="index text-palette-60">{index + 1}</div>
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
                            {Object.values(
                                Object.fromEntries(
                                    Object.entries(qu).filter(([key]) =>
                                        key.includes("answer")
                                    )
                                )
                            ).map((choice, i) => {
                                return (
                                    <div
                                        className={`border-4 border-palette-60 rounded-xl w-4/6 m-6 p-4 ${
                                            Object.keys(qu).find(
                                                (key) => qu[key] === choice
                                            ) === qu.chosenAnswer &&
                                            Object.keys(qu).find(
                                                (key) => qu[key] === choice
                                            ) === qu.correctAnswer
                                                ? "bg-palette-40"
                                                : ""
                                        } ${
                                            Object.keys(qu).find(
                                                (key) => qu[key] === choice
                                            ) === qu.correctAnswer
                                                ? "bg-palette-40"
                                                : ""
                                        }${
                                            Object.keys(qu).find(
                                                (key) => qu[key] === choice
                                            ) === qu.chosenAnswer
                                                ? "bg-palette-70"
                                                : ""
                                        }`}
                                        key={i}
                                    >
                                        {choice}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ResultLidMod;
