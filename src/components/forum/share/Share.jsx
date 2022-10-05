import { MdPermMedia, MdCancel } from "react-icons/md";

import { useState, useEffect, useRef } from "react";
import axios from "axios";

import { useStore } from "../../../store";

const share = () => {
    const backend_base_url = "http://localhost:8000";
    // const [user, setUser] = useState({});

    //fetching the current user
    const fetchCurrentUser = useStore((state) => state.fetchCurrentUser);
    const currentUser = useStore((state) => state.currentUser);

    //useRef for th share input box
    const desc = useRef();
    //useState for the onChange event
    const [file, setFile] = useState(null);

    //to submit a post

    const submitPostHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: currentUser._id,
            desc: desc.current.value,
        };
        try {
            await axios.post(backend_base_url + `/posts`, newPost);
            window.location.reload();
        } catch (error) {}
    };

    useEffect(() => {
        fetchCurrentUser();
        // console.log(currentUser);
        // console.log(currentUser._id);
    }, []);

    //after fetching the currentUser I dont think we need this anymore!
    // useEffect(() => {
    //     const fetchUser = async () => {
    //         const response = await axios.get(
    //             backend_base_url + `/users/${currentUser._id}`
    //         );
    //         const userName = response.data.firstName;
    //         // console.log(userName);
    //         // setUser(userName);
    //         // setUser(userName);
    //     };
    //     fetchUser();
    // }, []);

    return (
        <div className="share w-1/2   rounded-xl shadow-outer mb-5">
            <div className="shareWrapper p-2.5 ">
                <div className="shareTop flex items-center break-words">
                    <input
                        className="shareInput outline-none w-4/5 rounded-xl ml-8 pl-2 h-12 break-words "
                        placeholder={`Stell us eine Frage, ${currentUser.firstName} ...`}
                        ref={desc}
                    />
                </div>
                <hr className="shareHr m-5 border-2 border-palette-40 " />
                {file && (
                    <div className="shareImgContainer pr-4 pb-2 pl-4 relative">
                        <img
                            className="shareImg  object-cover w-full	 "
                            src={URL.createObjectURL(file)}
                            alt=""
                        />
                        <MdCancel
                            className="shareCancelImg cursor-pointer absolute top-1 right-5 text-4xl "
                            onClick={() => setFile(null)}
                        />
                    </div>
                )}
                <form
                    className="shareBottom flex items-center justify-between"
                    onSubmit={submitPostHandler}
                >
                    <div className="shareOptions flex ml-5 ">
                        <label
                            htmlFor="file"
                            className="shareOption flex items-center cursor-pointer "
                        >
                            <MdPermMedia className="shareIcon  mr-0.5 text-palette-80" />
                            <input
                                className="inputImage hidden "
                                id="file"
                                type="file"
                                accept=".png, .jpg, .jpeg"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                            <span className="shareOptionText m-3 text-sm">
                                Fotos oder Videos
                            </span>
                        </label>
                    </div>
                    <button
                        className="shareButton outline-none p-1.5 rounded-md bg-palette-40 mr-5"
                        type="submit"
                    >
                        Posten
                    </button>
                </form>
            </div>
        </div>
    );
};

export default share;
