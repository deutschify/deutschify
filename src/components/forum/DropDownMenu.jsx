import { Dropdown, ButtonToolbar } from "rsuite";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const DropDownMenu = () => {
    return (
        <div className="dropdown pt-2 pl-2 leading-8 pb-4 md:hidden">
            <Dropdown title="Forum" className="text-palette-50 pl-3">
                <div className="menuItems ml-12 bg-palette-40 box-border w-48 pl-12 rounded-lg  ">
                    {/* <div className=" hover:text-palette-80  ">
                        <Dropdown.Item>
                            <NavLink to="/forum">
                                <p>Forum</p>
                            </NavLink>
                        </Dropdown.Item>
                    </div> */}
                    <div className=" hover:text-palette-80  ">
                        <Dropdown.Item>
                            <NavLink to="/forum/news-feed/all">
                                <p>News feed</p>
                            </NavLink>
                        </Dropdown.Item>
                    </div>
                    <div className=" hover:text-palette-80 ">
                        <Dropdown.Item>
                            <NavLink to="/forum/my-posts">
                                <p>Meine Beiträge</p>
                            </NavLink>
                        </Dropdown.Item>
                    </div>
                </div>
            </Dropdown>
        </div>
    );
};

export default DropDownMenu;
