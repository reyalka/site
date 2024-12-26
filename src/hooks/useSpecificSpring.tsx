import { useSpring } from "@react-spring/web";

export function useSpecificSpring() {
	function makeHorizonalSpring({
		from,
		delay = 0,
		mass = 2,
		tention = 200,
	}: { from: number; delay?: number, mass?: number, tention?: number }) {
		return useSpring({
			from: { x: from, opacity: 0 },
			to: { x: 0, opacity: 1 },
			delay,
			config: {
				mass,
				tention,
			},
		});
	}

	function makeVerticalSpring({
		from,
		delay = 0,
	}: { from: number; delay?: number }) {
		return useSpring({
			from: { y: from, opacity: 0 },
			to: { y: 0, opacity: 1 },
			delay: delay,
			config: {
				mass: 2,
				tention: 200,
			},
		});
	}

	return [makeHorizonalSpring, makeVerticalSpring];
}