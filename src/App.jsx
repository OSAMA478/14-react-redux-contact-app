import { useEffect } from "react";
import "./App.css";
import { fetchContacts } from "./store/actions/contacts-actions";
import { useDispatch, useSelector } from "react-redux";
import ContactCard from "./components/ContactCard";
import ContactsGrid from "./components/ContactsGrid";
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
	const isModalShown = useSelector((state) => state.modal.isModalShown);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<div className="h-screen overflow-hidden">
			{isModalShown && <Modal>this is my form</Modal>}
			<Header />
			<ContactsGrid className="bg-slate-200 h-[calc(100vh-80px)] p-5">
				<ContactCard />
			</ContactsGrid>
		</div>
	);
}

export default App;
