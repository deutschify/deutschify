import { useState, useEffect } from "react";

import ResultList from "./ResultList";
import { useStore } from "../../store";
import { Navigate } from "react-router";

import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import ImageDictionary from "../../../public/images/dictionary1.png";

const Dictionary = () => {
    const [value, setValue] = useState("");
    const [preferedLanguage, setPreferedLanguage] = useState("");

    const currentUser = useStore((state) => state.currentUser);
    const [inputValue, setInputValue] = useState(["", currentUser?.language]);
    const fetchlanguages = useStore((state) => state.fetchLanguages);
    const textArr = useStore((state) => state.textArr);
    const translation = useStore((state) => state.translation);
    const languages = useStore((state) => state.languages);
    const fetchCurrentUser = useStore((state) => state.fetchCurrentUser);

    const translate = () => {
        translation(value, "de", "en");
    };

    useEffect(() => {
        translate();
    }, [value]);

    const handleSubmit = (arr) => {
        setInputValue(arr);
        setValue("");
    };

    const handleInputKeyDown = (e) => {
        if (e.key === "Enter") {
            setInputValue(arr);
            setValue("");
        }
    };

    useEffect(() => {
        fetchCurrentUser();
        fetchlanguages();
        console.log(currentUser);
    }, []);

    return (
        <div className=" m-10 md:m-20">
            {" "}
            <div className="  xl:grid grid-cols-2 w-full  ml-2   ">
                <div className="cover h-100% container mx-auto px-3 py-8">
                    <h1 className="text-3xl font-bold  text-palette-60">
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
                                onChange={(e) => setValue(e.target.value)}
                                value={value}
                                onKeyDown={handleInputKeyDown}
                            />
                            <button
                                type="submit"
                                className="bg-palette-60 border-l px-4 py-4  input  "
                                onClick={() =>
                                    handleSubmit([textArr[0], "English"])
                                }
                            >
                                Search
                            </button>
                        </div>
                        <input
                            className="hidden text-center bg-palette-50 text-palette-60 md:block py-4 ml-6  w-[7rem] pl-2 input"
                            type="text "
                            name="Deutsch"
                            value="Deutsch"
                            id=""
                        />
                        <button className="hidden md:block mt-6 pl-4 ">
                            {" "}
                            <HiArrowNarrowRight className=" mt-3" />
                        </button>
                        <input
                            className="hidden text-center bg-palette-50 text-palette-60 md:block py-4 ml-6 w-[7rem] pl-2 input"
                            type="text "
                            name="English"
                            value="English"
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
