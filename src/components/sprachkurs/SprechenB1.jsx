import { Navigate, useNavigate } from "react-router-dom";
import Construction from "../../../public/images/construction.png";
import { useStore } from "../../store";

function SprechenB1() {
    const navigate = useNavigate();
    const currentUser = useStore((state) => state.currentUser);
    return (
        <>
            {currentUser.accessGroups?.includes("loggedInUsers") ? (
                <div className="mb-12">
                    {" "}
                    <div className="cover m-6 md:flex justify-center items-center">
                        <div className=" coaster p-4 text-xl text-center m-4 text-palette-60">
                            Wir arbeiten an Übungen zum Sprachbausteine im
                            Sprachniveau B1
                        </div>
                        <div className="text-palette-60 text-center font-block1 text-4xl m-6 flex flex-col items-center">
                            Wir sind bald für euch da
                            <img
                                src={Construction}
                                alt=""
                                className="w-8/12 bg-palette-40 m-4 border-4 border-palette-60 rounded-xl "
                            />
                        </div>
                    </div>{" "}
                    <div className="flex justify-center">
                        {" "}
                        <button
                            onClick={() => navigate(-1)}
                            className="btn p-1 md:p-6 text-palette-60 rounded-full h-20 md:rounded-xl text-lg"
                            // className="buttons"
                        >
                            zurück
                        </button>
                    </div>
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
}

export default SprechenB1;
