
import React, { useEffect,useState, useRef } from "react";

import _letters from "./letters.json";
console.log(_letters);
const SchreibenB1 = () => {
    const dragItem = useRef();
    const dragOverItem = useRef();
    const [showlist, setshowlist] = useState(false);
    const [letters, setletters] = useState(_letters);
    const [showdiv, setshowdiv] = useState("");

    const dragStart = (e, position) => {
        dragItem.current = position;
        console.log(e.target.innerHTML);
    };

    const dragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log(e.target.innerHTML);
    };

    const drop = (e) => {
        const copyListItems = [...letters];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setletters(copyListItems);
    };
    const ShowList = (e, title) => {
        e.currentTarget;

        setshowlist(true), setshowdiv(title);
    };

    useEffect(() => {
        console.log(_letters);
    });

    return (
        <>
            <div className="float-right mt-40 ">
                <img
                    src="/public/images/construction.png"
                    alt
                    className="w-[35rem] bg-palette-40 m-4 border-4 border-palette-60 rounded-xl  "
                />
            </div>
            <div className="gird grid-cols-3 justify-between ">
                {letters.map((letter, index) => {
                    return (
                        <>
                            <div className="">
                                {" "}
                                <button
                                    class="w-40 text-center border-4 border-palette-60 bg-palette-70 p-4 text-xl rounded-xl shadow-outer hover:shadow-inner hover:text-palette-50 m-5 active"
                                    onClick={(e) => ShowList(e, letter.title)}
                                >
                                    {" "}
                                    {letter.title}
                                </button>
                                {showlist &&
                                    showdiv === letter.title &&
                                    letter.items.map((item, index) => {
                                        return (
                                            <div
                                                className="flex  justify-center align-center w-[50%]  bg-palette-80 p-2  rounded-xl py-2 border"
                                                onDragStart={(e) =>
                                                    dragStart(e, index)
                                                }
                                                onDragEnter={(e) =>
                                                    dragEnter(e, index)
                                                }
                                                onDragEnd={drop}
                                                key={index}
                                                draggable
                                            >
                                                {item}
                                            </div>
                                        );
                                    })}
                            </div>
                        </>
                    );
                })}
            </div>

        </>
    );
};

export default SchreibenB1;

