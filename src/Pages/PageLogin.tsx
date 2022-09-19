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
            // navigate('/home');
            console.log("success");
        }
        // console.log(data);
        
    };

    return (
        <div>
            <h1 className="text-2xl">Welcome to Login</h1>
            <form
                className="bg-white shadow-md rounded flex-col"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <input
                        defaultValue=""
                        {...register("email")}
                        placeholder="email"
                    />
                    {errors.email && <p>{errors?.email?.message}</p>}
                </div>
                <div>
                    <input
                        defaultValue=""
                        {...register("password")}
                        placeholder="password"
                    />
                    {errors.password && <p>{errors?.password?.message}</p>}
                </div>

                <div>
                    <input type="submit" value="login" />
                </div>
            </form>
        </div>
    );
};

export default PageLogin;
