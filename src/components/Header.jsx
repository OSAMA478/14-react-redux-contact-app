import { useDispatch } from "react-redux";
import { showModal } from "../store/actions/modal-actions";

const Header = () => {
	const dispatch = useDispatch();
	return (
		<header className="flex justify-between p-4 text-white bg-slate-500">
			<p className="text-5xl font-bold">Contact App</p>
			<button
				className="p-2 text-black rounded-lg bg-slate-200"
				onClick={() => dispatch(showModal())}
			>
				add contact
			</button>
		</header>
	);
};

export default Header;
