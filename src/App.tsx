import "./App.scss";
import { FadeInSection } from "./components/FadeInSection/FadeInSection";

function App() {
	return (
		<div className="app">
			<FadeInSection className="app__section app__section--hero">
				<h1>🍊🚁</h1>
				<p>Ett demo för studenter</p>
				<p>Scrolla ner för att se mer innehåll</p>
			</FadeInSection>

			<FadeInSection
				className="app__section app__section--content"
				threshold={0.4}
				delay={400}
			>
				<h2>Om oss</h2>
				<p>Detta är en sektion med information om vårt företag.</p>
			</FadeInSection>

			<FadeInSection
				className="app__section app__section--features"
				threshold={0.4}
				delay={400}
			>
				<h2>Våra tjänster</h2>
				<div className="features-grid">
					<div className="feature">Tjänst 1</div>
					<div className="feature">Tjänst 2</div>
					<div className="feature">Tjänst 3</div>
					<div className="feature">Tjänst 4</div>
				</div>
			</FadeInSection>

			<FadeInSection
				className="app__section app__section--contact"
				threshold={0.5}
				delay={500}
			>
				<h2>Kontakta oss</h2>
				<form className="contact-form">
					<input type="text" placeholder="Namn" />
					<input type="email" placeholder="E-post" />
					<textarea placeholder="Meddelande"></textarea>
					<button type="submit">Skicka</button>
				</form>
			</FadeInSection>
		</div>
	);
}

export default App;
