import { useLocation } from "react-router-dom";
import { useState } from "react";

const PostEdit = ({ route, navigate }) => {
    const location = useLocation();
    const [posts, setPosts] = useState(location.state.post);
    const [editedDescription, setEditedDescription] = useState(
        location.state.description
    );
    console.log(editedDescription);
    console.log(posts);
    return (
        <div>
            <h3>Edit Post</h3>
            <form>
                <div className="editBodyArea">
                    <textarea
                        className="descriptionArea"
                        value={location.state.description}
                        onChange={(e) =>
                            setEditedDescription({
                                ...posts,
                                description: e.target.value,
                            })
                        }
                    ></textarea>
                </div>
                <div className="editSubmitBtn">
                    <button className="editBtn border-8" type="submit">
                        Edit Post
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
