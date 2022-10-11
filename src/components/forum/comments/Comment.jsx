import { useState, useEffect } from "react";
import axios from "axios";
import { useStore } from "../../../store";

const Comment = () => {
    const backend_base_url = "http://localhost:8000";

    const fetchCurrentUser = useStore((state) => state.fetchCurrentUser);
    const currentUser = useStore((state) => state.currentUser);
    const fetchPosts = useStore((state) => state.fetchPosts);
    const postIds = useStore((state) => state.postIds);
    const [id, setId] = useState("");
    const [comments, setComments] = useState();

    useEffect(() => {
        fetchCurrentUser();
        fetchPosts();
        // console.log(currentUser._id);
        //console.log(fetchPosts);
        //console.log(postIds);
    }, []);
    let _id = [];
    _id = postIds.map((id) => id);
    console.log(..._id);
    //setId(..._id);
    //console.log(postID);
    // const _postID = _id.slice(0, 25);
    // console.log(_postID, "postID");

    // const idPost = _postID;
    // console.log(comments);
    //console.log(id);
    // useEffect(() => {
    //     const fetchComments = async () => {
    //         const response = await axios.get(
    //             backend_base_url + `/posts/comments/${postID}`
    //         );
    //         //to get the posts sorted
    //         // setPosts(
    //         //     response.data.sort((post1, post2) => {
    //         //         return (
    //         //             new Date(post2.createdAt) - new Date(post1.createdAt)
    //         //         );
    //         //     })
    //         // );
    //     };
    //     fetchComments();
    // }, []);

    // console.log(comments.length);

    return (
        <div>
            comment{/* <div>{fetchingIds()}</div> */}
            {/* {postIds.map((id) => (
                <div>{id}</div>
            ))} */}
        </div>
    );
};

export default Comment;
