import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import NewsFeed from "./news-feed/NewsFeed";
import NewPost from "./NewPost";
import MyPosts from "./MyPosts";
import NavForum from "./NavForum";
import AboutForum from "./AboutForum";
import { useStore } from "../../store";

const Forum = () => {
    const [search, setSearches] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = useStore((state) => state.currentUser);

    return (
        <>
            {currentUser.accessGroups?.includes("loggedInUsers") ? (
                <div className="forumMainPage">
                    <DropDownMenu />
                    <NavForum search={search} setSearches={setSearches} />
                    <Routes>
                        <Route path="/" element={<AboutForum />} />
                        <Route
                            path="/forum/news-feed/all"
                            element={<NewsFeed />}
                        />
                        <Route path="/forum/new-post" element={<NewPost />} />
                        <Route path="/forum/my-post" element={<MyPosts />} />
                    </Routes>
                    {/* <AboutForum /> */}
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
