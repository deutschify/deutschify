import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import AboutUs from "./components/footer/AboutUs";
import ContactUs from "./components/footer/ContactUs";
import RateUs from "./components/footer/RateUs";

import "./App.css";
import { IUserLoginForm } from "./interfaces";
import Footer from "./components/footer/Footer";
import Homepage from "./components/homepage/Homepage";
import Dictionary from "./components/dictionary/Dictionary";
import Sprachniveau from "./components/Sprachniveau";

import Einbuergerungstest from "./components/orientierung/Einbuergerungstest";

import Forum from "./components/forum/Forum";
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

import { useStore } from "./store";
import { PageLogout } from "./Pages/PageLogout";
import { baseUrl } from "./store";
import PageUserSettings from "./Pages/PageUserSettings";
import NewsFeed from "./components/forum/news-feed/NewsFeed";
import MyPosts from "./components/forum/MyPosts";
import ResultLidMod from "./components/orientierung/ResultLidMod";

function App() {
    const navigate = useNavigate();

    // const loading = useStore((state) => state.loading);
    const fetchLanguages = useStore((state: { fetchLanguages: any; }) => state.fetchLanguages);
    const fetchCurrentUser = useStore((state: { fetchCurrentUser: any; }) => state.fetchCurrentUser);
    const fetchCountries = useStore((state: { fetchCountries: any; }) => state.fetchCountries);
    const currentUser = useStore((state: { currentUser: any; }) => state.currentUser);

    useEffect(() => {
        fetchLanguages();
        fetchCurrentUser();
        fetchCountries();
        //   console.log(currentUser);
    }, []);

    return (
        <div className="bg-palette-60 pb-24 font-block2 font-bold">
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Homepage />} />

                <Route path="/dictionary" element={<Dictionary />} />
                <Route path="/sprachniveau" element={<Sprachniveau />} />
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
                    path="/lernbereich/:category/excercise/*"
                    element={<LiDExc />}
                />
                <Route
                    path="/lernbereich/:category/modelltest/*"
                    element={<LiDMod />}
                />
                <Route
                    path="/lernbereich/:category/modelltest/result"
                    element={<ResultLidMod />}
                />


                <Route path="/forum/*" element={<Forum />} />

                <Route
                    path="/registration/*"
                    element={
                        <PageRegister
                            baseUrl={baseUrl}
                            // setCurrentUser={setCurrentUser}
                        />
                    }
                />
                <Route
                    path="/login/*"
                    element={
                        <PageLogin
                            baseUrl={baseUrl}

                            // setCurrentUser={setCurrentUser}
                        />
                    }
                />
                <Route
                    path="/confirm-registration/:confirmationCode"
                    element={
                        <PageConfirmRegistration
                            baseUrl={baseUrl}
                            // setCurrentUser={setCurrentUser}
                        />
                    }
                />
                {currentUser.email !== "anonymousUser" && (
                    <>
                        {" "}
                        <Route
                            path="/forum/news-feed/all"
                            element={<NewsFeed />}
                        />{" "}
                        <Route path="/forum/my-posts" element={<MyPosts />} />{" "}
                    </>
                )}
                {currentUser.accessGroups?.includes("loggedInUsers") && (
                    <>
                        <Route path="/logout" element={<PageLogout />} />
                        <Route path="/:user" element={<PageUserSettings />} />
                        {/* <Route path="/forum/news-feed/all" element={<NewsFeed />} />
                <Route path="/forum/my-posts" element={<MyPosts />} /> */}
                    </>
                )}
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
