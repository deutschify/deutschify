import { NavLink } from "react-router-dom";

const NavB1 = () => {
    return (
        <div className="md:border-2 md:border-palette-50 md:rounded-lg md:w-1/2 md:h-20 shadow-outer bg-palette-80 md:flex box-border">
            <div className="b1NavLink flex gap-x-24 pl-8 text-palette-60 text-lg ">
                <NavLink to="/b1/schreiben" className="self-center">
                    Schreiben
                </NavLink>

                <NavLink to="/b1/Lesen" className="self-center">
                    Lesen
                </NavLink>

                <NavLink to="/b1/Hoeren" className="self-center">
                    Hoeren
                </NavLink>
            </div>
        </div>
    );
};

export default NavB1;
