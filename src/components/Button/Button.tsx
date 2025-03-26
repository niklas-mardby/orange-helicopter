import "./Button.scss";

type ButtonProps = {
	bgColor: string;
};

export default function Button({ bgColor }: Readonly<ButtonProps>) {
	const styleobjekt = {
		backgroundColor: bgColor,
	};

	// const kebab-smakar-gott = "hej";
	// const kebabSmakarGott = "hej";

	return (
		<>
			<div style={styleobjekt}>Button</div>
			<div className="Button">Bättre Button</div>
		</>
	);
}
