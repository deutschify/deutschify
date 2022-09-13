import { FaStar } from "react-icons/fa";
import { useState } from "react";

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div  className="flex flex-row pb-6 ">
            <div className="flex flex-wrap w-60">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                
                return (
                    
                    <label className="">
                        <input
                            type="radio"
                            name="rating"
                            className="hidden"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />

                        <FaStar
                            size={30}
                            color={
                                ratingValue <= (hover || rating)
                                    ? "#5C7A75"
                                    : "#99C1B9"
                            }
                            className="cursor-pointer flex flex-col"
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(ratingValue)}
                        />
                    </label>
                );
            })}
            {rating > null && (
                <div className="w-full"> mit {rating} von 5 Sternen bewertet</div>
            )}
            </div>
        </div>
    );
};

export default StarRating;
