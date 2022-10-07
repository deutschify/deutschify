import { FaThumbsUp } from "react-icons/fa";
import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";

import { useStore } from "../../../store";

import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const backend_base_url = "http://localhost:8000";

    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [likeColor, setLikeColor] = useState("");
    const [user, setUser] = useState({});

    //trying to navigate the edit btn onClick

    const navigate = useNavigate();

    const editNavigatorHandler = () => {
        navigate(`/forum/post/edit/${post._id}`, {
            state: {
                id: post._id,
                description: post.desc,
                userId: post.userId,
                post: post,
            },
        });
    };

    //fetching the current user
    const fetchCurrentUser = useStore((state) => state.fetchCurrentUser);
    const currentUser = useStore((state) => state.currentUser);

    useEffect(() => {
        fetchCurrentUser();
        // console.log(currentUser);
        // console.log(currentUser._id);
    }, []);

    useEffect(() => {
        setIsLiked(post.likes.includes(`/users/${currentUser._id}`));
    }, [`/users/${currentUser._id}`, post.likes]);

    //fetching the user data to show the user name BUT from the posts collection
    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(
                backend_base_url + `/users/${post.userId}`
            );
            setUser(response.data);
            // console.log(response.data);
        };
        fetchUser();
    }, [post.userId]);

    //like functionality

    //to handle the like button
    const likeHandler = () => {
        try {
            axios.put(backend_base_url + `/posts/${post._id}/like`, {
                userId: currentUser._id,
            });
            console.log(post._id);
            console.log(post.userId);
        } catch (error) {}

        let _like = like;
        if (isLiked) {
            let _like = like - 1;
            setLikeColor("");
            setLike(_like);
        } else {
            let _like = like + 1;
            setLikeColor("blue");
            setLike(_like);
        }

        //----------------------------------------------------------------

        // setLike(isLiked ? like - 1 : like + 1);

        setIsLiked(!isLiked);
    };

    //Delete Handler

    const deleteIconHandler = async () => {
        console.log(post._id);
        console.log();
        console.log(currentUser._id);

        try {
            await axios.delete(backend_base_url + `/posts/${post._id}`, {
                data: {
                    userId: currentUser._id,
                },
            });
            window.location.reload();
        } catch (error) {
            console.log(`Error ${error.message}`);
        }
    };

    // Edit Handler
    const editIconHandler = async () => {
        try {
            await axios.put(backend_base_url + `/posts/${post._id}`, {
                userId: currentUser._id,
                desc: "e.target.value",
            });
        } catch (error) {
            console.log(`Error ${error.message}`);
        }
    };

    return (
        <div className="post w-1/2 rounded-xl shadow-outer mt-7 mb-7 ">
            <div className="postWrapper p-2.5 ">
                <div className="postTop flex items-center justify-between">
                    <div className="postTopLeft flex items-center">
                        <span className="postUserName text-sm ml-2.5 text-palette-80 pt-2">
                            <p>
                                {" "}
                                {user.firstName} {user.lastName}
                            </p>
                        </span>

                        <span className="postDate text-xs ml-5 pt-2">
                            <p>{format(post.createdAt)}</p>
                        </span>
                    </div>
                    <div className="postTopRight flex items-center ">
                        {/* vertical options */}
                        {post.userId === currentUser._id && (
                            <>
                                <RiDeleteBinLine
                                    className="verticalOptions cursor-pointer mr-2"
                                    title="Delete"
                                    onClick={deleteIconHandler}
                                />
                                <RiEditLine
                                    className="verticalOptions cursor-pointer "
                                    title="Edit"
                                    onClick={editNavigatorHandler}
                                />
                            </>
                        )}
                    </div>
                </div>
                <hr className="m-5  border-1 border-palette-40 " />

                <div className="postCenter mt-5 mb-5">
                    <span className="postText m-12">{post.desc}</span>

                    {post.img !== undefined && (
                        <img
                            className="postImage mt-5 w-full max-h-96 object-contain"
                            src={post.img}
                            alt="image"
                        />
                    )}
                </div>

                <div className="postBottom flex items-center justify-between">
                    <div className="postBottomLeft flex items-center">
                        {/* this is an img in the tutorial */}
                        <FaThumbsUp
                            className="likeIcon mr-2.5 w-6 h-6 cursor-pointer ml-2.5 "
                            onClick={likeHandler}
                            fill={likeColor}
                        />
                        <span className="postLikeCounter pt-2 text-sm ">
                            {like} People liked this
                        </span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText cursor-pointer text-sm mr-2.5">
                            2 Kommentare
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
