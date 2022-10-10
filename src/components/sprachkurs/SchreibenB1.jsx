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
        const copyListItems = [...list];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setList(copyListItems);
    };
    const ShowList = (e, title) => {
        e.currentTarget;

        setshowlist(true), setshowdiv(title);
       
    };
    useEffect(() => {
        
         console.log(letters);
    })

    return (
        <>
            {letters.map((letter, index) => {
                return (
                    <>
                        {" "}
                        <button onClick={(e) => ShowList(e, letter.title)}>
                            {" "}
                            {letter.title}
                        </button>
                        {showlist && showdiv === letter.title  &&
                            letter.items.map((item, index) => {
                                return (
                                    <div
                                        className="flex justify-center  align-center bg-palette-80 p-2   "
                                        onDragStart={(e) => dragStart(e, index)}
                                        onDragEnter={(e) => dragEnter(e, index)}
                                        onDragEnd={drop}
                                        key={index}
                                        draggable
                                    >
                                        {item}
                                    </div>
                                );
                            })}
                    </>
                );
            })}
        </>
    );
};

export default SchreibenB1;
