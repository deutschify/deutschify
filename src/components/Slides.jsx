import { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const sliderData = [
    {
        slideImage: "../../public/images/deutschify-side.png",

        title: "Sprachniveau",
    },
    {
        slideImage: "../../public/images/deutschify-side.png",

        title: "Wörterbuch",
    },
    {
        slideImage: "../../public/images/deutschify-side.png",

        title: "Forum",
    },
    {
        slideImage: "../../public/images/deutschify-side.png",

        title: "Einbürgerungstest",
    },
];

const Slides = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const length = sliderData.length;

    const nextSlideHandler = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
    };
    const previousSlideHandler = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
    };
    if (!Array.isArray(sliderData) || sliderData.length <= 0) {
        return null;
    }

    return (
        <div className="hidden md:block">
            <AiOutlineArrowLeft
                className="slideshow-left-arrow"
                onClick={previousSlideHandler}
            />
            <AiOutlineArrowRight
                className="slideshow-right-arrow"
                onClick={nextSlideHandler}
            />
            {sliderData.map((slider, index) => {
                return (
                    <div
                        key={index}
                        className={
                            index === currentImage ? "slide active" : "slide"
                        }
                    >
                        {index === currentImage && (
                            <>
                                <img
                                    className="slideshow-images"
                                    src={slider.slideImage}
                                    alt="slideshow image"
                                />

                                <p className="slideshow-title">
                                    {slider.title}
                                </p>
                            </>
                        )}
                    </div>
                );
            })}
        </div>

        // mobile  ansicht
    );
};

export default Slides;
