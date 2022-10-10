import React from "react";
import {NavLink } from "react-router-dom";
import A1 from "./A1";
import A2 from "./A2";
import B1 from "./b1/B1";

const Sprachniveau = () => {
    return (
        <div className="">
            <div className="">
                <div className="">Zu den Übungen</div>
                <div className="">Wähle hier dein Sprachniveau aus</div>
            </div>
            <nav>
                <NavLink to="/sprachniveau/A1"
                    element={<A1 />}>
                    A1
                </NavLink>
                <NavLink to="/sprachniveau/A2"
                    element={<A2 />}>
                    A2
                </NavLink>
                <NavLink to="/sprachniveau/B1"
                    element={<B1 />}>
                    B1
                </NavLink>
            </nav>

        </div>

    )
};

export default Sprachniveau;
