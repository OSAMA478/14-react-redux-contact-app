/* eslint-disable no-unused-vars */

import { useDispatch } from "react-redux";
import { deleteContact } from "../store/actions/ui-actions";

/* eslint-disable react/prop-types */
const ContactCard = ({ contact }) => {
	const dispatch = useDispatch();
	const { firstName, lastName, email, phone } = contact;
	return (
		<div className="flex items-center justify-between p-4 bg-slate-400 h-fit rounded-xl w-80">
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
					className="p-1 bg-red-500 rounded-md"
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
