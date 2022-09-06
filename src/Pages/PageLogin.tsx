import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// const baseUrl = import.meta.env.VITE_BACKEND_URL;
//     const [currentUser, setCurrentUser] = useState({});

//     useEffect(() => {
//         (async () => {
//             const data = (await axios.get(`${baseUrl}/current-user`)).data;
//             const _currentUser = data.currentUser;
//             setCurrentUser(_currentUser);
//         })();
//     }, []);


const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(3).max(12).required(),
});

interface IUserForm {
    email: string;
    password: string;
}

const PageLogin = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IUserForm>({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IUserForm> = (data: IUserForm) => {
        console.log(data);
        console.log(errors);
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
