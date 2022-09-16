import Slides from "./Slides";
import SlidesMobile from "./SlidesMobile";
import FeedbackBoxes from "./FeedbackBoxes";
import FeedbackBoxesMobile from "./FeedbackBoxesMobile";

const Homepage = () => {
    return (
        <div>
            {/* tablet and desktop version */}
            <Slides />
            {/* component für mobile version */}
            <SlidesMobile />
            {/* component für feedback boxes  DESKTOP VERSION*/}
            <FeedbackBoxes />
            {/* component für feedback boxes  MOBILE VERSION*/}
            <FeedbackBoxesMobile />
        </div>
    );
};

export default Homepage;
