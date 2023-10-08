import { useState } from "react";

const Header = ({ modalHandler }) => {
	return (
		<header className="bg-slate-500 text-white flex justify-between p-4">
			<p className="font-bold text-5xl">Contact App</p>
			<button
				className="bg-slate-200 text-black rounded-lg p-2"
				onClick={modalHandler}
			>
				add contact
			</button>
		</header>
	);
};

export default Header;
