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
        <div className="flex justify-center w-full   ">
            <div className="hidden md:block pt-16 ">
                <div className="pr-6">
                    <AiOutlineArrowLeft
                        className="slideshow-left-arrow"
                        onClick={previousSlideHandler}
                    />
                </div>
                <AiOutlineArrowRight
                    className="slideshow-right-arrow"
                    onClick={nextSlideHandler}
                />
                {sliderData.map((slider, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                index === currentImage
                                    ? "slide active"
                                    : "slide"
                            }
                        >
                            {index === currentImage && (
                                <>
                                    <img
                                        className="border-8 border-black"
                                        src={slider.slideImage}
                                        alt="slideshow image"
                                    />

                                    <p className="text-center">
                                        {slider.title}
                                    </p>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>

        // mobile  ansicht
    );
};

export default Slides;
