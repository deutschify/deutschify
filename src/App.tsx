import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/header/Header";
import AboutUs from "./components/footer/AboutUs";
import ContactUs from "./components/footer/ContactUs";
import RateUs from "./components/footer/RateUs";

import "./App.css";
import { IUserLoginForm } from "./interfaces";
import Footer from "./components/footer/Footer";
import Homepage from "./components/Homepage";
import Dictionary from "./components/Dictionary";
import LanguageLevels from "./components/LanguageLevels";
import Einbuergerungstest from "./components/orientierung/Einbuergerungstest";
import Forum from "./components/Forum";
import PageRegister from "./Pages/PageRegister";
import PageConfirmRegistration from "./Pages/PageConfirmRegistration";
import PageLogin from "./Pages/PageLogin";
import PageNotFound from "./components/PageNotFound";
import A1 from "./components/A1";
import A2 from "./components/A2";
import B1 from "./components/B1";
import Lernbereich from "./components/orientierung/LernbereichOrientierung";
import LiDExc from "./components/orientierung/LiDExc";
import LiDMod from "./components/orientierung/LiDMod";

export const baseUrl = import.meta.env.VITE_BACKEND_URL;

function App() {
    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState<IUserLoginForm>({
        email: "",
        firstName: "",
        password: "",
        accessGroups: [],
    });

    useEffect(() => {
        (async () => {
            const data = (
                await axios.get(`${baseUrl}/current-user`, {
                    withCredentials: true,
                })
            ).data;
            const _currentUser = data.currentUser;
            setCurrentUser(_currentUser);
        })();
    }, []);

    const pageIsLoaded = () => {
        return currentUser.firstName !== "";
    };

    return (
        <div className="bg-palette-60 pb-24 h-max font-block2 font-bold">
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/dictionary" element={<Dictionary />} />
                <Route path="/language-levels" element={<LanguageLevels />} />
                <Route path="/a1" element={<A1 />} />
                <Route path="/a2" element={<A2 />} />
                <Route path="/b1" element={<B1 />} />
                <Route
                    path="/einbuergerungstest/*"
                    element={<Einbuergerungstest />}
                />
                <Route
                    path="/lernbereich/:category/*"
                    element={<Lernbereich />}
                />
                <Route
                    path="/lernbereich/excercise/:category/*"
                    element={<LiDExc />}
                />
                <Route
                    path="/lernbereich/modell/:category/*"
                    element={<LiDMod />}
                />
                <Route path="/forum" element={<Forum />} />
                <Route
                    path="/registration"
                    element={
                        <PageRegister
                            baseUrl={baseUrl}
                            setCurrentUser={setCurrentUser}
                        />
                    }
                />
                <Route
                    path="/login/*"
                    element={
                        <PageLogin
                            baseUrl={baseUrl}
                            setCurrentUser={setCurrentUser}
                        />
                    }
                />
                <Route
                    path="/confirm-registration/:confirmationCode"
                    element={
                        <PageConfirmRegistration
                            baseUrl={baseUrl}
                            setCurrentUser={setCurrentUser}
                        />
                    }
                />
                <Route path="/about-us/*" element={<AboutUs />} />
                <Route path="/contact-us/*" element={<ContactUs />} />
                <Route path="/rate-us/*" element={<RateUs />} />

                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
