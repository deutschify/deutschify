import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { IUserLoginForm, IUserRegistrationForm } from "../interfaces";

interface IPageRegistrationProps {
    baseUrl: string;
    // setCurrentUser: React.Dispatch<React.SetStateAction<IUserLoginForm>>;
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
});

const PageRegister = (props: IPageRegistrationProps) => {
    const [success, setSuccess] = useState(false);
    const { baseUrl } = props;
    const {
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
        setSuccess(true)
        console.log(toSend);
        console.log(errors);
    };

    return (
        <div>
            <h1 className="text-2xl">Welcome to Register</h1>
            {success ? "go to your Email to verify your account." : ""}
            <form
                className="bg-white shadow-md rounded flex-col"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <input
                        defaultValue=""
                        {...register("firstName")}
                        placeholder="firstName"
                    />
                    {errors.firstName && <p>{errors?.firstName?.message}</p>}
                </div>
                <div>
                    <input
                        defaultValue=""
                        {...register("lastName")}
                        placeholder="lastName"
                    />
                    {errors.lastName && <p>{errors?.lastName?.message}</p>}
                </div>
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
                    <input
                        placeholder="repeat-password"
                        defaultValue=""
                        {...register("repeatPassword")}
                    />
                    {errors.repeatPassword && <p>Password don't match!</p>}
                </div>
                <div>
                    <select {...register("language")}>
                        <option value="deutsch">deutsch</option>
                    </select>
                </div>
                <div>
                    <select {...register("nationality")}>
                        <option value="deutsche">Deutsche</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="Sign Up" />
                </div>
            </form>
        </div>
    );
};

export default PageRegister;
