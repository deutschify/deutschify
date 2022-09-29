import { MdPermMedia } from "react-icons/md";
import { useState, useEffect } from "react";

import axios from "axios";

const share = () => {
    const backend_base_url = "http://localhost:8000";
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(
                backend_base_url + `/users/632480f0438a3681229a89d4`
            );
            // const userName = response.data.firstName;
            // console.log(userName);
            // setUser(userName);
            setUser(response.data.firstName);
        };
        fetchUser();
    }, []);

    return (
        <div className="share w-1/2  h-44 rounded-xl shadow-outer mb-5">
            <div className="shareWrapper p-2.5 ">
                <div className="shareTop flex items-center break-words">
                    <input
                        className="shareInput outline-none w-4/5 rounded-xl ml-8 pl-2 h-12 break-words "
                        placeholder={`Stell us eine Frage, ${user} ...`}
                    />
                </div>
                <hr className="shareHr m-5 border-2 border-palette-40 " />
                <div className="shareBottom flex items-center justify-between">
                    <div className="shareOptions flex ml-5 ">
                        <div className="shareOption flex items-center cursor-pointer ">
                            <MdPermMedia className="shareIcon  mr-0.5 text-palette-80" />
                            <span className="shareOptionText m-3 text-sm">
                                Fotos oder Videos
                            </span>
                            <input
                                className="inputImage hidden"
                                id="file"
                                type="file"
                                accept=".png, .jpg, .jpeg"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div>
                    </div>
                    <button className="shareButton outline-none p-1.5 rounded-md bg-palette-40 mr-5 ">
                        Posten
                    </button>
                </div>
            </div>
        </div>
    );
};

export default share;
