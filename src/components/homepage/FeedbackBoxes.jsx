const FeedbackBoxes = () => {
    return (
        <div className="hidden md:grid py-10">
            <div className="  grid grid-cols-5 gap-x-8 gap-y-4 justify-center justify-items-center   ">
                <div className="w-48 h-64 border-palette-60 border-4 bg-palette-50 text-palette-60 rounded-xl shadow-outer flex flex-wrap ">
                    <img
                        src="../../../images/samira.png"
                        alt="samira"
                        className="w-16 h-16 rounded-full m-2"
                    />
                    <p className="text-center">
                        "Ich habe mit Hilfe dieser Webseite meinen
                        Einbürgerungstest bestanden"
                    </p>
                    <p className="m-2 mt-4">~ Samira</p>
                </div>

                <div className="w-48 h-64 border-palette-60 border-4 bg-palette-50 text-palette-60 rounded-xl shadow-outer">
                    <img
                        src="../../../images/rahul.png"
                        alt="rahul"
                        className="w-16 h-16 rounded-full m-2"
                    />
                    <p className="text-center">"Ich kann mich sehr gut auf meine b1 Prüfung vorbereiten"</p>
                    <p className="m-2 mt-16">~Rahul</p>
                </div>
                <div className="w-48 h-64 border-palette-60 border-4 bg-palette-50 text-palette-60 rounded-xl shadow-outer">
                <img
                        src="../../../images/yassir.png"
                        alt="yassir"
                        className="w-16 h-16 rounded-full m-2"
                    />
                    <p className="text-center">"Es macht mir spaß!"</p>
                    <p className="m-2 mt-28">~Yassir</p>

                    
                </div>
                <div className="w-48 h-64 border-palette-60 border-4  bg-palette-50 text-palette-60 rounded-xl shadow-outer">
                <img
                        src="../../../images/enrico.png"
                        alt="enrico"
                        className="w-16 h-16 rounded-full m-2"
                    />
                    <p className="text-center">"Alles Top!"</p>
                    <p className="m-2 mt-28">~Enrico</p>
                    
                </div>
                <div className="w-48 h-64 border-palette-60 border-4 bg-palette-50 text-palette-60 rounded-xl shadow-outer">
                <img
                        src="../../../images/craig.png"
                        alt="samira"
                        className="w-16 h-16 rounded-full m-2"
                    />
                    <p className="text-center">"Ich lerne viel schneller, das finde ich gut"</p>
                    <p className="m-2 mt-16">~Craig</p>
                    
                </div>
            </div>
        </div>
    );
};

export default FeedbackBoxes;
