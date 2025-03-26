import { useEffect, useState } from "react";
import "./Toast.scss";

export type ToastProps = {
	id: string;
	message: string;
	duration?: number;
	onRemove: (id: string) => void;
};

const Toast = ({ id, message, duration = 5000, onRemove }: ToastProps) => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		// starta timer som gömmer toasten efter duration ms
		const timer = setTimeout(() => setVisible(false), duration);

		// ta bort timer om komponenten tas bort innan timeouten är klar
		return () => clearTimeout(timer);
	}, [duration]);

	const handleTransitionEnd = () => {
		if (!visible) {
			onRemove(id); // ta bort från DOM när fade-out är klar
		}
	};

	return (
		<div
			className={`toast ${visible ? "visible" : "hidden"}`}
			onTransitionEnd={handleTransitionEnd}
		>
			<button className="close-button" onClick={() => setVisible(false)}>
				×
			</button>
			<span>{message}</span>
		</div>
	);
};

export default Toast;
