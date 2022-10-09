import StarRating from "./StarRating";
import "../../App.css";
import { useStore } from "../../store";
import { Navigate } from "react-router";
import rateA from "../../../public/images/rate1.png"



const RateUs = () => {
    const currentUser = useStore((state) => state.currentUser);

    return (
        <>
        
            {currentUser.accessGroups?.includes("loggedInUsers") ? (<div className="mt-20 flex justify-center items-center">
            <div className="w-11/12 md:w-10/12 bg-palette-80 border-4 border-palette-50 p-4 flex justify-center items-center rounded-xl shadow-outer mb-10">
                <img src={rateA} alt="" className="hidden md:block"/>
                <form className="">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full m-2">
                            <label
                                className=""
                                htmlFor="grid-first-name"
                            >
                                {/* Vorname */}
                            </label>
                            <input
                                className="w-full bg-palette-60 text-palette-50 border-4 border-palette-50  rounded-xl p-3 focus:outline-none   placeholder:text-palette-50/75 shadow-inner"
                                id="grid-first-name"
                                type="text"
                                placeholder="Gebe hier deinen Vornamen ein..."
                            />
                        </div>
                        <div className="m-2 w-full">
                            <label
                                className=""
                                htmlFor="grid-last-name"
                            >
                                {/* Nachname */}
                            </label>
                            <input
                                className=" w-full bg-palette-60 text-palette-50 border-4 border-palette-50 rounded-xl p-3 focus:outline-none  placeholder:text-palette-50/75 shadow-inner"
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
                                className=" no-resize appearance-none block w-full bg-palette-60 text-palette-50 border-4 border-palette-50 rounded-xl py-3 px-4 mb-3 focus:outline-none  h-48 resize-none placeholder-palette-50/75 shadow-inner"
                                id="message"
                                placeholder="Hier hast du Platz für deinen Feedback..."
                            ></textarea>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3 flex justify-between">
                            <button
                                className="bg-palette-50 border-4 border-palette-60 hover:bg-palette-60 hover:text-palette-50 hover:border-palette-50 hover:border-4 focus:outline-none text-palette-60 p-4 h-16 rounded-xl shadow-outer"
                                type="button"
                            >
                                Send
                            </button><img src={rateA} alt="" className=" md:hidden w-40 mr-20"/>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                    
                </form>
            </div>
        </div>) : (
            <>
            <p>Login inorder to rate us</p>
            <Navigate replace to="/login" />
        </>
        )}</>
    );
};

export default RateUs;
