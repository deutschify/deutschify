import DropDownMenu from "../DropDownMenu";
// import Feed from "./Feed";
import NavForum from "../NavForum";
import Post from "../post/Post";
import Share from "../share/Share";

const NewsFeed = () => {
    return (
        <div>
            <DropDownMenu />
            <NavForum />
            <div className="feedWrapper flex flex-col justify-center items-center pt-8 pb-6 ">
                <Share />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>

            {/* <main className="newsFeed">
                {posts.length ? (
                    <Feed posts={posts} />
                ) : (
                    <p className="noParagraph p-2"> No posts to display</p>
                )}
            </main> */}
        </div>
    );
};

export default NewsFeed;
