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
        .matches(/^([^0-9]*)$/, "Vorname soll keine Zahl enthalten")
        .required("Bitte gebe deinen Vornamen ein"),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Nachname soll keine Zahl enthalten")
        .required("Bitte gebe deinen Nachnamen ein"),
    email: yup.string().email().required("Bitte gebe deine Emailadresse ein"),
    password: yup
        .string()
        .min(3)
        .max(12)
        .required("Bitte gebe ein Passwort ein"),
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
        <div className="md:grid grid-cols-2 m-10">
            <div className="hidden md:flex flex-col justify-center items-center">
                <div>
                    {" "}
                    <img className="" src="/images/illus/register.png" alt="" />{" "}
                </div>
            </div>
            <div className="cover flex flex-col justify-center items-center">
                <div>
                    {success ? (
                        <p className="text-palette-60 py-3 px-4 bg-palette-80">
                            Wir haben Ihnen zur Verifizierung eine Email gesendet.
                        </p>
                    ) : (
                        notification
                    )}
                    <form
                        className="flex flex-col items-center"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="m-4">
                            <input
                                className="w-80 input border-2 text-center rounded-3xl py-3 px-4 focus:outline-none   placeholder-palette-50"
                                defaultValue=""
                                {...register("firstName")}
                                placeholder="Vorname"
                            />
                            {errors.firstName && (
                                <p>{errors?.firstName?.message}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <input
                                className=" w-80 input border-2 text-center rounded-3xl py-3 px-4 focus:outline-none   placeholder-palette-50"
                                defaultValue=""
                                {...register("lastName")}
                                placeholder="Nachname"
                            />
                            {errors.lastName && (
                                <p>{errors?.lastName?.message}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <input
                                className=" w-80 input border-2 text-center rounded-3xl py-3 px-4 focus:outline-none   placeholder-palette-50"
                                defaultValue=""
                                {...register("email")}
                                placeholder="Emailadresse"
                            />
                            {errors.email && <p>{errors?.email?.message}</p>}
                        </div>
                        <div className="mb-4">
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
                        <div className="mb-4">
                            <input
                                className="  w-[20rem] input border-2 text-center rounded-3xl py-3 px-4 focus:outline-none   placeholder-palette-50"
                                placeholder="Wiederhole das Kennwort"
                                defaultValue=""
                                type="password"
                                {...register("repeatPassword")}
                            />
                            {errors.repeatPassword && (
                                <p>Kennwort stimmt nicht überein</p>
                            )}
                        </div>
                        <div className="md:flex gap-4 m-4">
                            <div className=" text-center ">
                                <select
                                    className=" border-2 border-palette-60 text-center rounded-3xl p-4 outline-none text-palette-60 bg-palette-50 "
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
                                        Wähle eine Sprache aus
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
                                    className="mb-2 border-2 border-palette-60 text-center rounded-3xl p-4 outline-none text-palette-60 bg-palette-50"
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
                                        Wähle dein Ursprungsland aus
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
                                className="btn w-80 p-4 border-palette-60 hover:bg-palette-60 hover:text-palette-50 active:text-palette-80"
                                type="submit"
                                value="registrieren"
                            
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
