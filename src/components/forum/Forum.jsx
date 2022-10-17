import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import NewsFeed from "./news-feed/NewsFeed";
import MyPosts from "./myPosts/MyPosts";
import { useStore } from "../../store";
import PostEdit from "./post/PostEdit";

const Forum = () => {
    const userLoggedIn = JSON.parse(localStorage.getItem('user'))
    const currentUser = useStore((state) => state.currentUser);
    return (
        <>
            {userLoggedIn && userLoggedIn.accessGroups?.includes("loggedInUsers") ? (
                <div className="forumMainPage">
                    <Routes>
                        <Route path="/" element={<NewsFeed />} />
                        <Route
                            path="/forum/news-feed/all"
                            element={<NewsFeed />}
                        />
                        <Route path="/forum/my-posts" element={<MyPosts />} />
                        <Route
                            path="/forum/post/edit/:id"
                            element={<PostEdit />}
                        />
                    </Routes>
                </div>
            ) : (
                <>
                    <p>Login to see our form</p>
                    <Navigate replace to="/login" />

                    {/* <PageLogin baseUrl={""}/> */}
                </>
            )}
        </>
    );
};

export default Forum;
