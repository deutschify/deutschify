import ImgPageNotFound from "../../public/images/illus/pageNotFound.png";

const PageNotFound = () => {
    return (
        <div className="h-screen bg-palette-80 m-6 border-4 border-palette-50 rounded-xl flex justify-center items-center">
            <div className="text-palette-60 text-center font-block1 text-4xl m-6 flex flex-col items-center">
                {" "}
                Die Seite wurde nicht gefunden
                <img
                    src={ImgPageNotFound}
                    alt=""
                    className="w-8/12 bg-palette-40 m-4 border-4 border-palette-60 rounded-xl "
                />
            </div>
        </div>
    );
};

export default PageNotFound;
