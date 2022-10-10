import Construction from "../../../public/images/construction.png";
import { useNavigate } from "react-router-dom";

function SchreibenA2() {
    const navigate = useNavigate();
    return (
        <div className="bg-palette-80 m-6 border-4 border-palette-50 rounded-xl md:flex justify-center items-center">
            <button
                onClick={() => navigate(-1)}
                className="bg-palette-60 text-palette-80 border-palette-80 md:bg-palette-50 p-1 md:p-6 md:text-palette-60 border-4 md:border-palette-60 rounded-full h-20 md:rounded-xl text-xl absolute left-14 top-48 md:left-16"
            >
                zurück
            </button>
            <div className="bg-palette-50 p-10 border-4 border-palette-60 rounded-xl text-3xl text-center m-4 text-palette-60">
                Wir arbeiten an Übungen zum schriftlichen Ausdruck im
                Sprachniveau A2
            </div>
            <div className="text-palette-60 text-center font-block1 text-4xl m-6 flex flex-col items-center">
                Wir sind bald für euch da
                <img
                    src={Construction}
                    alt=""
                    className="w-8/12 bg-palette-40 m-4 border-4 border-palette-60 rounded-xl "
                />
            </div>
        </div>
    );
}

export default SchreibenA2;
