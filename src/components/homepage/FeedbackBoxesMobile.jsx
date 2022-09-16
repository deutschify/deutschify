import React from "react";

const FeedbackBoxesMobile = () => {
    return (
        <div className=" grid grid-rows-3 gap-4 justify-center justify-items-center  md:hidden mb-6">
            <div
                className="w-48 h-64
  border-box border-black border-2 rounded-lg shadow-outer"
            >
                4
            </div>
            <div
                className="w-48 h-64
 border-box border-black border-2 rounded-lg shadow-outer"
            >
                5
            </div>
            <div
                className="w-48 h-64
 border-box border-black border-2 rounded-lg shadow-outer"
            >
                6
            </div>
        </div>
    );
};

export default FeedbackBoxesMobile;
