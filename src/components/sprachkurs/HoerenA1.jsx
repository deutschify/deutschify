import Construction from "../../../public/images/construction.png";
import { useNavigate } from "react-router-dom";

function HoerenA1() {
  const navigate = useNavigate();
    return (
        <div className="bg-palette-80 m-6 border-4 border-palette-50 rounded-xl flex justify-center items-center">
           <button
                onClick={() => navigate(-1)}
                className="bg-palette-50 p-6 text-palette-60 border-4 border-palette-60 rounded-xl text-xl absolute top-48 left-16"
            >
                zurück
            </button>
            <div className="bg-palette-50 p-10 border-4 border-palette-60 rounded-xl text-3xl text-center m-4 text-palette-60">Wir arbeiten an Übungen zum Hörverstehen im Sprachniveau A1</div>
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

export default HoerenA1;
