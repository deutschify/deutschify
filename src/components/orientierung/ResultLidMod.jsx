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
        <div className="w">
            <div
                className={
                    `${
                        result.includes("nicht")
                            ? "bg-palette-70"
                            : "bg-palette-30"
                    } ` + "border-4 border-palette-50 w-10/12 h-80 "
                }
            >
                {result}
            </div>
            {questions.map((qu, index) => (
                <div className="flex justify-center" key={index}>
                    <div className=" bg-palette-80 m-4 w-6/12 p-4 text-palette-60  text-center border-4 border-palette-50 rounded-xl">
                        <div className="text-xl text-palette-60 flex justify-center p-1 border-4 bg-palette-50 border-palette-60 w-1/12 rounded-full">
                            {index + 1}
                        </div>
                        <div className="bg-palette-50 border-4 border-palette-60 rounded-xl m-8 p-4">
                            {qu.question}
                        </div>
                        <div className="flex justify-center">
                            {" "}
                            <div className="bg-palette-60 border-palette-50  w-max rounded-xl">
                                {qu.imageURL && (
                                    <AdvancedImage
                                        cldImg={fetchImage(qu.imageURL)}
                                    />
                                )}
                            </div>
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
                                        className={`border-4 border-palette-60 rounded-xl w-4/6 m-6 p-4  ${
                                            Object.keys(qu).find(
                                                (key) => qu[key] === choice
                                            ) === qu.chosenAnswer &&
                                            Object.keys(qu).find(
                                                (key) => qu[key] === choice
                                            ) === qu.correctAnswer
                                                ? "bg-palette-30"
                                                : ""
                                        }${
                                            Object.keys(qu).find(
                                                (key) => qu[key] === choice
                                            ) !== qu.chosenAnswer &&
                                            Object.keys(qu).find(
                                                (key) => qu[key] === choice
                                            ) !== qu.correctAnswer
                                                ? "bg-palette-50"
                                                : ""
                                        } ${
                                            Object.keys(qu).find(
                                                (key) => qu[key] === choice
                                            ) === qu.correctAnswer
                                                ? "bg-palette-30"
                                                : ""
                                        }${
                                            Object.keys(qu).find(
                                                (key) => qu[key] === choice
                                            ) === qu.chosenAnswer
                                                ? "bg-palette-70"
                                                : ""
                                        }
                                      
                                        `}
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
