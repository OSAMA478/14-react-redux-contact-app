import Form from "./Form";

const Modal = ({ addHandler, handleClose, show, children }) => {
	const showHideClassName = show ? "modal display-block" : "modal display-none";

	return (
		<div className={showHideClassName}>
			<section className="flex-col flex modal-main bg-white fixed w-80 h-auto top-1/2 left-1/2 rounded-3xl p-5 drop-shadow-xl transform -translate-x-1/2 -translate-y-1/2">
				<Form />
			</section>
		</div>
	);
};

export default Modal;
