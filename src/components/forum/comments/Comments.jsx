import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";

const Comments = ({ currentUser }) => {
    const [comments, setComments] = useState([]);
    return (
        <div>
            <CommentForm />
        </div>
    );
};

export default Comments;
