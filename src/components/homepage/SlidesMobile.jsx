import React from "react";
import { NavLink } from "react-router-dom";
// import deutschify from "../../../public/images/deutschify.png";
import ImgDictionary from "../../../public/images/slide-dictionary.png";
import ImgForum from "../../../public/images/slide-forum.png";
import ImgSprachkurs from "../../../public/images/slide-sprachkurs.png";
import ImgOrientierungskurs from "../../../public/images/slide-orientierungskurs.png";

const SlidesMobile = () => {
    return (
        <div className="h-full overflow-auto scrollbar-hide md:hidden grid gap-4 justify-items-center m-4">
            {/* dictionary */}
            
            <div className="bg-palette-80 w-11/12 border-8 border-palette-50 rounded-xl">
                <NavLink
                    to="/sprachkurs"
                    className="sprachkurs w-full flex justify-center"
                >
                    <img
                        src={ImgSprachkurs}
                        alt="language-levels"
                        title="Sprachkurs"
                        className="w-10/12 m-4 border-4 border-palette-60 rounded-xl"
                    />
                </NavLink>
            </div>

            {/* einbürgerungstest */}
            <div className="bg-palette-80 w-11/12 border-8 border-palette-50 rounded-xl">
                <NavLink
                    to="/einbuergerungstest"
                    className="einbuergerungstest w-full flex justify-center"
                >
                    <img
                        src={ImgOrientierungskurs}
                        alt="einbuergerungstest"
                        title="einbuergerungstest"
                        className="w-10/12 m-4 border-4 border-palette-60 rounded-xl"
                    />
                </NavLink>
            </div>
            <div className="bg-palette-80 w-11/12 border-8 border-palette-50 rounded-xl">
                {/* forum */}
                <NavLink
                    to="/forum"
                    className="forum w-full flex justify-center"
                >
                    <img
                        src={ImgForum}
                        alt="forum"
                        title="forum"
                        className="w-10/12 m-4 border-4 border-palette-60 rounded-xl"
                    />
                </NavLink>
            </div>
            <div className="bg-palette-80 w-11/12 border-8 border-palette-50 rounded-xl">
                <NavLink
                    to="/dictionary"
                    className="dictionary w-full flex justify-center"
                >
                    <img
                        src={ImgDictionary}
                        alt="Wörterbuch"
                        title="dictionary"
                        className="w-10/12 m-4 border-4 border-palette-60 rounded-xl"
                    />
                </NavLink>
            </div>
        </div>
    );
};

export default SlidesMobile;
