import { Nav } from "rsuite";
import Sprachkurs from "../sprachkurs/Sprachkurs";
import A1 from "../sprachkurs/A1";
import A2 from "../sprachkurs/A2";
import B1 from "../sprachkurs/SchreibenB1";
import Einbuergerungstest from "../orientierung/Einbuergerungstest";
import Dictionary from "../dictionary/Dictionary";
import Forum from "../forum/Forum";
import { NavLink } from "react-router-dom";
import { useStore } from "../../store";
import PageLogin from "../../Pages/PageLogin";
import PageRegister from "../../Pages/PageRegister";
import { PageLogout } from "../../Pages/PageLogout";
import PageUserSettings from "../../Pages/PageUserSettings";
import "../../App.css";

function NavbarDesktop() {
    const currentUser = useStore((state) => state.currentUser);

    return (
        <div className="hidden md:block">
            <Nav className=" w-full h-24">
                <div className="flex h-24 mt-6">
                    <div className="p-10 w-80 relative">
                        <Nav.Menu
                            className="text-2xl border-none hover:text-palette-80 z-40"
                            trigger={["click", "hover"]}
                            title="Übungen"
                        >
                            {" "}
                            <div className="bg-palette-80 w-80 rounded-lg p-4 border-2 border-palette-60 z-40 ">
                                <div className=" text-palette-50 hover:text-palette-60 pb-4 ">
                                    <NavLink
                                        className=""
                                        to="/sprachkurs"
                                        element={<Sprachkurs />}
                                    >
                                        {" "}
                                        <Nav.Menu
                                            className="text-center z-40"
                                            title="Sprachkurs"
                                        >
                                            <div className="flex flex-col w-40 absolute left-48 border-2 border-palette-60 rounded-xl p-4 bg-palette-70 transition duration-500 ease-in z-40">
                                                <NavLink
                                                    className=" text-palette-50 hover:text-palette-60"
                                                    to="/sprachkurs/a1"
                                                    element={<A1 />}
                                                >
                                                    A1
                                                </NavLink>
                                                <NavLink
                                                    className="text-palette-50 hover:text-palette-60 p-4 z-40"
                                                    to="//sprachkurs/a2"
                                                    element={<A2 />}
                                                >
                                                    A2
                                                </NavLink>
                                                <NavLink
                                                    className="text-palette-50 hover:text-palette-0 z-40"
                                                    to="/sprachkurs/b1"
                                                    element={<B1 />}
                                                >
                                                    B1
                                                </NavLink>
                                            </div>
                                        </Nav.Menu>
                                    </NavLink>
                                </div>{" "}
                                <NavLink
                                    className="bg-palette-80 text-palette-50 hover:text-palette-60 flex justify-center rounded-b-xl z-40"
                                    to="/einbuergerungstest"
                                    element={<Einbuergerungstest />}
                                >
                                    Orientierungskurs
                                </NavLink>
                            </div>
                        </Nav.Menu>
                    </div>
                    <NavLink
                        className="py-10 px-4 mr-28 text-2xl hover:text-palette-80"
                        to="/dictionary"
                        element={<Dictionary />}
                    >
                        Wörterbuch
                    </NavLink>

                    <NavLink
                        className="py-10 px-4 text-2xl hover:text-palette-80 mr-40"
                        to="/forum"
                        element={<Forum />}
                    >
                        Forum
                    </NavLink>
                    {currentUser.accessGroups?.includes("loggedOutUsers") && (
                        <div className="flex items-center m-5">
                            <NavLink
                                className="w-40 text-center border-4 border-palette-60 bg-palette-70 p-4 text-xl rounded-xl shadow-outer hover:shadow-inner hover:text-palette-50 m-5"
                                to="/login"
                                element={<PageLogin />}
                            >
                                Login
                            </NavLink>
                            <NavLink
                                className="w-40 text-center bg-palette-80 border-4 border-palette-60 p-4 text-xl rounded-xl hover:shadow-inner hover:text-palette-50 shadow-outer"
                                to="/registration"
                                element={<PageRegister />}
                            >
                                Register
                            </NavLink>
                        </div>
                    )}

                    {currentUser.accessGroups?.includes("loggedInUsers") && (
                        <div className="w-40 flex items-center justify-end">
                            <NavLink
                                className="bg-palette-80 p-4 text-2xl py-2 rounded-full  hover:text-palette-50 hover:border-4 hover:border-palette-60"
                                to={`/${currentUser.firstName}`}
                                element={<PageUserSettings />}
                            >
                                {currentUser.avatar ? (
                                    <img src={`${currentUser.avatar}`} alt="" />
                                ) : (
                                    <p>{currentUser.firstName[0]}</p>
                                )}
                            </NavLink>
                        </div>
                    )}

                    {currentUser.accessGroups?.includes("loggedInUsers") && (
                        <PageLogout />
                    )}
                </div>
            </Nav>
        </div>
    );
}

export default NavbarDesktop;
