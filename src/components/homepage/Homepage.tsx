import Slides from "./Slides";
import SlidesMobile from "./SlidesMobile";
import FeedbackBoxes from "./FeedbackBoxes";
import FeedbackBoxesMobile from "./FeedbackBoxesMobile";

const Homepage = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="sliderField md:m-10 md:p-4 md:w-10/12 md:h-full md:border-8 md:border-palette-50 md:rounded-xl md:flex md:justify-center md:bg-palette-80 md:shadow-outer">
                
                {/* tablet and desktop version */}
                <Slides />
                {/* component für mobile version */}
                <SlidesMobile />
            </div>
            <div className="flex m-10 md:w-10/12 md:border-8 md:border-palette-50 md:rounded-xl md:flex md:justify-center md:bg-palette-80 md:shadow-outer">
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
