import React from "react";

const FeedbackBoxes = () => {
    return (
        <div className="hidden md:grid pb-48 pt-48">
            <div className="  grid grid-cols-3 gap-x-8 gap-y-4 justify-center justify-items-center   ">
                <div
                    className="w-48 h-64
  border-box border-black border-2 border-2 rounded-lg shadow-outer"
                >
                    1
                </div>
                <div
                    className="w-48 h-64
 border-box border-black border-2 border-2 rounded-lg shadow-outer"
                >
                    2
                </div>
                <div
                    className="w-48 h-64
 border-box border-black border-2 border-2 rounded-lg shadow-outer"
                >
                    3
                </div>
            </div>
        </div>
    );
};

export default FeedbackBoxes;
