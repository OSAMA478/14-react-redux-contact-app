import { useEffect } from "react";
import "./App.css";
import { fetchContacts } from "./store/actions/contacts-actions";
import { useDispatch } from "react-redux";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		console.log("useEffect started");
		dispatch(fetchContacts());
		console.log("useEffect end");
	}, [dispatch]);

	return (
		<>
			<header className="bg-slate-500 text-white text-5xl p-4">
				<p>Heading</p>
			</header>
			<div className="bg-slate-200 h-[calc(100vh-80px)]">all contacts</div>
		</>
	);
}

export default App;
