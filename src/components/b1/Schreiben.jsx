
import React, { useState, useRef } from "react";
import NavB1 from "./NavB1";
const Schreiben = () => {
    const dragItem = useRef();
    const dragOverItem = useRef();
    const [list, setList] = useState([
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
        "Item 6",
        "Item 7",
    ]);

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
  return (
      <div>
        <NavB1/>
          <>
              {list &&
                  list.map((item, index) => (
                      <div
                          className="flex justify-center  align-center bg-palette-80 p-2  "
                          onDragStart={(e) => dragStart(e, index)}
                          onDragEnter={(e) => dragEnter(e, index)}
                          onDragEnd={drop}
                          key={index}
                          draggable
                      >
                          {item}
                      </div>
                  ))}
          </>
      </div>
  );
}

export default Schreiben
