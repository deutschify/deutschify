

const FeedbackBoxes = () => {
    return (
        <div className="hidden md:grid py-10">
            <div className="  grid grid-cols-5 gap-x-8 gap-y-4 justify-center justify-items-center   ">
                <p
                    className="w-48 h-64 border-palette-60 border-4 p-4 bg-palette-50 text-palette-60 rounded-xl shadow-outer"
                >
                    Ich habe mit Hilfe dieser Webseite meinen Einbürgerungstest bestanden
                </p>
                <p
                    className="w-48 h-64 border-palette-60 border-4 p-4 bg-palette-50 text-palette-60 rounded-xl shadow-outer"
                >
                    Ich kann mich sehr gut auf meine b1 Prüfung vorbereiten
                </p>
                <p
                   className="w-48 h-64 border-palette-60 border-4 p-4 bg-palette-50 text-palette-60 rounded-xl shadow-outer"
                >
                    Es macht mir spaß!
                </p>
                <p
                    className="w-48 h-64 border-palette-60 border-4 p-4 bg-palette-50 text-palette-60 rounded-xl shadow-outer"
                >
                    Alles Top!
                </p>
                <p
                    className="w-48 h-64 border-palette-60 border-4 p-4 bg-palette-50 text-palette-60 rounded-xl shadow-outer"
                >
                    Ich lerne viel schneller
                </p>
            </div>
        </div>
    );
};

export default FeedbackBoxes;
