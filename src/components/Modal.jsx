import Form from "./Form";

const Modal = ({ addHandler, handleClose, show, children }) => {
	const showHideClassName = show ? "modal display-block" : "modal display-none";

	return (
		<div className={showHideClassName}>
			<section className="fixed flex flex-col h-auto p-5 transform -translate-x-1/2 -translate-y-1/2 bg-white modal-main w-80 top-1/2 left-1/2 rounded-xl drop-shadow-xl">
				<Form />
			</section>
		</div>
	);
};

export default Modal;
