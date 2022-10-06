// import DropDownMenu from "./DropDownMenu";
// import NavForum from "./NavForum";
// import { useState, useEffect } from "react";
// import { useStore } from "../../store";
// import axios from "axios";

// const MyPosts = () => {
//     const backend_base_url = "http://localhost:8000";
//     const [myPosts, setMyPosts] = useState([]);

//     //fetching the current user
//     const fetchCurrentUser = useStore((state) => state.fetchCurrentUser);
//     const currentUser = useStore((state) => state.currentUser);

//     useEffect(() => {
//         fetchCurrentUser();
//         console.log(currentUser);
//         console.log(currentUser._id);
//     }, []);

//     useEffect(() => {
//         const fetchMyPosts = async () => {
//             const response = await axios.get(
//                 backend_base_url + `/posts/${currentUser._id}`
//             );
//             //to get the posts sorted
//             setMyPosts(
//                 response.data.sort((post1, post2) => {
//                     return (
//                         new Date(post2.createdAt) - new Date(post1.createdAt)
//                     );
//                 })
//             );
//         };
//         fetchMyPosts();
//     }, []);

//     return (
//         <div>
//             <DropDownMenu />
//             <NavForum />
//             {myPosts.map((p) => (
//                 <div> nnn</div>
//             ))}
//         </div>
//     );
// };

// export default MyPosts;
import React from "react";

const MyPosts = () => {
    return <div>MyPosts</div>;
};

export default MyPosts;
