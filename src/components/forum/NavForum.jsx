import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const NavForum = () => {
    return (
        <div className="navBar hidden md:flex md:justify-center md:justify-items-center pt-8 pb-6 ">
            <div className="md:border-2 md:border-palette-50 md:rounded-lg  md:h-20 shadow-outer bg-palette-80 md:flex box-border ">
                <div className="forumNavLink flex gap-x-24 pl-8 text-palette-60 text-lg ">
                    <NavLink to="/forum/news-feed/all" className="self-center">
                        News Feed
                    </NavLink>
                    {/* <NavLink to="/forum/new-post" className="self-center">
                        New Post
                    </NavLink> */}
                    <NavLink to="/forum/my-posts" className="self-center mr-7">
                        Meine Beiträge
                    </NavLink>
                    {/* search bar for forum */}
                    {/* <div className="self-center flex  ">
                        <div className="h-10  bg-palette-60 text-palette-80 rounded-3xl flex w-fit flex-shrink ">
                            <input
                                className="bg-transparent outline-none self-center pl-1 flex-shrink "
                                type="text"
                                placeholder="Suche..."
                                id="search-input"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button type="submit">
                                <BsSearch className="text-xl self-center pr-1 " />
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default NavForum;
