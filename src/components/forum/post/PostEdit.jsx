import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostEdit = () => {
    const backend_base_url = "http://localhost:8000";

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
        <div className="mt-48">
            <h3>Edit Post</h3>
            <form onSubmit={editIconHandler}>
                <div className="editBodyArea">
                    <textarea
                        className="descriptionArea"
                        value={post.desc}
                        onChange={(e) =>
                            setPost({
                                ...post,
                                desc: e.target.value,
                            })
                        }
                    ></textarea>
                </div>
                <div className="editSubmitBtn">
                    <button className="editBtn border-8 mr-2" type="submit">
                        Post bearbeiten
                    </button>
                    <button
                        className="editCancelBtn border-8"
                        onClick={() => navigate("/forum/news-feed/all")}
                    >
                        {" "}
                        Abbrechen
                    </button>
                </div>
            </form>

            <div>
                {location.state.id} <span>and</span>{" "}
                {location.state.description} <span>and</span>{" "}
                {location.state.userId}
            </div>
        </div>
    );
};

export default PostEdit;
