import { useState } from "react";

import ResultList from "./ResultList";
import { useStore } from "../../store";
import { Navigate } from "react-router";

import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import ImageDictionary from "../../../public/images/dictionary1.png";

const Dictionary = () => {
    const [value, setValue] = useState("");
    const [inputValue, setInputValue] = useState("");

    const currentUser = useStore((state) => state.currentUser);

    const handleInputChange = (e) => setValue(e.target.value);

    const handleSubmit = () => {
        setInputValue(value);
        setValue("");
    };

    const handleInputKeyDown = (e) => {
        if (e.key === "Enter") {
            setInputValue(value);
            setValue("");
        }
    };

    return (
        <div className=" m-10 md:m-20">
            {" "}
            <div className=" mt-[6rem] xl:grid grid-cols-2 w-full  ml-2   ">
                <div className="cover h-100% container mx-auto px-3 py-8">
                    <h1 className="text-3xl font-bold  text-palette-60n">
                        Wörterbuch
                    </h1>

                    <input
                        className=" w-[7rem] md:hidden py-4 px-4  input"
                        type="tex  "
                        placeholder="language"
                    />
                    <button className=" p-2 mb-3 md:hidden">
                        {" "}
                        <HiArrowNarrowRight className=" mt-3" />
                    </button>
                    <button className="  absolute mt-3 md:hidden  ">
                        {" "}
                        <HiArrowNarrowLeft className=" mt-4" />
                    </button>
                    <input
                        className=" w-[7rem] md:hidden py-4 px-2 ml-6 input "
                        type="text "
                        placeholder="language"
                    />
                    <div className="flex items-start justify-start mt-5">
                        <div className="flex  border-gray-200 rounded">
                            <input
                                className="px-4 py-2 md:w-80 input"
                                type="text input"
                                placeholder="Search..."
                                onChange={handleInputChange}
                                value={value}
                                onKeyDown={handleInputKeyDown}
                            />
                            <button
                                className="bg-palette-60 border-l px-4 py-4  input  "
                                onClick={handleSubmit}
                            >
                                Search
                            </button>
                        </div>
                        <input
                            className="hidden md:block py-4 ml-6  w-[7rem] pl-2 input"
                            type="text "
                            placeholder="language"
                        />
                        <button className="hidden md:block mt-6 pl-4 ">
                            {" "}
                            <HiArrowNarrowRight className=" mt-3" />
                        </button>
                        <button className="hidden mt-3 md:block ">
                            {" "}
                            <HiArrowNarrowLeft className="mt-2" />
                        </button>
                        <input
                            className="hidden md:block py-4 ml-6  w-[7rem] pl-2 input"
                            type="text "
                            placeholder="language"
                        />
                    </div>

                    {inputValue && (
                        <>
                            <h3 className="text-palette-60  mt-4">
                                Ergebnis für:{" "}
                                <span className="text-palette-60 font-bold">
                                    {inputValue}
                                </span>
                            </h3>
                            <ResultList inputValue={inputValue} />
                        </>
                    )}
                </div>
                <div className="flex  justify-end items-center mr-4 mt-40 ">
                    <div className="">
                        <img
                            className="hidden xl:block    "
                            src={ImageDictionary}
                            alt=""
                        />
                    </div>
                </div>{" "}
            </div>
        </div>
    );
};

export default Dictionary;
