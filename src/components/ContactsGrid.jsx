/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import ContactCard from "./ContactCard";

const ContactsGrid = ({ className }) => {
	const contacts = useSelector((state) => state.fetch.contacts);
	return (
		<div className={className + " " + "flex flex-wrap content-start gap-5"}>
			{contacts.map((contact) => (
				<ContactCard contact={contact} key={Math.random()} />
			))}
		</div>
	);
};

export default ContactsGrid;
