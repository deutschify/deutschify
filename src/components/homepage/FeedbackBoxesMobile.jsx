import { useState, useEffect, useRef } from "react";
import "../../App.css";


const feedbacks = [
    {
        name: "Samira",
        image: "../../../images/samira.png",
        comment:
            "Ich habe mit Hilfe dieser Webseite meinen Einbürgerungstest bestanden.",
    },
    {
        name: "Rahul",
        image: "../../../images/rahul.png",
        comment: "Ich kann mich sehr gut auf meine b1 Prüfung vorbereiten.",
    },
    {
        name: "Yassir",
        image: "../../../images/yassir.png",
        comment: "Es macht mir spaß!",
    },
    {
        name: "Enrico",
        image: "../../../images/enrico.png",
        comment: "Alles Top!",
    },
    {
        name: "Craig",
        image: "../../../images/craig.png",
        comment: "Ich lerne viel schneller.",
    },
];
const delay = 3000;

const FeedbackBoxesMobile = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="md:hidden">
            <div className="w-96  h-72 flex items-center justify-center  bg-palette-50 border-4 border-palette-80 rounded-xl">
                <div className="slideshow w-52 h-60 overflow-hidden">
                    <div
                        className="slideshowSlider whitespace-nowrap transition ease-in-out 5s"
                        style={{
                            transform: `translate3d(${-index * 100}%, 0, 0)`,
                        }}
                    >
                        {feedbacks.map((feedback, index) => (
                            <div
                                className="slide inline-block bg-palette-80 min-h-72 rounded-xl" 
                                key={index}
                            >
                                <div className="bg-palette-60 w-52 h-60 p-2 text-palette-50 border-4 border-palette-80 rounded-2xl">
                                    <img
                                        src={feedback.image}
                                        alt="fimage"
                                        className="w-16 h-16 rounded-full border-4 border-palette-50"
                                    />
                                    <div className="p-2 whitespace-normal h-32">{feedback.comment}</div>
                                    <div className="italic">{feedback.name}</div>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* <div className="slideshowDots text-center h-4 w-4 bg-palette-80">
                        {colors.map((_, idx) => (
                            <div
                                key={idx}
                                className={`slideshowDot${
                                    index === idx ? " active" : ""
                                }`}
                                onClick={() => {
                                    setIndex(idx);
                                }}
                            ></div>
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default FeedbackBoxesMobile;
