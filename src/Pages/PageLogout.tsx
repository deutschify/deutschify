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
		console.log(currentUser);
		
		navigate("/home");
	}
	return (
		<div className="pageLogout flex items-center bg-palette-80 p-4 text-xl rounded hover:shadow-inner hover:text-palette-50">
			<button onClick={handleLogoutButton}>Logout</button>
		</div>
	);
};