import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IUserLoginForm } from "../interfaces";
import axios from "axios";
import { useStore } from "../store";
import { Route, Routes, useNavigate } from "react-router";
import PageConfirmRegistration from "./PageConfirmRegistration";
import { NavLink } from "react-router-dom";

export interface IPageLoginProps {
    baseUrl: string;
    // setCurrentUser: React.Dispatch<React.SetStateAction<IUserLoginForm>>;
}

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(3).max(12).required(),
});

const PageLogin = (props: IPageLoginProps) => {
    const { baseUrl } = props;
    const navigate = useNavigate();
    const fetchCurrentUser = useStore((state) => state.fetchCurrentUser);
    const currentUser = useStore((state) => state.currentUser);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IUserLoginForm>({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IUserLoginForm> = async (
        data: IUserLoginForm
    ) => {
        const user = (
            await axios.post(
                `${baseUrl}/login`,
                {
                    email: data.email,
                    password: data.password,
                    safeOriginCode: import.meta.env.VITE_SAFE_ORIGIN_CODE,
                },
                { withCredentials: true }
            )
        ).data;
        const _currentUser = user.currentUser;
        console.log({ _currentUser });

        if (_currentUser.email === "anonymousUser") {
            // errors('bad login');
            console.log("bad login");
        } else {
            fetchCurrentUser();
            // let userObj = {user: _currentUser, timestamp: new Date().getTime()}
            localStorage.setItem("user", JSON.stringify(_currentUser));
            localStorage.setItem("saved", `${new Date().getTime()}`);

            // console.log(currentUser);
            navigate("/home");
        }
        // console.log(data);
    };

    return (
        <div className="h-[75vh] flex flex-col justify-center">
            {" "}
            <div className="md:grid grid-cols-2 m-4 md:m-10">
                <div className="hidden md:flex flex-col justify-center items-start w-[700px] ">
                    <div>
                        {" "}
                        <img
                            className=""
                            src="/images/illus/login.png"
                            alt=""
                        />{" "}
                    </div>
                </div>
                <div className=" cover py-[120px] flex flex-col justify-center items-center">
                    <div className="">
                        <h1 className="text-center  text-palette-60 text-2xl pb-3 text-pal">
                            LOGIN
                        </h1>
                        <form
                            className=" flex-col "
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="py-[30px] ">
                                <input
                                    className="  w-[20rem] input border-2 text-center rounded-3xl py-3 px-4 focus:outline-none   placeholder-palette-50"
                                    defaultValue=""
                                    {...register("email")}
                                    placeholder="Email"
                                />
                                {errors.email && (
                                    <p>{errors?.email?.message}</p>
                                )}
                            </div>
                            <div>
                                <input
                                    className="  w-[20rem] input border-2 text-center rounded-3xl py-3 px-4 focus:outline-none   placeholder-palette-50"
                                    defaultValue=""
                                    type="password"
                                    {...register("password")}
                                    placeholder="Kennwort"
                                />
                                {errors.password && (
                                    <p>{errors?.password?.message}</p>
                                )}
                            </div>

                            <div className="text-center py-7">
                                <input
                                    className="btn w-80 p-4 border-palette-60 hover:bg-palette-60 hover:text-palette-50 active:text-palette-80"
                                    type="submit"
                                    value="einloggen"
                                />
                            </div>
                        </form>

                        <div className="form-group">
                            <span className="indent-1 mx-8 text-palette-60">
                                Kein Konto?
                                <span className="line">
                                    <span className="line">
                                        <NavLink
                                            to="/registration"
                                            className="text-palette-60 underline mx-4"
                                        >
                                            registrieren
                                        </NavLink>
                                    </span>
                                    <Routes>
                                        <Route
                                            path="/registration"
                                            element={
                                                <PageConfirmRegistration baseUrl="" />
                                            }
                                        />
                                    </Routes>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageLogin;
