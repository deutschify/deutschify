import { BsSearch } from "react-icons/bs";


const SearchBar = () => {
    return (
        <div className="flex items-center ml-10">
            <div className="flex h-10 bg-palette-60 text-palette-80 rounded-3xl p-2 m-4 items-center shadow-inner">
                <input
                    className="bg-transparent text-palette-50 placeholder:text-palette-50/75 p-4 focus:outline-none"
                    type="text"
                    placeholder="Suche..."
                />
                <button type="submit">
                    <BsSearch className="flex text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
