import { useState, useEffect } from "react";
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "../../App.css";
import { NavLink } from "react-router-dom";
// import ImgSprachkurs from "../../../public/images/deutschify-smallletter.png"
// import ImgDictionary from "../../../public/images/deutschify-smallletter.png"
// import ImgForum from "../../../public/images/deutschify-smallletter.png"
// import ImgOrientierungskurs from "../../../public/images/deutschify-smallletter.png"
// import ImgMainLogo from "../../../public/images/deutschify-smallletter.png"

const sliderData = [
    {
        slideImage: "../../images/mainpage.png",
        href: "/",
        title: "Willkommen bei deutschify",
    },
    {
        slideImage: "../../images/illus/sprachkurs1.png",
        href: "/sprachkurs",
        title: "Übungen zum Sprachkurs",
    },
    {
        slideImage: "../../images/dictionary1.png",
        href: "/dictionary",
        title: "Wörterbuch",
    },
    {
        slideImage: "../../images/illus/forum2.png",
        href: "/forum",
        title: "Forum",
    },
    {
        slideImage: "../../images/illus/orientierungskurs1.png",
        href: "/einbuergerungstest",
        title: "Übungen zum Orientierungskurs",
    },
];

const Slides = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const length = sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 8000;

    const nextSlideHandler = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
    };
    const previousSlideHandler = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
    };
    if (!Array.isArray(sliderData) || sliderData.length <= 0) {
        return null;
    }

    function auto() {
        slideInterval = setInterval(nextSlideHandler, intervalTime);
    }

    useEffect(() => {
        setCurrentImage(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentImage]);

    return (
        <div className="flex justify-center items-center w-full">
            <div className="">
                {" "}
                <div className="relative">
                    <MdArrowBackIos
                        className="slideshow-left-arrow absolute -left-60 top-40 text-7xl text-palette-60/25 cursor-pointer"
                        onClick={previousSlideHandler}
                    />
                </div>
                <div className="relative">
                    <MdArrowForwardIos
                        className="slideshow-right-arrow absolute -right-60 top-40 text-7xl text-palette-60/25 cursor-pointer"
                        onClick={nextSlideHandler}
                    />
                </div>
                <div className="flex flex-col items-center ">
                    {" "}
                    <div className="flex justify-center">
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
                                            <NavLink
                                                to={slider.href}
                                                className="hidden md:block"
                                            >
                                                <div className="flex flex-col items-center bg-palette-50 p-6 border-4 border-palette-60 rounded-xl shadow-outer text-palette-60 w-10/12 slideAnimation">
                                                    {" "}
                                                    <p className="singleSlideTitle text-center font-block1 text-5xl p-2">
                                                        {slider.title}
                                                    </p>
                                                    <img
                                                        className="w-10/12 rounded-xl border-4 border-palette-80 bg-palette-60 shadow-outer p-2"
                                                        src={slider.slideImage}
                                                        alt="slideshow image"
                                                    />
                                                </div>
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
