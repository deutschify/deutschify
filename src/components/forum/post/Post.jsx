import { CgMoreVerticalAlt } from "react-icons/cg";
import { FaThumbsUp } from "react-icons/fa";
import { useState } from "react";

const Post = () => {
    const [like, setLike] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [likeColor, setLikeColor] = useState("");

    const likeHandler = () => {
        // setLike(
        //     isLiked
        //         ? like - 1 + setLikeColor("")
        //         : like + 1 + setLikeColor("red")
        // );

        if (isLiked) {
            let _like = like - 1;
            setLikeColor("");
            setLike(_like);
        } else {
            let _like = like + 1;
            setLikeColor("blue");
            setLike(_like);
        }

        setIsLiked(!isLiked);
    };

    return (
        <div className="post w-1/2 rounded-xl shadow-outer mt-7 mb-7 ">
            <div className="postWrapper p-2.5 ">
                <div className="potTop flex items-center justify-between">
                    <div className="postTopLeft flex items-center">
                        <span className="postUserName text-sm ml-2.5">
                            User Name
                        </span>
                        <span className="postDate text-xs ml-3">vor 1 tag</span>
                    </div>
                    <div className="postTopRight">
                        {/* vertical options */}
                        <CgMoreVerticalAlt className="" />
                    </div>
                </div>
                <div className="postCenter mt-5 mb-5">
                    <span className="postText">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe distinctio, delectus corporis pariatur consectetur
                        in iste atque veniam expedita ad, esse, tempora sed
                        velit consequatur. Voluptas ab autem exercitationem
                        error. Est, odit vel rerum maiores ipsam doloremque
                        soluta incidunt. At qui reiciendis architecto. Similique
                        vitae ipsa minima, quisquam vel qui tenetur aliquam nam
                        nesciunt, alias animi beatae inventore, quos suscipit.
                        Laboriosam sequi minus vero officia rem aut quam
                        perspiciatis facere unde autem tempora, illum quisquam
                        maiores nihil illo sit pariatur sapiente necessitatibus
                        consequatur culpa! Hic unde optio consequuntur culpa
                        qui! Non incidunt soluta culpa facere expedita fuga
                        perspiciatis ad ipsum, explicabo accusantium adipisci
                        ipsa in doloribus vero laborum quas doloremque
                        cupiditate, enim, modi voluptates aspernatur dolor.
                        Similique non odit earum? Excepturi ipsum minima
                        praesentium eum modi similique laudantium vero iusto
                        fugit, ducimus dolorem fugiat corrupti libero, sapiente
                        eaque suscipit et? Odio, tempore. Asperiores aperiam,
                        illo atque nesciunt similique dolores unde.
                    </span>
                    <img
                        className="postImage mt-5 w-full max-h-96 object-contain"
                        src="../../../../public/images/deutschifyLogo.png"
                        alt="image"
                    />
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
