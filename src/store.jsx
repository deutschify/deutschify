import create from "zustand";
import axios from "axios";
import { useParams } from "react-router-dom";

export const baseUrl = import.meta.env.VITE_BACKEND_URL;

// APIs for getting and translating languages
const languagesUrl = "https://libretranslate.com/languages";
const translateUrl = "https://libretranslate.de/translate";
const countriesUrl = "https://restcountries.com/v2/all?fields=name";

export const useStore = create((set) => ({
    // currentUser: { email: "", firstName: "", password: "", accessGroups: [], lastName: ""},
    currentUser: {},
    loading: false,
    fetchCurrentUser: async () => {
        set(() => ({ loading: true }));
        try {
            const data = (
                await axios.get(`${baseUrl}/current-user`, {
                    withCredentials: true,
                })
            ).data;
            const user = data.currentUser;
            set((state) => {
                const _state = { ...state };
                _state.currentUser = user;
                // console.log(_state.currentUser);
                _state.loading = false;
                return _state;
            });
            // set({currentUser: await data})
        } catch (error) {
            set(() => ({ loading: false }));
        }
    },
    fetchLoggedOutUser: async () => {
        set(() => ({ loading: true }));
        try {
            const data = (
                await axios.get(`${baseUrl}/logout`, {
                    withCredentials: true,
                })
            ).data;
            let user = data.currentUser;
            set((state) => {
                const _state = { ...state };
                _state.currentUser = user;
                _state.loading = false;
                return _state;
            });
            user = data.currentUser;
        } catch (error) {
            set(() => ({ loading: false }));
        }
    },
    languages: [],
    fetchLanguages: async () => {
        set(() => ({ loading: true }));
        try {
            const data = (
                await axios.get(`${languagesUrl}`, {
                    headers: { accept: "application/json" },
                })
            ).data;
            set((state) => {
                const _state = { ...state };
                _state.languages = data;
                return _state;
            });
        } catch (error) {
            set(() => ({ loading: false }));
        }
    },
    countries: [],
    fetchCountries: async () => {
        set(() => ({ loading: true }));
        try {
            const data = (await axios.get(`${countriesUrl}`)).data;
            // console.log(data);
            set((state) => {
                const _state = { ...state };
                _state.countries = data;
                return _state;
            });
        } catch (error) {
            set(() => ({ loading: false }));
        }
    },
    result: "",
    setResult: (result) => set({ result }),
    questions: [],
    fetchDataForModelltest: async (category) => {
        const response = await fetch(`${baseUrl}/all-questions/${category}`);
        const questionsDB = await response.json();
        const bundesland = questionsDB.filter((question) => {
            return question.category === category;
        });
        // const qu = bundesland[Math.floor(Math.random() * 4)];
        let randomQuestions = [...bundesland]
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
        // console.log(randomQuestion);
        const randomDeutschland = questionsDB.filter((question) => {
            return question.category === "deutschland";
        });
        const randomDeutschlandQuestions = [...randomDeutschland]
            .sort(() => 0.5 - Math.random())
            .slice(0, 30);
        randomQuestions = [...randomQuestions, ...randomDeutschlandQuestions];
        randomQuestions.forEach((randomQuestion) => {
            randomQuestion.scores = 0;
            randomQuestion.chosenAnswer = "";
        });
        set((state) => {
            const _state = { ...state };
            _state.questions = randomQuestions;
            return _state;
        });
    },
    postIds: [],
    fetchPosts: async () => {
        set(() => ({ loading: true }));
        try {
            const data = (await axios.get(`${baseUrl}/posts/news-feed/all`))
                .data;
            //console.log(data);
            const ids = data.map((i) => i._id);
            set((state) => {
                const _state = { ...state };
                _state.postIds = ids;
                return _state;
            });
        } catch (error) {
            set(() => ({ loading: false }));
        }
    },
    textArr : [],
    translation: async (text, translatedLanguage, sourceLanguage) => {
        const res = await fetch("https://libretranslate.de/translate", {
            method: "POST",
            body: JSON.stringify({
                q: text,
                source: translatedLanguage,
                target: sourceLanguage,
                format: "text",
            }),
            headers: { "Content-Type": "application/json" },
        });
        let result = (await res.json()).translatedText
        result = result.split(/[*]/)
        console.log(result);
        set((state) => {
            const _state = { ...state };
            _state.textArr = result;
            return _state;
        });
        // return result
    },
}));
