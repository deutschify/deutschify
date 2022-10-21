import { FaThumbsUp } from "react-icons/fa";
import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { useStore } from "../../../store";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const backend_base_url = import.meta.env.VITE_BACKEND_URL;

    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [likeColor, setLikeColor] = useState("");
    const [user, setUser] = useState({});

    const [postedDate, setPostedDate] = useState(format(post.createdAt));
    const [postUpdated, setPostUpdated] = useState(format(post.updatedAt));
    const [deletedCommentId, setDeletedCommentId] = useState("");
    const [showBox, setShowBox] = useState(false);
    const [allUsers, setAllUsers] = useState({});

    //useRev to add a new comment
    const comment = useRef();

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

    // fetching all Users to be able to find the comment owner

    useEffect(() => {
        const fetchAllUsers = async () => {
            const response = await axios.get(backend_base_url + `/users`);
            setAllUsers(response.data);
            //console.log(response.data);
        };
        fetchAllUsers();
    }, []);
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

    //Delete Post Handler

    const deletePostIconHandler = async () => {
        // console.log(post._id);
        // console.log();
        // console.log(currentUser._id);

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

    //Comment field Handler

    const commentFieldHandler = () => {
        return setShowBox((show) => !show);
    };

    //Comment Submit Handler

    const submitCommentHandler = async (e) => {
        e.preventDefault();
        const newComment = {
            userId: currentUser._id,
            comment: comment.current.value,
        };
        try {
            await axios.post(
                backend_base_url + `/posts/${post._id}/comment`,
                newComment
            );
            window.location.reload();
        } catch (error) {}
    };

    // Delete Comment Handler
    const deleteCommentIconHandler = async (_id) => {
        console.log(currentUser._id);

        try {
            await axios.delete(
                backend_base_url + `/posts/comments/comment/${_id}`,
                {
                    data: {
                        userId: currentUser._id,
                    },
                }
            );
            window.location.reload();
        } catch (error) {
            console.log(`Error ${error.message}`);
        }
    };

    return (
        <div className=" cover mt-5 mb-5 w-1/2 flex justify-center items-center ">
            <div className="post w-4/5  mt-7 mb-7 coaster">
                <div className="postWrapper p-2.5 ">
                    <div className="postTop flex items-center justify-between">
                        <div className="postTopLeft flex items-center">
                            <span className="postUserName text-sm ml-2.5 text-palette-80 pt-2">
                                <p>
                                    {" "}
                                    {user?.firstName} {user?.lastName}
                                </p>
                            </span>

                            <span className="postDate text-xs ml-5 pt-2">
                                <p>{format(post.createdAt)}</p>
                            </span>
                            {format(post.createdAt) !==
                                format(post.updatedAt) && (
                                <span className="postDate text-xxs ml-5 pt-3">
                                    <p>bearbeitet</p>
                                </span>
                            )}
                        </div>
                        <div className="postTopRight flex items-center ">
                            {/* vertical options */}
                            {post.userId === currentUser._id && (
                                <>
                                    <RiDeleteBinLine
                                        className="DeletePostIcon cursor-pointer mr-2"
                                        title="Löschen"
                                        onClick={deletePostIconHandler}
                                    />
                                    <RiEditLine
                                        className="EditPostIcon cursor-pointer "
                                        title="Bearbeiten"
                                        onClick={editNavigatorHandler}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                    <hr className="m-5  border-1 border-palette-60 " />

                    <div className="postCenter mt-5 mb-5">
                        <div className="postText m-8">{post.desc}</div>

                        {post.img !== undefined && (
                            <img
                                className="postImage mt-5 w-full max-h-96 object-contain"
                                src={post.img}
                                alt="image"
                            />
                        )}
                    </div>
                    <hr className="m-5  border-1 border-palette-60 " />

                    <div className="postBottom flex items-center">
                        {/* <div className="postBottomLeft flex items-center">
                        <FaThumbsUp
                            className="likeIcon mr-2.5 w-6 h-6 cursor-pointer ml-2.5 "
                            onClick={likeHandler}
                            fill={likeColor}
                        />
                        <span className="postLikeCounter pt-2 text-sm ">
                            {like} People liked this
                        </span>
                    </div> */}

                        <div className="postBottomRight w-full">
                            <span
                                className="postCommentText cursor-pointer text-sm   "
                                onClick={() => commentFieldHandler()}
                            >
                                <span className="Kommentare ">
                                    {" "}
                                    {post.comments?.length} Kommentare
                                </span>
                            </span>

                            {showBox && (
                                <div className="commentsSection mt-2.5 ">
                                    <>
                                        <div className="commentArea flex-col  space-y-3 ">
                                            {post.comments?.map((c, index) => (
                                                <div
                                                    className="singleCommentField input p-5 mr-1 ml-1 border-2 
                                                    "
                                                    key={index}
                                                >
                                                    {" "}
                                                    <div className="flex justify-between ">
                                                        <div className="commentOwner pr-2 ">
                                                            {c.userId ===
                                                            currentUser._id ? (
                                                                <span className=" text-xs text-palette-80 ">
                                                                    {
                                                                        currentUser.firstName
                                                                    }{" "}
                                                                    {
                                                                        currentUser.lastName
                                                                    }
                                                                </span>
                                                            ) : (
                                                                <span className=" text-xs text-palette-80  ">
                                                                    {allUsers.map(
                                                                        (i) => {
                                                                            if (
                                                                                i._id ===
                                                                                c.userId
                                                                            ) {
                                                                                return (
                                                                                    <span>
                                                                                        {
                                                                                            i.firstName
                                                                                        }{" "}
                                                                                        {
                                                                                            i.lastName
                                                                                        }
                                                                                    </span>
                                                                                );
                                                                            }
                                                                        }
                                                                    )}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className="commentAndDate  ">
                                                            <span className="commentSpan">
                                                                {" "}
                                                                {c.comment}{" "}
                                                                <span className="commentDate ml-16 text-xxs">
                                                                    {" "}
                                                                    {format(
                                                                        c.createdAt
                                                                    )}
                                                                </span>{" "}
                                                            </span>
                                                        </div>
                                                        {c.userId ===
                                                        currentUser._id ? (
                                                            <div className="flex  ">
                                                                <RiDeleteBinLine
                                                                    className="DeleteCommentIcon cursor-pointer mr-2"
                                                                    title="Löschen"
                                                                    onClick={() =>
                                                                        deleteCommentIconHandler(
                                                                            c._id
                                                                        )
                                                                    }
                                                                />
                                                                <RiEditLine />
                                                            </div>
                                                        ) : (
                                                            <div className="flex gap-2 "></div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                    <form
                                        className="commentForm mt-5 flex-col p-4 border-2 border-palette-80 rounded-xl shadow"
                                        onSubmit={submitCommentHandler}
                                    >
                                        <textarea
                                            className="commentFormTextarea w-full  resize-none outline-none p-3 input"
                                            placeholder={"kommentieren..."}
                                            ref={comment}
                                        ></textarea>
                                        <div className="commentFormBtns mt-2"></div>
                                        <button
                                            className="commentBtn bg-palette-60 text-palette-50 p-1.5 btn mr-5"
                                            type="submit"
                                        >
                                            kommentieren
                                        </button>
                                        <button
                                            className="Abbrechen  bg-palette-60 text-palette-50 p-1.5 btn mr-5"
                                            type="button"
                                        >
                                            {" "}
                                            abbrechen
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
