import { useState } from "react";

function MyForm() {
	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(inputs);
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-4">
			{/* first name */}
			<div className="relative">
				<input
					type="text"
					className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
					placeholder="first name"
				/>
				<label
					type="text"
					name="firstName"
					value={inputs.firstName || ""}
					onChange={handleChange}
					className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
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
					className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
					placeholder="last name"
				/>
				<label
					type="last-name"
					className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
				>
					Last name
				</label>
			</div>
			{/* email name */}
			<div className="relative">
				<input
					type="text"
					className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
					placeholder="email"
				/>
				<label
					type="text"
					name="email"
					value={inputs.firstName || ""}
					onChange={handleChange}
					className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
				>
					email
				</label>
			</div>
			{/* phone number */}
			<div className="relative">
				<input
					type="text"
					className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
					placeholder="phone number"
				/>
				<label
					type="number"
					name="phone"
					value={inputs.firstName || ""}
					onChange={handleChange}
					className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
				>
					Phone number
				</label>
			</div>
			{/* address */}
			<div className="relative">
				<input
					type="text"
					className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
					placeholder="phone number"
				/>
				<label
					type="text"
					name="address"
					value={inputs.firstName || ""}
					onChange={handleChange}
					className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
				>
					Address
				</label>
			</div>

			{/* buttons */}
			<div className="flex gap-2 justify-center">
				<button
					type="button"
					// onClick={handleClose}
					className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
				>
					Cancel
				</button>
				<button
					type="button"
					// onClick={addHandler}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Add
				</button>
			</div>
		</form>
	);
}

export default MyForm;
