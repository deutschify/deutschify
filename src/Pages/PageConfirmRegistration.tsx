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
                                    Danke für die Bestätigung
                                </p>
                            </div>
                            <div className="p-3 text-xl">
                                {" "}
                                <p>Willkommen, du bist nun Mitglied dieser Seite. Dir steht ab sofort alle Übungen, sowie das Forum zur Verfügung. Viel spaß bei den Übungen und viel Erfolg! Melde dich im Forum, wenn wir dir helfen können. </p>
                            </div>
                            <div className="p-3 text-xl">
                                {" "}
                                <div className="p-3 text-xl">
                                    <p> Bitte logge dich hier ein </p>
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
                    <p>Der Bestätigungscode ist leider nicht gültig</p>
                    <p>
                        Bitte <NavLink to="/register">registriere dich erneut</NavLink>{" "}
                        um alle Funktionen der Seite zu nutzen
                    </p>
                </>
            )}
        </>
    );
};

export default PageConfirmRegistration