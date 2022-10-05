import DropDownMenu from "../DropDownMenu";
// import Feed from "./Feed";
import NavForum from "../NavForum";
import Post from "../post/Post";
import Share from "../share/Share";
import { useState, useEffect } from "react";
import axios from "axios";

const NewsFeed = () => {
    const backend_base_url = "http://localhost:8000";
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get(
                backend_base_url + "/posts/news-feed/all"
            );
            //to get the posts sorted
            setPosts(
                response.data.sort((post1, post2) => {
                    return (
                        new Date(post2.createdAt) - new Date(post1.createdAt)
                    );
                })
            );
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <DropDownMenu />
            <NavForum />
            <div className="feedWrapper flex flex-col justify-center items-center pt-8 pb-6 ">
                <Share />
                {posts.map((p) => (
                    <Post key={p._id} post={p} />
                ))}
            </div>
        </div>
    );
};

export default NewsFeed;
