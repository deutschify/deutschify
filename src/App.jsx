import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Dictionary from "./components/Dictionary";
import LanguageLevels from "./components/LanguageLevels";
import Einbuergerungstest from "./components/Einbuergerungstest";
import Forum from "./components/Forum";
import PageRegister from "./Pages/PageRegister";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
function App() {
    return (
        <div className="bg-palette-50">
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/dictionary" element={<Dictionary />} />
                <Route path="/language-levels" element={<LanguageLevels />} />
                <Route
                    path="/einbuergerungstest/*"
                    element={<Einbuergerungstest />}
                />
                <Route path="/forum" element={<Forum />} />
                <Route path="/registration" element={<PageRegister />} />
                <Route path="/login/*" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
