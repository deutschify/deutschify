import StarRating from "./StarRating";
import "../../App.css";

const RateUs = () => {
    return (
        <div className="mt-20 flex justify-center items-center">
            <div className="bg-palette-20 border-4 border-palette-30 p-4 flex justify-center items-center rounded-lg shadow-outer">
                <form className="max-w-lg  pt-6 pb-6">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-palette-50 text-xs font-bold mb-2"
                                htmlFor="grid-first-name"
                            >
                                {/* Vorname */}
                            </label>
                            <input
                                className=" block w-full bg-palette-60 text-palette-50 border-2 border-palette-30  rounded-lg py-3 px-4 focus:outline-none   placeholder-palette-50"
                                id="grid-first-name"
                                type="text"
                                placeholder="Gebe hier deinen Vornamen ein..."
                            />
                        </div>
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-last-name"
                            >
                                {/* Nachname */}
                            </label>
                            <input
                                className="appearance-none block w-full bg-palette-60 text-palette-50 border-2 border-palette-30 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-palette-50"
                                id="grid-last-name"
                                type="text"
                                placeholder="Gebe hier deinen Nachnamen ein..."
                            />
                        </div>
                    </div>

                    <StarRating />

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-palette-50 text-xs font-bold mb-2 "
                                htmlFor="grid-password"
                            >
                                {/* Feedback */}
                            </label>
                            <textarea
                                className=" no-resize appearance-none block w-full bg-palette-60 text-palette-50 border-2 border-palette-30 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none placeholder-palette-50"
                                id="message"
                                placeholder="Hier hast du Platz für deinen Feedback..."
                            ></textarea>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                            <button
                                className="shadow bg-palette-40 hover:bg-palette-60 focus:shadow-outline focus:outline-none text-palette-50 font-bold py-2 px-4 rounded-lg"
                                type="button"
                            >
                                Send
                            </button>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RateUs;
