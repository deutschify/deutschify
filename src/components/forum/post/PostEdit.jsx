import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostEdit = () => {
    const backend_base_url = import.meta.env.VITE_BACKEND_URL;

    const location = useLocation();
    const navigate = useNavigate();
    const [post, setPost] = useState(location.state.post);
    // const [editedDescription, setEditedDescription] = useState(
    //     location.state.description
    // );
    // console.log(editedDescription);
    // console.log(post);

    //Edit handler
    const editIconHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.put(backend_base_url + `/posts/${location.state.id}`, {
                userId: location.state.userId,
                desc: post.desc,
            });
            setPost("");
            navigate("/forum/news-feed/all");
        } catch (error) {
            console.log(`Error ${error.message}`);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-[70vh] ">
            <div className="cover w-1/2 flex-col flex items-center justify-center">
                <h3 className=" mb-6 mt-6 text-palette-60 ">
                    Beitrag bearbeiten...
                </h3>
                <form
                    onSubmit={editIconHandler}
                    className="coaster w-4/5 flex flex-col items-center justify-center mb-12  "
                >
                    <div className="editBodyArea  w-full">
                        <textarea
                            className="descriptionArea input  w-4/5 p-5 resize-none scrollbar-hide mt-6 mb-6 md:ml-16"
                            value={post.desc}
                            onChange={(e) =>
                                setPost({
                                    ...post,
                                    desc: e.target.value,
                                })
                            }
                        ></textarea>
                    </div>
                    <div className="editSubmitBtn flex flex-col items-center  mb-6 md:flex-row">
                        <button
                            className="editBtn btn bg-palette-60 text-palette-50 p-1.5"
                            type="submit"
                        >
                            bearbeiten
                        </button>
                        <button
                            className="editCancelBtn btn mt-4 bg-palette-60 text-palette-50 p-1.5 md:mt-0 md:ml-5"
                            onClick={() => navigate("/forum/news-feed/all")}
                        >
                            {" "}
                            abbrechen
                        </button>
                    </div>
                </form>

                {/* <div>
                {location.state.id} <span>and</span>{" "}
                {location.state.description} <span>and</span>{" "}
                {location.state.userId}
            </div> */}
            </div>
        </div>
    );
};

export default PostEdit;
