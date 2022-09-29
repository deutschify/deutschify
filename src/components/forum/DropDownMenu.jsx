import { Dropdown, ButtonToolbar } from "rsuite";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const DropDownMenu = () => {
    return (
        <div className="dropdown pt-2 pl-2 leading-8 pb-4 md:hidden">
            <Dropdown title="Forum" className="">
                <div className="menuItems border-8  box-border w-48 pl-12 rounded-lg transition duration-700 ease-in-out">
                    <div className=" hover:text-palette-80  ">
                        <Dropdown.Item>
                            <NavLink to="/forum">
                                <p>Forum</p>
                            </NavLink>
                        </Dropdown.Item>
                    </div>
                    <div className=" hover:text-palette-80  ">
                        <Dropdown.Item>
                            <NavLink to="/forum/news-feed/all">
                                <p>News feed</p>
                            </NavLink>
                        </Dropdown.Item>
                    </div>
                    {/* <div className=" hover:text-palette-80 ">
                        <Dropdown.Item>
                            <NavLink to="/forum/new-post">
                                <p>New post</p>
                            </NavLink>
                        </Dropdown.Item>
                    </div> */}
                    <div className=" hover:text-palette-80 ">
                        <Dropdown.Item>
                            <NavLink to="/forum/my-posts">
                                <p>Meine Posten</p>
                            </NavLink>
                        </Dropdown.Item>
                    </div>
                </div>
            </Dropdown>
        </div>
    );
};

export default DropDownMenu;
