import { Nav } from "rsuite";
import A1 from "../A1";
import A2 from "../A2";
import B1 from "../B1";
import Einbuergerungstest from "../Einbuergerungstest";
import Dictionary from "../Dictionary";
import Forum from "../Forum";

const NavBar = () => {
    return (
        <div className="w-full flex items-center">
            <Nav className="w-full h-24">
                <div className="flex">
                    <div className="p-10 w-80">
                        <Nav.Menu
                            className="text-2xl"
                            trigger={["click", "hover"]}
                            title="Übungen"
                        >
                            <div className="flex bg-palette-70 text-palette-80">
                                <Nav.Menu
                                    className="relative"
                                    title="Sprachniveau"
                                >
                                    {/* <div className="absolute w-40 left-60 bottom"> */}
                                    <div className="absolute w-40 left-20 text-center">
                                        <Nav.Item
                                            className="bg-palette-60/75 text-palette-80"
                                            to="/A1"
                                            element={<A1 />}
                                        >
                                            A1
                                        </Nav.Item>
                                        <Nav.Item
                                            className="bg-palette-60/75 text-palette-80"
                                            to="/A2"
                                            element={<A2 />}
                                        >
                                            A2
                                        </Nav.Item>
                                        <Nav.Item
                                            className="bg-palette-60/75 text-palette-80"
                                            to="/B1"
                                            element={<B1 />}
                                        >
                                            B1
                                        </Nav.Item>
                                    </div>
                                </Nav.Menu>
                            </div>
                            <Nav.Item
                                className="bg-palette-70 text-palette-80"
                                to="/einbuergerungstest"
                                element={<Einbuergerungstest />}
                            >
                                Leben in Deutschland
                            </Nav.Item>
                        </Nav.Menu>
                    </div>
                    <Nav.Item
                        className="p-10 w-80 text-2xl"
                        to="/dictionary"
                        element={<Dictionary />}
                    >
                        Wörterbuch
                    </Nav.Item>
                    <Nav.Item
                        className="p-10 text-2xl w-80"
                        to="/forum"
                        element={<Forum />}
                    >
                        Forum
                    </Nav.Item>
                </div>
            </Nav>
        </div>
    );
};

export default NavBar;
