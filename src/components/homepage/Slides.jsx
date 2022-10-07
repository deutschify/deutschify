import { useState } from "react";
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import { NavLink } from "react-router-dom";

const sliderData = [
    {
        slideImage: "../../images/illus/sprachkurs1.png",
        href: "/language-levels",
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
        <div className=" w-6/12 h-10/12 hidden md:block bg-palette-50 p-6 border-4 border-palette-60 rounded-xl shadow-outer text-palette-60">
             <div className="relative">
                <MdArrowBackIos
                    className="slideshow-left-arrow absolute -left-80 top-48 text-4xl cursor-pointer"
                    onClick={previousSlideHandler}
                />
            </div>
            <div className="relative">
                <MdArrowForwardIos
                    className="slideshow-right-arrow absolute -right-80 top-48 text-4xl cursor-pointer"
                    onClick={nextSlideHandler}
                />
            </div> 
            <div className="">
                <div className="">
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
                                            <NavLink to={slider.href}> 
                                            <p className="text-center font-block1 text-4xl p-2">
                                                    {slider.title}
                                                </p>
                                                <a href={slider.href}>
                                                    <img
                                                        className="rounded-xl border-4 border-palette-80 bg-palette-60 shadow-outer"
                                                        src={slider.slideImage}
                                                        alt="slideshow image"
                                                    />
                                                </a>
                                               
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
