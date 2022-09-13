import Slides from "./Slides";
import SlidesMobile from "./SlidesMobile";

const Homepage = () => {
    return (
        <div>
            {/* tablet and desktop version */}
            <Slides />
            {/* component für mobile version */}
            <SlidesMobile />
        </div>
    );
};

export default Homepage;
