import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import useStore from '../store/store';

import { IUserLoginForm } from "../interfaces";
import axios from "axios";
import { useStore } from "../store";
import { useNavigate } from "react-router";


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
    // const baseUrl = useStore((state) => state.baseUrl);

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
        console.log({_currentUser});
        
        if (_currentUser.email === "anonymousUser") {
            // errors('bad login');
            console.log("bad login");
        } else {
            fetchCurrentUser()
            console.log(currentUser);
            console.log(fetchCurrentUser());
            navigate('/home');
            console.log("success");
        }
        // console.log(data);
        
    };

    return (

        <div className="  md:grid grid-cols-2 min-h-[800px] ">
            <div className=" hidden md:flex flex-col justify-center items-start w-[700px]">

                <div>
                    {" "}
                    <img className=" w-[600px]" src={Image} alt="" />{" "}
                </div>

            </div>
            <div className=" py-[200px] flex flex-col justify-center items-center ">
                <div className="">
                    <h1 className="text-center text-2xl pb-3  ">LOGIN</h1>
                    <form
                        className=" flex-col "
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="py-[30px] ">
                            <input
                                className="  w-[20rem] text-palette-50 border-2 border-palette-30   bg-palette-40 text-center rounded-3xl py-3 px-4 focus:outline-none   placeholder-palette-50"
                                defaultValue=""
                                {...register("email")}
                                placeholder="email"
                            />
                            {errors.email && <p>{errors?.email?.message}</p>}
                        </div>
                        <div>
                            <input
                                className="  w-[20rem] text-palette-50 border-2 border-palette-30  bg-palette-40 text-center rounded-3xl py-3 px-4 focus:outline-none   placeholder-palette-50"
                                defaultValue=""
                                {...register("password")}
                                placeholder="password"
                            />
                            {errors.password && (
                                <p>{errors?.password?.message}</p>
                            )}
                        </div>

                        <div className="text-center py-7">
                            <input
                                className="bg-palette-30 px-8 py-2 rounded-3xl "
                                type="submit"
                                value="login"
                            />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default PageLogin;
