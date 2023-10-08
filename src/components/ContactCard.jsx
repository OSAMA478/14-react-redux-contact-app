/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const ContactCard = ({ contact }) => {
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
				<button className="bg-red-500 rounded-md p-1">Delete</button>
			</div>
		</div>
	);
};

export default ContactCard;
