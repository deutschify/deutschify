import React from "react";

const FeedbackBoxes = () => {
    return (
        <div className="hidden md:grid">
            <div className="  grid grid-cols-3 gap-x-8 gap-y-4 justify-center justify-items-center  ">
                <div
                    className="w-48 h-48
  border-box border-black border-2"
                >
                    1
                </div>
                <div
                    className="w-48 h-48
 border-box border-black border-2"
                >
                    2
                </div>
                <div
                    className="w-48 h-48
 border-box border-black border-2"
                >
                    3
                </div>
            </div>
        </div>
    );
};

export default FeedbackBoxes;
