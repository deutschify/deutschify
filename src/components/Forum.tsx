import React from "react";
import { useStore } from "../store";
// import { useNavigate } from "react-router";
import { Navigate } from "react-router-dom";
import PageLogin from "../Pages/PageLogin";

const Forum = () => {
    const currentUser = useStore((state) => state.currentUser);

    return (
        <>
            {currentUser.accessGroups?.includes("loggedInUsers") ? (
                <div>Forum: SEE THIS WHEN YOU ARE LOGGEDIN</div>
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
