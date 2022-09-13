import React from "react";
import { NavLink } from "react-router-dom";
import deutschify from "../../public/images/deutschify.png";

const SlidesMobile = () => {
    return (
        <div className="md:hidden grid gap-4 justify-items-center pt-4 pb-4 ">
            <div>
                {/* dictionary */}1
                <NavLink to="/dictionary" className="dictionary">
                    {" "}
                    <a href="/dictionary">
                        {" "}
                        <img
                            src={deutschify}
                            alt="dictionary"
                            title="dictionary"
                        />
                    </a>
                </NavLink>
            </div>
            <div>
                {/* language-levels */}2
                <NavLink to="/language-levels" className="language-levels">
                    {" "}
                    <a href="/language-levels">
                        {" "}
                        <img
                            src={deutschify}
                            alt="language-levels"
                            title="language-levels"
                        />
                    </a>
                </NavLink>
            </div>
            <div>
                {/* einbürgerungstest */}3
                <NavLink
                    to="/einbuergerungstest"
                    className="einbuergerungstest"
                >
                    {" "}
                    <a href="/einbuergerungstest">
                        {" "}
                        <img
                            src={deutschify}
                            alt="einbuergerungstest"
                            title="einbuergerungstest"
                        />
                    </a>
                </NavLink>
            </div>
            <div>
                {/* forum */}4
                <NavLink to="/forum" className="forum">
                    {" "}
                    <a href="/forum">
                        {" "}
                        <img src={deutschify} alt="forum" title="forum" />
                    </a>
                </NavLink>
            </div>
        </div>
    );
};

export default SlidesMobile;
