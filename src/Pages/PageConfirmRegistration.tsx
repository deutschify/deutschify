import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { IUserLoginForm } from "../interfaces";
import axios from "axios";

interface IPageConfirmRegistrationProps {
    baseUrl: string;
    // setCurrentUser: React.Dispatch<React.SetStateAction<IUserLoginForm>>;
}

enum ConfirmStatus {
    unconfirmed,
    failed,
    succeeded,
}

const PageConfirmRegistration = (
    props: IPageConfirmRegistrationProps
) => {
    const [confirmStatus, setConfirmStatus] = useState<ConfirmStatus>(
        ConfirmStatus.unconfirmed
    );
    const { confirmationCode } = useParams();
    const { baseUrl } = props;
    

    useEffect(() => {
        (async () => {
            const data = (
                await axios.post(
                    `${baseUrl}/confirm-registration-code`,
                    { confirmationCode },
                    { withCredentials: true }
                )
                
            ).data;
            
            console.log(data);
            
            if (data.userWasConfirmed) {
                setConfirmStatus(ConfirmStatus.succeeded);
            } else {
                setConfirmStatus(ConfirmStatus.failed);
            }
        })();
    }, []);

    return (
        <>
            {confirmStatus === ConfirmStatus.succeeded && (
                <>
                    <div className="flex flex-col  cover justify-center  p-10   m-20 h-[30rem] ">
                        <div className="coaster text-center p-">
                            <div className="p-3 text-xl">
                                {" "}
                                <p>
                                    Thank you for confirming your email address.
                                </p>
                            </div>
                            <div className="p-3 text-xl">
                                {" "}
                                <p>You are now a member of this site!</p>
                            </div>
                            <div className="p-3 text-xl">
                                {" "}
                                <div className="p-3 text-xl">
                                    <p> Please log in to the site here: </p>
                                </div>
                                <button className="w-40 text-center border-4 border-palette-60 bg-palette-70 p-2 text-xl rounded-xl shadow-outer hover:shadow-inner hover:text-palette-50 m-5">
                                    <NavLink to="/login">Login</NavLink>
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {confirmStatus === ConfirmStatus.failed && (
                <>
                    <p>Sorry, the confirmation code is not valid.</p>
                    <p>
                        Please <NavLink to="/register">register again</NavLink>{" "}
                        to become a member.
                    </p>
                </>
            )}
        </>
    );
};

export default PageConfirmRegistration