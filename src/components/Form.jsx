import { useState } from "react";
import { useDispatch } from "react-redux";
import { postContacts } from "../store/actions/contacts-actions";
import { addContact } from "../store/actions/ui-actions";
import { hideModal } from "../store/actions/modal-actions";

function MyForm() {
	const [inputs, setInputs] = useState({});
	const dispatch = useDispatch();

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(inputs);
		dispatch(addContact({ ...inputs, id: Math.random() }));
		setInputs({});

		dispatch(postContacts({ ...inputs, id: Math.random() }));
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-4">
			{/* first name */}
			<div className="relative">
				<input
					type="text"
					name="firstName"
					value={inputs.firstName || ""}
					onChange={handleChange}
					className="w-full px-4 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
					placeholder="first name"
				/>
				<label
					type="text"
					className="absolute inline-block px-1 -mt-px text-xs font-medium text-gray-900 bg-white -top-2 left-2"
				>
					First name
				</label>
			</div>
			{/* last name */}
			<div className="relative">
				<input
					type="text"
					name="lastName"
					value={inputs.lastName || ""}
					onChange={handleChange}
					className="w-full px-4 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
					placeholder="last name"
				/>
				<label
					type="text"
					className="absolute inline-block px-1 -mt-px text-xs font-medium text-gray-900 bg-white -top-2 left-2"
				>
					Last name
				</label>
			</div>
			{/* email name */}
			<div className="relative">
				<input
					type="text"
					name="email"
					value={inputs.email || ""}
					onChange={handleChange}
					className="w-full px-4 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
					placeholder="email"
				/>
				<label
					type="text"
					className="absolute inline-block px-1 -mt-px text-xs font-medium text-gray-900 bg-white -top-2 left-2"
				>
					email
				</label>
			</div>
			{/* phone number */}
			<div className="relative">
				<input
					type="text"
					name="phone"
					value={inputs.phone || ""}
					onChange={handleChange}
					className="w-full px-4 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
					placeholder="phone number"
				/>
				<label
					type="number"
					className="absolute inline-block px-1 -mt-px text-xs font-medium text-gray-900 bg-white -top-2 left-2"
				>
					Phone number
				</label>
			</div>
			{/* address */}
			<div className="relative">
				<input
					type="text"
					name="address"
					value={inputs.address || ""}
					onChange={handleChange}
					className="w-full px-4 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
					placeholder="phone number"
				/>
				<label
					type="text"
					className="absolute inline-block px-1 -mt-px text-xs font-medium text-gray-900 bg-white -top-2 left-2"
				>
					Address
				</label>
			</div>

			{/* buttons */}
			<div className="flex justify-center gap-2">
				<button
					type="button"
					onClick={() => dispatch(hideModal())}
					className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
				>
					Cancel
				</button>
				<button
					type="submit"
					className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
				>
					Add
				</button>
			</div>
		</form>
	);
}

export default MyForm;
