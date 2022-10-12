
import React, { useState, useRef } from "react";
const Schreiben = () => {
    const dragItem = useRef();
    const dragOverItem = useRef();
    const [list, setList] = useState([
        
        "______________________________Beschwerde_______________________________",

        "Sehr geehrte Damen und Herren,",
        "vor einem Monat habe ich bei Ihnen eine Waschmaschine Marke WM 1200 RS bestellt. Jetzt ist sie kaputt, deshalb schreibe ich Ihnen.",
        " Ich habe dieses Modell gekauft, weil es im Angebot war. Ich war am Anfang sehr zufrieden, aber jetzt bin ich enttäuscht.",
        "Das Gerät startet nicht, obwohl die Lampe leuchtet. Ich würde gern das Gerät umtauschen. Könnten Sie bitte die kaputte Waschmaschine abholen und eine neue bringen?",
        "Ich wäre auch mit einer Reparatur einverstanden, aber der Techniker soll zu uns kommen.",
        "Über eine schnelle Antwort würde ich mich sehr freuen.",
        "Mit freundlichen Grüßen",
        "______________________________Einladung_______________________________",

        "Sehr geehrter {name}, ",
        "Es ist eine Weile her! Ich hoffe dir gehts gut.",
        "ch würde Sie gerne zu einer Geburtstagsfeier für meine Tochter {name} nächsten Samstag, {date}, einladen.",

        " Wir werden kein Nein als Antwort akzeptieren, versprochen! Wenn Sie eine Mitfahrgelegenheit benötigen,",
        "holt Jeanine Sie gerne ab. Teilen Sie ihr einfach Ihre Adresse mit und sie wird Sie dort treffen.",
        "Ich hoffe sehr, dass Sie es schaffen. Es wäre toll, dich wiederzusehen.",
        "Beste, {Name des Absenders}",
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
        <>
            <div className="float-right mt-40 ">
                <img
                    src="/public/images/construction.png"
                    alt
                    className="w-[35rem] coaster border-palette-60 rounded-xl  "
                />
            </div>
            <div className="sm:flex flex-col cover ml-6  justify-center align-center w-[50%]">
                {list &&
                    list.map((item, index) => (
                        <>
                            <div
                                className="w-[35rem] m-4  bg-palette-60 rounded-3xl p-3 text-palette-50 placeholder:text-palette-50/75 border-4 border-palette-80 shadow-inner focus:outline-none"
                                onDragStart={(e) => dragStart(e, index)}
                                onDragEnter={(e) => dragEnter(e, index)}
                                onDragEnd={drop}
                                key={index}
                                draggable
                            >
                                {item}
                            </div>
                        </>
                    ))}
                <hr />
            </div>{" "}
        </>
    );
};
export default Schreiben;
//     