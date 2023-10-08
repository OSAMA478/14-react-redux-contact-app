/* eslint-disable no-unused-vars */

import { useDispatch } from "react-redux";
import { deleteContact } from "../store/actions/contacts-actions";

/* eslint-disable react/prop-types */
const ContactCard = ({ contact }) => {
	const dispatch = useDispatch();
	const { firstName, lastName, email, phone } = contact;
	return (
		<div className="bg-slate-400 h-fit rounded-xl  p-4  w-80 flex items-center justify-between">
			<div>
				<div>
					<p className="text-2xl">
						{firstName} {lastName}
					</p>
				</div>
				<p>{phone}</p>
				<p>{email}</p>
			</div>
			<div>
				<button
					className="bg-red-500 rounded-md p-1"
					onClick={() => {
						dispatch(deleteContact(contact.id));
					}}
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default ContactCard;
