import { useSpecificSpring } from "@/hooks/useSpecificSpring";
import { animated } from "@react-spring/web";
import type { IconNode } from "lucide";
import Icon from "./Icon.astro";
import { Account, accountInfo, Accounts } from "./Accounts";
import type { JSX } from "astro/jsx-runtime";

export default function Page() {
	const [makeHorizonalSpring, makeVerticalSpring] = useSpecificSpring();

	const iconSpring = makeHorizonalSpring({ from: -200, delay: 0 });
	const nameSpring = makeVerticalSpring({ from: -100, delay: 200 });
	const subNameSpring = makeVerticalSpring({ from: -100, delay: 250 });

	return (
		<div className="flex flex-col gap-10 rounded-lg sm:flex-row">
			<animated.div className="z-10 flex flex-col justify-center">
				<animated.img
					src="/reyalka.png"
					alt="reyalka"
					style={iconSpring}
					className="z-20 h-60 w-60 rounded-[20%] border-2 border-black-200 shadow-md"
				/>
				<animated.h2
					style={nameSpring}
					className="my-3 mr-4 font-bold font-serif text-5xl "
				>
					reyalka
				</animated.h2>
				<animated.p style={subNameSpring} className="font-bold text-3xl">
					れやか
				</animated.p>
			</animated.div>

			<ul className="flex flex-col gap-3 ">
				<li>
					<ProfileList
						title=""
						contents={[
							<p key="intro" className="text-3xl">フロントエンドに興味がある学生です。</p>,
							...accountInfo.map((account) => {
								return <Account key={account.link} account={account} />;
							}),
						]}
					/>
				</li>
			</ul>
		</div>
	);
}

function ProfileList({
	title,
	contents,
}: {
	title: string;
	// JSX.Element is `any`, so contents is `any[]`
	contents: (string | JSX.Element)[];
}) {
	const [makeHorizonalSpring, makeVerticalSpring] = useSpecificSpring();

	const titleSpting = makeHorizonalSpring({ from: -100, delay: 300 });
	function generateAboutSpring(index: number) {
		return makeHorizonalSpring({
			from: -30,

			/**
			 * index => delay
			 * 0 => 375
			 * 1 => 475
			 * ...
			 */
			delay: 400 + index * 100,
		});
	}

	return (
		<div className="flex flex-col">
			<animated.h2 style={titleSpting} className="font-bold text-2xl">
				{title}
			</animated.h2>
			<ul className="flex flex-col gap-5">
				{contents.map((content, index) => {
					return (
						<li
							key={
								typeof content === "string" ? content : (content as JSX.Element)
							}
						>
							<animated.h3
								style={generateAboutSpring(index)}
								className="text-2xl"
							>
								{typeof content === "string" ? (
									<p className="font-2xl font-semibold">{content}</p>
								) : (
									content
								)}
							</animated.h3>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
