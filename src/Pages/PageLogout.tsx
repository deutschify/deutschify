import axios from 'axios';
import { IUserLoginForm } from '../interfaces';
import { useNavigate } from 'react-router-dom';
import { useStore } from "../store";

interface IPageLogoutProps {
	baseUrl: string;
	setCurrentUser: React.Dispatch<React.SetStateAction<IUserLoginForm>>;
}

export const PageLogout = () => {
    const fetchLoggedOutUser = useStore((state) => state.fetchLoggedOutUser);
	const currentUser = useStore((state) => state.currentUser)

	const navigate = useNavigate();

	const handleLogoutButton = () => {
		fetchLoggedOutUser()
		navigate("/home");
	}
	return (
		<div className="pageLogout w-40 text-center bg-palette-70 p-4 text-xl rounded-xl hover:shadow-inner hover:text-palette-50 m-5 md:ml-60">
			<button onClick={handleLogoutButton}>Logout</button>
		</div>
	);
};