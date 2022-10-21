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

export interface ILanguage {
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
        .required("Vorname muss eingegeben werden"),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Nachname soll keine Nummer haben")
        .required("Nachname muss eingegeben werden"),
    email: yup.string().email().required("Email muss eingegeben werden"),
    password: yup
        .string()
        .min(3)
        .max(12)
        .required("Kennwort muss eingegeben werden"),
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
        <div className="  md:grid grid-cols-2  m-10">
            <div className=" hidden md:flex flex-col justify-center items-start w-[700px]">
                <div>
                    {" "}
                    <img className=" w-[600px]" src={Image} alt="" />{" "}
                </div>
            </div>
            <div className=" cover  flex flex-col justify-center items-center ">
                <div>
                    {success ? (
                        <p className="text-palette-60 py-3 px-4 bg-palette-80">
                            Wir haben Ihnen eine Email gesendet ihren Konto um
                            zu verifizieren
                        </p>
                    ) : (
                        notification
                    )}
                    <form
                        className=" flex-col m-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="py-[20px] ">
                            <input
                                className="  w-[20rem] input border-2 text-center rounded-3xl py-3 px-4 focus:outline-none   placeholder-palette-50"
                                defaultValue=""
                                {...register("firstName")}
                                placeholder="Vorname"
                            />
                            {errors.firstName && (
                                <p>{errors?.firstName?.message}</p>
                            )}
                        </div>
                        <div className="py-[20px] ">
                            <input
                                className=" w-[20rem] input border-2 text-center rounded-3xl py-3 px-4 focus:outline-none   placeholder-palette-50"
                                defaultValue=""
                                {...register("lastName")}
                                placeholder="Nachname"
                            />
                            {errors.lastName && (
                                <p>{errors?.lastName?.message}</p>
                            )}
                        </div>

                        <div className="py-[20px] ">
                            <input
                                className=" w-[20rem] input border-2 text-center rounded-3xl py-3 px-4 focus:outline-none   placeholder-palette-50"
                                defaultValue=""
                                {...register("email")}
                                placeholder="Email"
                            />
                            {errors.email && <p>{errors?.email?.message}</p>}
                        </div>
                        <div className="py-[20px] ">
                            <input
                                className=" w-[20rem] input border-2 text-center rounded-3xl py-3 px-4 focus:outline-none   placeholder-palette-50"
                                defaultValue=""
                                type="password"
                                {...register("password")}
                                placeholder="Kennwort"
                            />
                            {errors.password && (
                                <p>{errors?.password?.message}</p>
                            )}
                        </div>
                        <div className="py-[20px] ">
                            <input
                                className="  w-[20rem] input border-2 text-center rounded-3xl py-3 px-4 focus:outline-none   placeholder-palette-50"
                                placeholder="Wiederhole Kennwort"
                                defaultValue=""
                                type="password"
                                {...register("repeatPassword")}
                            />
                            {errors.repeatPassword && (
                                <p>Kennwort stimmt nicht</p>
                            )}
                        </div>
                        <div className="flex flex-row justify-center items-center justify-between">
                            <div className=" text-center ">
                                <select
                                    className="w-[10rem] mb-2 border-2 border-palette-60 text-center rounded-3xl py-3 px-4 outline-none text-palette-60 bg-palette-50 "
                                    {...register("language")}
                                    onChange={(e) =>
                                        setValue("language", e.target.value, {
                                            shouldValidate: true,
                                        })
                                    } // Using setValue
                                    defaultValue=""
                                    name="language"
                                >
                                    <option
                                        className="bg-palette-50"
                                        selected
                                        disabled
                                    >
                                        Sprache
                                    </option>
                                    {languages.map((language: ILanguage) => {
                                        return (
                                            <option
                                                className="bg-palette-50 "
                                                key={language.code}
                                                value={`${language.code}`}
                                            >
                                                {" "}
                                                {language.name}
                                            </option>
                                        );
                                    })}
                                </select>
                                {errors.language && (
                                    <p>{errors?.language?.message}</p>
                                )}
                            </div>
                            <div className=" text-center">
                                <select
                                    className="w-[10rem] mb-2 border-2 border-palette-60 text-center rounded-3xl py-3 px-4 outline-none text-palette-60 bg-palette-50"
                                    {...register("nationality")}
                                    onChange={(e) =>
                                        setValue(
                                            "nationality",
                                            e.target.value,
                                            {
                                                shouldValidate: true,
                                            }
                                        )
                                    } // Using setValue
                                    defaultValue=""
                                    name="nationality"
                                >
                                    <option
                                        className="bg-palette-50"
                                        selected
                                        disabled
                                    >
                                        Land
                                    </option>
                                    {countries.map((country: ICountry) => {
                                        return (
                                            <option
                                                className="bg-palette-50 "
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
                        </div>
                        <div className="text-center py-[20px]">
                            <input
                                className="btn px-8 p-2  "
                                type="submit"
                                value="Register"
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
