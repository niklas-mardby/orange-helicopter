import { ReactNode, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./FadeInSection.scss";
import { useOnScreen } from "../../hooks/useOnScreen";

type SectionProps = {
	children: ReactNode;
	className?: string;
	threshold?: number; // Hur mycket av sektionen måste vara synlig för att trigga fade-in (0-1)
	delay?: number; // Fördröjning innan fade-in startar (ms)
	duration?: number; // Tid för fade-in animationen (ms)
};

export const FadeInSection = ({
	children,
	className = "",
	threshold = 0.2,
	delay = 0,
	duration = 800,
}: SectionProps) => {
	const [id] = useState(() => `section-${uuidv4()}`);
	const [shouldRender, setShouldRender] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

	// Använd vår custom hook för att kolla om sektionen är synlig
	const isOnScreen = useOnScreen(sectionRef, { threshold, triggerOnce: true });

	// När sektionen blir synlig, aktivera rendering efter delay
	useEffect(() => {
		if (isOnScreen) {
			const timer = setTimeout(() => setShouldRender(true), delay);
			return () => clearTimeout(timer);
		}
	}, [isOnScreen, delay]);

	// Skapa style för animationens duration
	const style = {
		"--animation-duration": `${duration}ms`,
	} as React.CSSProperties;

	return (
		<section
			id={id}
			ref={sectionRef}
			className={`FadeInSection ${
				shouldRender ? "FadeInSection--visible" : ""
			} ${className}`}
			style={style}
		>
			{children}
		</section>
	);
};

// ref={sectionRef} här lägger vi till referensen ifrån useRef på section-taggen
// shouldRender ? "FadeInSection--visible" : "" är det som triggar animationen när
// klassen visible läggs till
