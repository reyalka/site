import { useSpecificSpring } from "@/hooks/useSpecificSpring";
import { animated } from "@react-spring/web";

// 記事を表示するコンポーネント
export type Article = {
	link: string;
	title: string;
	description: string;
	rawPubDate: string;
	pubDate: string;
	ogUrl: string;
};

// TODO: 直す
export function Articles({ articles: zennArticles }: { articles: Article[] }) {
	const [makeHorizonalSpring, makeVerticalSpring] = useSpecificSpring();

	function generateAboutSpring(index: number) {
		return makeVerticalSpring({
			from: -100,
			/**
			 * index => delay
			 * 0 => 400
			 * 1 => 500
			 * ...
			 */
			delay: 300 + index * 50,
			mass: 2,
		});
	}

	return (
		<div className="m-4 flex flex-col gap-5">
			{zennArticles.map((article, index) => {
				return (
					<animated.a
						key={article.link}
						className="flex w-[min(70rem,100%)] gap-3 rounded-md border-2 border-gray-400 p-4 shadow-md transition duration-150 hover:scale-105"
						href={article.link}
						style={generateAboutSpring(index)}
					>
						<img src={article.ogUrl} alt={article.title} width={200} height={100} className="object-contain"/>
						<div className="flex flex-col">
							<p className="font-bold text-xl">{article.title}</p>
							<p>{article.pubDate}</p>
						</div>
					</animated.a>
				);
			})}
		</div>
	);
}
