import Slides from "./Slides";
import SlidesMobile from "./SlidesMobile";
import FeedbackBoxes from "./FeedbackBoxes";
import FeedbackBoxesMobile from "./FeedbackBoxesMobile";

const Homepage = () => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="sliderField m-10 p-4 w-10/12 h-full border-8 border-palette-50 rounded-xl flex justify-center bg-palette-80 shadow-outer">
                
                {/* tablet and desktop version */}
                <Slides />
                {/* component für mobile version */}
                <SlidesMobile />
            </div>
            <div className="m-10 p-10 w-10/12  border-8 border-palette-50 rounded-xl flex justify-center bg-palette-80 shadow-outer">
                {" "}
                {/* component für feedback boxes  DESKTOP VERSION */}
                <FeedbackBoxes />
                {/* component für feedback boxes  MOBILE VERSION */}
                <FeedbackBoxesMobile />
            </div>
        </div>
    );
};

export default Homepage;
