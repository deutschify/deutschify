import React from "react";
import { useForm, SubmitHandler} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    vorName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Vorname soll keine Nummer haben")
        .required(),
    nachName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Nachname soll keine Nummer haben")
        .required(),
    email: yup.string().email().required(),
    password: yup.string().min(3).max(12).required(),
    repeatPassword: yup.string().oneOf([yup.ref("password"), null]),
});

interface IUserForm {
    vorName: string;
    nachName: string;
    email: string;
    password: string;
    repeatPassword: string;
    sprache: string;
    nationalität: string;
}

const PageRegister = () => {
    const {register, formState: {errors}, handleSubmit} = useForm<IUserForm>({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IUserForm> = (data: IUserForm) => {
        console.log(data);
        console.log(errors);
    };

    return (
        <div>
            <h1 className="text-2xl">Welcome to Register</h1>
                <form
                    className="bg-white shadow-md rounded flex-col"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                <input
                    defaultValue=""
                    {...register("vorName")}
                    placeholder="Vorname"
                />
                {errors.vorName && <p>{errors?.vorName?.message}</p>}
            </div>
            <div>
                <input
                    defaultValue=""
                    {...register("nachName")}
                    placeholder="Nachname"
                />
                {errors.nachName && <p>{errors?.nachName?.message}</p>}
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
                <select {...register("sprache")}>
                    <option value="deutsch">deutsch</option>
                </select>
            </div>
            <div>
                <select {...register("nationalität")}>
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
