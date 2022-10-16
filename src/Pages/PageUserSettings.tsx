import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

import axios from "axios";
import { BiImageAdd } from "react-icons/bi";
import { IUserEditForm } from "../interfaces";
import { baseUrl, useStore } from "../store";
import { ILanguage } from "./PageRegister";

const schema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Vorname soll keine Nummer haben"),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Nachname soll keine Nummer haben"),
    // password: yup.string().password().notRequired().default(),
    changePassword: yup.string(),
    password: yup.string().when("changePassword", {
        is: "password",
        then: yup.string().password(),
    }),
    repeatPassword: yup.string().oneOf([yup.ref("password"), null]),
    imagePublicId: yup.mixed(),
});

const PageUserSettings = () => {
    const [previewSource, setPreviewSource] = useState("");
    const [selectedImage, setSelectedImage] = useState([]);
    const navigate = useNavigate();

    const {
        setValue,
        register,
        formState: { errors },
        handleSubmit,
        watch,
        reset,
    } = useForm<IUserEditForm>({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });
    const password = watch("password");
    const currentUser = useStore((state) => state.currentUser);
    const fetchCurrentUser = useStore((state) => state.fetchCurrentUser);
    const languages = useStore((state) => state.languages);

    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
        cloud: {
            cloudName: "dsyhfgbli",
        },
    });

    // cld.image returns a CloudinaryImage with the configuration set.
    const myImage = cld.image(`users-profile-img/${currentUser.imagePublicId}`);
    myImage.resize(
        thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face()))
    );

    const previewFile = (e:any) => {
        const file = e.target.files;
        setSelectedImage(file)
        console.log(selectedImage);
        if (file) {
            setPreviewSource(URL.createObjectURL(file[0]));
        }
    };

    const uploadImage = async (files: string | (string | Blob)[]) => {
        const formData = new FormData();
        formData.append("file", selectedImage[0]);
        formData.append("upload_preset", "di60eyhz");
        formData.append("folder", "users-profile-img");
        if (selectedImage.length===0) {
            return "";
        }
        const res = await axios
            .post(
                "https://api.cloudinary.com/v1_1/dsyhfgbli/image/upload",
                formData
            )
            .then((response) => {
                const public_id = response.data.public_id.split("/");
                console.log(public_id[1]);
                return public_id[1];
            });

        return res;
    };

    type Valuable<T> = {
        [K in keyof T as T[K] extends null | undefined | object
            ? never
            : K]: T[K];
    };
    function getValuable<
        // eslint-disable-next-line @typescript-eslint/ban-types
        T extends {},
        V = Valuable<T>
    >(obj: T): V {
        return Object.fromEntries(
            Object.entries(obj).filter(
                ([, v]) => !(
                    (typeof v === "string" && !v.length) ||
                    v === null ||
                    typeof v === "undefined" ||
                    (typeof v === "object" && !Object.keys(v).length)
                )
            )
        ) as unknown as V;
    }
    const onSubmit: SubmitHandler<IUserEditForm> = async (
        data: IUserEditForm
    ) => {
        const { firstName, lastName, password, imagePublicId, language } = data;
        console.log(imagePublicId);        
        uploadImage(imagePublicId)
            .then((response) => {
                const newData = { ...data, imagePublicId: response };
                console.log(newData);

                const dataToSend = getValuable(newData);

                console.log({ dataToSend });
                axios.put(`${baseUrl}/update/${currentUser._id}`, {
                    dataToSend,
                });
            })
            .then(() => {
                reset();
                setPreviewSource("");
                fetchCurrentUser();
            });
    };

    return (
        <div className=" cover  m-20 flex flex-col justify-center items-center ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="relative h-40 w-40">
                        {previewSource ? (
                            <img
                                className="rounded-full absolute"
                                id="showImg"
                                src={previewSource}
                                alt="chosen"
                                style={{ height: "150px", width: "150px" }}
                            />
                        ) : (
                            <AdvancedImage
                                cldImg={myImage}
                                className="rounded-full absolute"
                            />
                        )}
                        <div className="absolute bottom-0 right-0 ">
                            <input
                                id="avatar"
                                type="file"
                                {...register("imagePublicId")}
                                accept=".jpeg, .jpg, .png, .svg"
                                hidden
                                onChange={previewFile}
                            />

                            <label htmlFor="avatar">
                                <BiImageAdd
                                    className="cursor-pointer"
                                    size="50px"
                                    style={{ color: "blue" }}
                                />
                            </label>
                        </div>
                        {errors.imagePublicId && (
                            <p>{errors.imagePublicId?.message}</p>
                        )}
                    </div>
                    <div className="text-center  text-xl text-palette-60">
                        {currentUser.firstName + " " + currentUser.lastName}
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="text-center  text-xl text-palette-60">
                            Nutzer Konto
                        </h2>
                    </div>
                    <div>
                        <h4 className="text-center  text-xl text-palette-60">
                            Vor- oder Nachname ändern
                        </h4>
                        <input
                            className=" m-2 w-[20rem] input border-2 text-center rounded-3xl py-3 px-4 focus:outline-none   placeholder-palette-50"
                            defaultValue=""
                            {...register("firstName")}
                            placeholder="Vorname"
                        />
                        {errors.firstName && (
                            <p>{errors?.firstName?.message}</p>
                        )}
                    </div>
                    <div>
                        <input
                            className="m-2 w-[20rem] input border-2 text-center rounded-3xl py-3 px-4 focus:outline-none   placeholder-palette-50"
                            defaultValue=""
                            {...register("lastName")}
                            placeholder="Nachname"
                        />
                        {errors.lastName && <p>{errors?.lastName?.message}</p>}
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <h4 className="text-center  text-xl text-palette-60">
                                Kennwort ändern
                            </h4>
                        </div>
                        <input
                            className=" m-2 w-[20rem] input border-2 text-center rounded-3xl py-3 px-4 focus:outline-none   placeholder-palette-50"
                            defaultValue={password}
                            {...register("password")}
                            placeholder="password"
                        />
                        {errors.password && <p>{errors?.password?.message}</p>}
                    </div>
                    {password && (
                        <div>
                            <input
                                className="  w-[20rem] input border-2 text-center rounded-3xl py-3 px-4 focus:outline-none   placeholder-palette-50"
                                placeholder="repeat-password"
                                defaultValue=""
                                {...register("repeatPassword")}
                            />
                            {errors.repeatPassword && (
                                <p className="text-center  text-xl text-palette-60">
                                    Kennwort stimmt nicht!
                                </p>
                            )}
                        </div>
                    )}
                </div>
                <div>
                    <div>
                        <h4 className="text-center  text-xl text-palette-60">
                            Sprache ändern
                        </h4>
                    </div>
                    <div>
                        <select
                            className=" ml-20 mt-2 w-[10rem] input mb-2 border-2 text-center rounded-3xl py-3 px-4 focus:outline-none  text-palette-60  bg-palette-50"
                            {...register("language")}
                            onChange={(e) =>
                                setValue("language", e.target.value, {
                                    shouldValidate: true,
                                })
                            }
                            defaultValue={currentUser.language}
                        >
                            {languages.map((language: ILanguage) => {
                                return (
                                    <option
                                        className="bg-palette-60 "
                                        key={language.code}
                                        value={`${language.name}`}
                                    >
                                        {" "}
                                        {language.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className='flex justify-between m-2' >
                    <input
                        className="bg-palette-80 input text-palette-60 px-8 py-2 rounded-3xl"
                        type="submit"
                        value="Speichern"
                    />
                    <button
                        className="bg-palette-80 input text-palette-60 px-8 py-2 rounded-3xl"
                        onClick={() => {
                            navigate("/home");
                        }}
                        type="reset"
                    >
                        Abbrechen
                    </button>
                </div>
               
            </form>
        </div>
    );
};

export default PageUserSettings;
