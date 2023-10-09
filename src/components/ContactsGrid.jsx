/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import ContactCard from "./ContactCard";
import { setFetchedContacts } from "../store/actions/ui-actions";

const ContactsGrid = ({ className }) => {
	const uiContacts = useSelector((state) => state.ui.contacts);
	console.log(uiContacts);

	return (
		<div className={className + " " + "flex flex-wrap content-start gap-5"}>
			{uiContacts.map((contact) => (
				<ContactCard contact={contact} key={Math.random()} />
			))}
		</div>
	);
};

export default ContactsGrid;
