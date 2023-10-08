import { useEffect, useState } from "react";
import "./App.css";
import { fetchContacts } from "./store/actions/contacts-actions";
import { useDispatch } from "react-redux";
import ContactCard from "./components/ContactCard";
import ContactsGrid from "./components/ContactsGrid";
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
	const [isModalShown, setIsModalShown] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log("useEffect started");
		dispatch(fetchContacts());
		console.log("useEffect end");
	}, [dispatch]);

	const modalHandler = () => {
		setIsModalShown(true);
	};

	return (
		<div className="h-screen overflow-hidden">
			{isModalShown && <Modal>this is my form</Modal>}
			<Header modalHandler={modalHandler} />
			<ContactsGrid className="bg-slate-200 h-[calc(100vh-80px)] p-5">
				<ContactCard />
			</ContactsGrid>
		</div>
	);
}

export default App;
