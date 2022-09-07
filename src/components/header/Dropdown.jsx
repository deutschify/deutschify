import React, { useState } from "react";
import { uebungenDropdown } from "./NavItems";
import { NavLink } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <ul
                className={
                    dropdown ? "services-submenu clicked" : "services-submenu"
                }
                onClick={() => setDropdown(!dropdown)}
            >
                {uebungenDropdown.map((item) => {
                    
                    return (
                        <li key={item.id}>
                            <NavLink
                                to={item.path}
                                className={item.cName}
                                onClick={() => setDropdown(false)}
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Dropdown;
