import { useSpecificSpring } from "@/hooks/useSpecificSpring";
import { animated } from "@react-spring/web";
import { Account, accountInfo } from "./Accounts";
import type { JSX } from "astro/jsx-runtime";

export default function Page() {
	const [makeHorizonalSpring, makeVerticalSpring] = useSpecificSpring();

	const iconSpring = makeHorizonalSpring({ from: -200, delay: 0 });
	const nameSpring = makeVerticalSpring({ from: -100, delay: 200 });
	const subNameSpring = makeVerticalSpring({ from: -100, delay: 250 });

	return (
		<div className="flex flex-col gap-10 rounded-lg md:flex-row">
			<animated.div className="z-10 flex flex-col justify-center">
				<animated.img
					src="/reyalka.webp"
					alt="reyalka"
					style={iconSpring}
					className="border-black-200 z-20 h-60 w-60 rounded-[20%] border-2 object-contain shadow-md"
				/>
				<animated.h2
					style={nameSpring}
					className="my-3 mr-4 font-serif text-5xl font-bold"
				>
					reyalka
				</animated.h2>
				<animated.p style={subNameSpring} className="text-3xl font-bold">
					れやか
				</animated.p>
			</animated.div>

			<ul className="flex flex-col gap-3 sm:shrink">
				<li>
					<ProfileList
						title=""
						contents={[
							<p key="intro" className="text-3xl">
								フロントエンドに興味がある学生です。
							</p>,
							<div key="accounts" className="flex flex-col gap-3">
								{...accountInfo.map((account) => {
									return <Account key={account.link} account={account} />;
								})}
							</div>,
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
			<animated.h2 style={titleSpting} className="text-2xl font-bold">
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
