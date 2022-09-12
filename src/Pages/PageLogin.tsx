import React, {useEffect, useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import useStore from '../store/store';
import {IUserLoginForm} from '../interfaces'

interface IPageLoginProps {
	baseUrl: string;
	setCurrentUser: React.Dispatch<React.SetStateAction<IUserLoginForm>>;
}

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(3).max(12).required(),
});

const PageLogin = (props: IPageLoginProps) => {
    
    const { baseUrl, setCurrentUser } = props;
    // const currentUser = useStore(state => state.currentUser);

    // useEffect(() => {
    //     (async () => {
    //         const data = (await axios.get(`${baseUrl}/current-user`)).data;
    //         console.log(data.currentUser);
            
    //         const _currentUser = data.currentUser;
    //         setCurrentUser(_currentUser);
            
    //     })();
    // }, []);
    
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IUserLoginForm>({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IUserLoginForm> = (data: IUserLoginForm) => {
        console.log(data);
        console.log(errors);
        console.log('success');
        
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
