import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
    const {
        formState: { errors },
        register,
        handleSubmit,
    } = useForm<IUserForm>();
    
    
    const onSubmit:SubmitHandler<IUserForm> = (data:IUserForm) => {
        console.log(data)
    };

    return (
        <div>
            <h1 className="text-2xl">Welcome to Register</h1>
            <form className="bg-white shadow-md rounded flex-col" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        defaultValue=""
                        {...register("vorName")}
                        placeholder="Vorname"
                    />
                </div>
                <div>
                    <input
                        defaultValue=""
                        {...register("nachName")}
                        placeholder="Nachname"
                    />
                </div>
                <div>
                    <input
                        defaultValue=""
                        {...register("email")}
                        placeholder="email"
                    />
                </div>
                <div>
                    <input
                        defaultValue=""
                        {...register("password")}
                        placeholder="password"
                    />
                </div>
                <div>
                    <input
                        placeholder="repeat-password"
                        defaultValue=""
                        {...register("repeatPassword")}
                    />
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
