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
import Sprachkurs from "./components/sprachkurs/Sprachkurs";
import Einbuergerungstest from "./components/orientierung/Einbuergerungstest";
import Forum from "./components/forum/Forum";
import PageRegister from "./Pages/PageRegister";
import PageConfirmRegistration from "./Pages/PageConfirmRegistration";
import PageLogin from "./Pages/PageLogin";
import PageNotFound from "./components/PageNotFound";
import A1 from "./components/sprachkurs/A1";
import SchreibenA1 from "./components/sprachkurs/SchreibenA1";
import LesenA1 from "./components/sprachkurs/LesenA1";
import HoerenA1 from "./components/sprachkurs/HoerenA1";
import SprechenA1 from "./components/sprachkurs/SprechenA1";
import A2 from "./components/sprachkurs/A2";
import SchreibenA2 from "./components/sprachkurs/SchreibenA2";
import LesenA2 from "./components/sprachkurs/LesenA2";
import HoerenA2 from "./components/sprachkurs/HoerenA2";
import SprechenA2 from "./components/sprachkurs/SprechenA2";
import B1 from "./components/sprachkurs/B1";
import SchreibenB1 from "./components/sprachkurs/SchreibenB1";
import LesenB1 from "./components/sprachkurs/LesenB1";
import HoerenB1 from "./components/sprachkurs/HoerenB1";
import SprechenB1 from "./components/sprachkurs/SprechenB1";
import Lernbereich from "./components/orientierung/LernbereichOrientierung";
import LiDExc from "./components/orientierung/LiDExc";
import LiDMod from "./components/orientierung/LiDMod";
import { useStore } from "./store";
import { PageLogout } from "./Pages/PageLogout";
import { baseUrl } from "./store";
import PageUserSettings from "./Pages/PageUserSettings";
import NewsFeed from "./components/forum/news-feed/NewsFeed";
import MyPosts from "./components/forum/myPosts/MyPosts";
import ResultLidMod from "./components/orientierung/ResultLidMod";
import PostEdit from "./components/forum/post/PostEdit";

function App() {
    const navigate = useNavigate();
    

    // const loading = useStore((state) => state.loading);
    const fetchLanguages = useStore(
        (state: { fetchLanguages: any }) => state.fetchLanguages
    );
    const fetchCurrentUser = useStore(
        (state: { fetchCurrentUser: any }) => state.fetchCurrentUser
    );
    const fetchCountries = useStore(
        (state: { fetchCountries: any }) => state.fetchCountries
    );
    const currentUser = useStore(
        (state: { currentUser: any }) => state.currentUser
    );
    

    useEffect(() => {
        fetchLanguages();
        fetchCurrentUser();
        fetchCountries();
        //   console.log(currentUser);
    }, []);

    useEffect(() => {
        let loginSecondsMax = 9000;
        localStorage.setItem('user', JSON.stringify(currentUser));
        let saved = Number(localStorage.getItem("saved"));
            if (
                saved &&
                new Date().getTime() - saved > loginSecondsMax * 1000
            ) {
                localStorage.clear();
            }
            console.log();
            
    },[new Date().getTime()])

    return (
        <div className="w-[100vw] bg-palette-60 pb-24 font-block2 font-bold shadow-inner">
            <div className="m-auto">
                <Header />
            </div>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Homepage />} />

                <Route path="/dictionary" element={<Dictionary />} />
                
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

<Route path="/sprachkurs" element={<Sprachkurs />} />
                    <Route path="/sprachkurs/a1" element={<A1 />} />
                    <Route
                        path="/sprachkurs/a1/schriftlicher-Ausdruck"
                        element={<SchreibenA1 />}
                    />
                    <Route
                        path="/sprachkurs/a1/leseverstehen"
                        element={<LesenA1 />}
                    />
                    <Route
                        path="/sprachkurs/a1/hoerverstehen"
                        element={<HoerenA1 />}
                    />
                    <Route
                        path="/sprachkurs/a1/sprachbausteine"
                        element={<SprechenA1 />}
                    />
                    <Route path="/sprachkurs/a2" element={<A2 />} />
                    <Route
                        path="/sprachkurs/a2/schriftlicher-Ausdruck"
                        element={<SchreibenA2 />}
                    />
                    <Route
                        path="/sprachkurs/a2/leseverstehen"
                        element={<LesenA2 />}
                    />
                    <Route
                        path="/sprachkurs/a2/hoerverstehen"
                        element={<HoerenA2 />}
                    />
                    <Route
                        path="/sprachkurs/a2/sprachbausteine"
                        element={<SprechenA2 />}
                    />
                    <Route path="/sprachkurs/b1" element={<B1 />} />
                    <Route
                        path="/sprachkurs/b1/schriftlicher-Ausdruck"
                        element={<SchreibenB1 />}
                    />
                    <Route
                        path="/sprachkurs/b1/leseverstehen"
                        element={<LesenB1 />}
                    />
                    <Route
                        path="/sprachkurs/b1/hoerverstehen"
                        element={<HoerenB1 />}
                    />
                    <Route
                        path="/sprachkurs/b1/sprachbausteine"
                        element={<SprechenB1 />}
                    />
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

                    
                {currentUser.email !== "anonymousUser" && (
                    <>
                        {" "}
                        <Route path="/forum" element={<Forum />} />
                        <Route
                            path="/forum/news-feed/all"
                            element={<NewsFeed />}
                        />{" "}
                        <Route path="/forum/my-posts" element={<MyPosts />} />{" "}
                        <Route
                            path="/forum/post/edit/:id"
                            element={<PostEdit />}
                        />
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
