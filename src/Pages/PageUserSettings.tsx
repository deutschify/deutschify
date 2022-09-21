import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary,  } from "@cloudinary/url-gen";
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";

import axios from "axios";
import { IUserEditForm } from "../interfaces";
import { baseUrl, useStore } from "../store";

const schema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Vorname soll keine Nummer haben"),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Nachname soll keine Nummer haben"),
    password: yup.string().min(3).max(12),
    repeatPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const PageUserSettings = () => {
    const currentUser = useStore((state) => state.currentUser);

    // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dsyhfgbli'
    }
  });

  // cld.image returns a CloudinaryImage with the configuration set.
  const myImage = cld.image(currentUser.imageURL);
  myImage
  .resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face()))).roundCorners(byRadius(150));

  const onSubmit: SubmitHandler<IUserEditForm> = async(data: IUserEditForm) => {
    const {firstName, lastName,password,imageURL, language} = data

    const sendRequest = await axios.post(`${baseUrl}/${currentUser.username}`)
  }

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IUserEditForm>({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>
                        <AdvancedImage cldImg={myImage}
                        />
                        <input type="file" />
                    </div>
                    <div>{currentUser.firstName+ ' ' +currentUser.lastName}</div>
                </div>
                <div>
                    <div>
                        <h2>User Information</h2>
                    </div>
                    <div>
                        <h4>change your name</h4>
                        <input
                            defaultValue=""
                            {...register("firstName")}
                            placeholder="firstName"
                        />
                        {errors.firstName && (
                            <p>{errors?.firstName?.message}</p>
                        )}
                    </div>
                    <div>
                        <input
                            defaultValue=""
                            {...register("lastName")}
                            placeholder="lastName"
                        />
                        {errors.lastName && <p>{errors?.lastName?.message}</p>}
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <h4>change Password</h4>{" "}
                        </div>
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
                </div>
                <div>
                    <div>
                        <h4>change the language</h4>
                    </div>
                    <div>
                        <select {...register("language")}>
                            <option value="deutsch">deutsch</option>
                        </select>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Save" />
                </div>
            </form>
        </div>
    );
};

export default PageUserSettings;
