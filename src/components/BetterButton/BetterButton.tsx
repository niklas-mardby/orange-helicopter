import "./BetterButton.scss";

/*
alla knappar fungerar "likadant"
men kan se olika ut!

knappen ska ha en ikon eller inte
ikonen ska vara till höger eller vänster om texten på knappen
eller så har knappen  bara ikon
unik animation för call to action (eller inte)
*/
type BetterButtonProps = {
	hasAqua?: boolean;
};

export default function BetterButton({ hasAqua = false }: BetterButtonProps) {
	return (
		<div className={`BetterButton ${hasAqua ? "hasAqua" : ""}`}>
			BetterButton
		</div>
	);
}
