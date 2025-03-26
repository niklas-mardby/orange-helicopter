import "./App.scss";
import BetterButton from "./components/BetterButton/BetterButton";
import Button from "./components/Button/Button";
import { ToastContainer } from "./components/ToastContainer/ToastContainer";

function App() {
	return (
		<>
			<h1>🍊🚁</h1>
			<p>a demo for students</p>
			<Button bgColor="green" />
			<BetterButton />
			<BetterButton hasAqua={true} />
			<ToastContainer />
		</>
	);
}

export default App;
