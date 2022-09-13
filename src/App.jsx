import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import AboutUs from "./components/footer/AboutUs";
import ContactUs from "./components/footer/ContactUs";
import RateUs from "./components/footer/RateUs";

import "./App.css";
import Footer from "./components/footer/Footer";
import Homepage from "./components/Homepage";
import Dictionary from "./components/dictionary/Dictionary";
import LanguageLevels from "./components/LanguageLevels";
import Einbuergerungstest from "./components/Einbuergerungstest";
import Forum from "./components/Forum";
import PageRegister from "./Pages/PageRegister";
import Login from "./Pages/PageLogin";
import PageNotFound from "./components/PageNotFound";
import A1 from "./components/A1";
import A2 from "./components/A2";
import B1 from "./components/B1";
function App() {
    return (
        <div className="bg-palette-60 pb-24 h-max">
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/dictionary" element={<Dictionary />} />
                <Route path="/language-levels" element={<LanguageLevels />} />
                <Route path="/a1" element={<A1 />} />
                <Route path="/a2" element={<A2 />} />
                <Route path="/b1" element={<B1 />} />
                <Route path="/einbuergerungstest/*" element={<Einbuergerungstest />}/>
                <Route path="/forum" element={<Forum />} />
                <Route path="/registration" element={<PageRegister />} />
                <Route path="/login/*" element={<Login />} />
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
