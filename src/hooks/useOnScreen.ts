import { useState, useEffect, RefObject } from "react";

type UseOnScreenOptions = {
	threshold?: number;
	triggerOnce?: boolean;
};

// custom hook som kollar om ett element är synligt i viewport
// ref är referensen till elementet vi vill ha koll på
// options är threshold och triggerOnce
// hooken returnerar en boolean med info om elementet är synligt eller inte

export const useOnScreen = (
	ref: RefObject<HTMLElement | null>,
	options: UseOnScreenOptions = {}
): boolean => {
	const { threshold = 0.1, triggerOnce = false } = options;
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (!ref) return;

		const element = ref.current;

		// returnera tidigt om elementet inte finns eller om vi redan har triggat (om triggerOnce)
		if (!element || (triggerOnce && isVisible)) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				// uppdatera statevariabeln med info om den syns eller inte
				setIsVisible(entry.isIntersecting);

				// ta bort observern om vi är klara
				if (entry.isIntersecting && triggerOnce) {
					observer.unobserve(element);
				}
			},
			{ threshold }
		);

		// börja observera elementet
		observer.observe(element);

		// ta bort observern när komponenten unmountas
		return () => {
			observer.disconnect();
		};
	}, [ref, threshold, triggerOnce, isVisible]);

	return isVisible;
};
