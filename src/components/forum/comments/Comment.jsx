import { useState, useEffect } from "react";
import axios from "axios";
import { useStore } from "../../../store";

const Comment = () => {
    const backend_base_url = "http://localhost:8000";

    const fetchCurrentUser = useStore((state) => state.fetchCurrentUser);
    const currentUser = useStore((state) => state.currentUser);
    const fetchPosts = useStore((state) => state.fetchPosts);
    const posts = useStore((state) => state.posts);

    useEffect(() => {
        fetchCurrentUser();
        fetchPosts();
        // console.log(currentUser._id);
        // console.log(fetchPosts);
        console.log(posts);
    }, []);

    // const [comments, setComments] = useState([]);
    // console.log(comments);

    // useEffect(() => {
    //     const fetchComments = async () => {
    //         const response = await axios.get(
    //             backend_base_url + `/posts/comments/${post._id}`
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

    return <div>Comment</div>;
};

export default Comment;
