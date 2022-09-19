import create from "zustand";
import axios from "axios";
import { useNavigate } from "react-router";

export const baseUrl= import.meta.env.VITE_BACKEND_URL;

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
            // console.log(data.currentUser);
            const user = data.currentUser
            set((state) => {
                const _state = {...state}
                _state.currentUser = user
                // console.log(_state.currentUser);
                _state.loading = false
                return _state
            })
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
            const user = data.currentUser
            set((state) => {
                const _state = {...state}
                _state.currentUser = user
                console.log(_state.currentUser);
                _state.loading = false
                return _state
            })
        } catch (error) {
            set(() => ({ loading: false }));
        }
    },
}));
