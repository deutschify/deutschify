import { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const sliderData = [
    {
        slideImage: "../../images/dictionary1.png",
        href: "/language-levels",
        title: "Sprachniveau",
    },
    {
        slideImage: "../../public/images/deutschify-side.png",
        href: "/dictionary",
        title: "Wörterbuch",
    },
    {
        slideImage: "../../public/images/deutschify-side.png",
        href: "/forum",
        title: "Forum",
    },
    {
        slideImage: "../../public/images/deutschify-side.png",
        href: "/einbuergerungstest",
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
        <div className="hidden md:block pt-16">
            <div className="relative">
                <AiOutlineArrowLeft
                    className="slideshow-left-arrow absolute left-48 top-48 text-4xl cursor-pointer"
                    onClick={previousSlideHandler}
                />
            </div>
            <div className="relative">
                <AiOutlineArrowRight
                    className="slideshow-right-arrow absolute right-48 top-48 text-4xl cursor-pointer"
                    onClick={nextSlideHandler}
                />
            </div>
            <div className="mt-6 ml-6 mr-6 border-black border-8 bg-white">
                <div className="flex justify-center  ">
                    <div className="hidden md:block pt-16 ">
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
                                            <NavLink to={slider.href}>
                                                <a href={slider.href}>
                                                    <img
                                                        className="border-8 border-black "
                                                        src={slider.slideImage}
                                                        alt="slideshow image"
                                                    />
                                                </a>
                                                <p className="text-center">
                                                    {slider.title}
                                                </p>
                                            </NavLink>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>

        // mobile  ansicht
    );
};

export default Slides;
