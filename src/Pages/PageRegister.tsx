import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { IUserLoginForm, IUserRegistrationForm } from "../interfaces";

import { Routes, Route } from "react-router";
import { NavLink } from "react-router-dom";
import PageLogin from "./PageLogin";
import { useStore } from "../store";

import Image from "../../public/images/person-studying-online.png";

interface IPageRegistrationProps {
    baseUrl: string;
    // setCurrentUser: React.Dispatch<React.SetStateAction<IUserLoginForm>>;
}

interface ILanguage {
    code: number;
    name: string;
}
interface ICountry {
    name: string;
}

const schema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Vorname soll keine Nummer haben")
        .required(),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Nachname soll keine Nummer haben")
        .required(),
    email: yup.string().email().required(),
    password: yup.string().min(3).max(12).required(),
    repeatPassword: yup.string().oneOf([yup.ref("password"), null]),
    nationality: yup.string().required("Required"),
    language: yup.string().required("Required"),
});

const PageRegister = (props: IPageRegistrationProps) => {
    const [success, setSuccess] = useState(false);
    const [notification, setNotification] = useState("");
    const { baseUrl } = props;
    const fetchLanguages = useStore((state) => state.fetchLanguages);
    const languages = useStore((state) => state.languages);
    const countries = useStore((state) => state.countries);

    // useEffect(() => {
    //     fetchLanguages();
    // }, []);

    const {
        setValue,
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IUserRegistrationForm>({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IUserRegistrationForm> = async (
        data: IUserRegistrationForm
    ) => {
        const { firstName, lastName, email, password, language, nationality } =
            data;

        const toSend = await axios.post(
            `${baseUrl}/register`,
            {
                firstName,
                lastName,
                email,
                password,
                language,
                nationality,
                safeOriginCode: import.meta.env.VITE_SAFE_ORIGIN_CODE,
            },
            { withCredentials: true }
        );
        if (toSend.data.message === "Email is registered!") {
            setNotification("Account already in use.");
            console.log(toSend);
            console.log(errors);
            console.log(notification);
        } else {
            setSuccess(true);
            console.log(toSend.data.message);
            // navigate('/login')
        }
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
                <div>

                    <h1 className="text-center text-2xl pb-3 ">
                        Welcome to Register
                    </h1>
                    {success ? (
                <p>go to your Email to verify your account.</p>
            ) : (
                notification
            )}
                    <form
                        className=" flex-col"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="py-[20px] ">
                            <input
                                className="  w-[20rem] text-palette-50 border-2 border-palette-30   bg-palette-40 text-center rounded-3xl py-3 px-4 focus:outline-none   placeholder-palette-50"
                                defaultValue=""
                                {...register("firstName")}
                                placeholder="firstName"
                            />
                            {errors.firstName && (
                                <p>{errors?.firstName?.message}</p>
                            )}
                        </div>
                        <div className="py-[20px] ">
                            <input
                                className="  w-[20rem] text-palette-50 border-2 border-palette-30  bg-palette-40 text-center rounded-3xl py-3 px-4 focus:outline-none   placeholder-palette-50"
                                defaultValue=""
                                {...register("lastName")}
                                placeholder="lastName"
                            />
                            {errors.lastName && (
                                <p>{errors?.lastName?.message}</p>
                            )}
                        </div>

                        <div className="py-[20px] ">
                            <input
                                className="  w-[20rem] text-palette-50 border-2 border-palette-30  bg-palette-40 text-center rounded-3xl py-3 px-4 focus:outline-none   placeholder-palette-50"
                                defaultValue=""
                                {...register("email")}
                                placeholder="email"
                            />
                            {errors.email && <p>{errors?.email?.message}</p>}
                        </div>
                        <div className="py-[20px] ">
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
                        <div className="py-[20px] ">
                            <input
                                className="  w-[20rem] text-palette-50 border-2 border-palette-30  bg-palette-40 text-center rounded-3xl py-3 px-4 focus:outline-none   placeholder-palette-50"
                                placeholder="repeat-password"
                                defaultValue=""
                                {...register("repeatPassword")}
                            />
                            {errors.repeatPassword && (
                                <p>Password don't match!</p>
                            )}
                        </div>
                        <div className=" text-center">
                            <select
                                className="border-2 border-palette-30   text-center bg-palette-20 rounded-3xl px-5 py-2"
                                {...register("language")}
                        onChange={(e) =>
                            setValue("language", e.target.value, {
                                shouldValidate: true,
                            })
                        } // Using setValue
                        defaultValue=""
                        name="language"
                            >
                                {languages.map((language: ILanguage) => {
                            return (
                                <option
                                className="bg-palette-60 "
                                    key={language.code}
                                    value={`${language.code}`}
                                >
                                    {" "}
                                    {language.name}
                                </option>
                            );})}
                               
                            </select>
                            {errors.language && (
                                <p>{errors?.language?.message}</p>
                            )}
                        </div>
                        <div className=" text-center">
                            <select
                                className="border-2 border-palette-30   text-center bg-palette-20 rounded-3xl px-5 py-2"
                                {...register("nationality")}
                                onChange={(e) =>
                            setValue("nationality", e.target.value, {
                                shouldValidate: true,
                            })
                        } // Using setValue
                        defaultValue=""
                        name="nationality"
                            >
                                {countries.map((country: ICountry) => {
                            return (
                                <option
                                className="bg-palette-60 "
                                    key={country.name}
                                    value={`${country.name}`}
                                >
                                    {" "}
                                    {country.name.substring(0, 18)}
                                </option>
                            );
                        })}
                            </select>
                            {errors.nationality && (
                                <p>{errors?.nationality?.message}</p>
                            )}
                        </div>
                        <div className="text-center py-[20px]">
                            <input
                                className="bg-palette-30 px-8 py-2 rounded-3xl "
                                type="submit"
                                value="Sign Up"
                            />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default PageRegister;
function setValue(
    arg0: string,
    value: string,
    arg2: { shouldValidate: boolean }
): void {
    throw new Error("Function not implemented.");
}
