import { animated } from "@react-spring/web";
import { Image } from "astro:assets";

// 記事を表示するコンポーネント
export type Article = {
	link: string;
	title: string;
	description: string;
	rawDate: string;
	date: string;
	ogUrl: string;
};

// TODO: unused
export function Articles({ articles }: { articles: Article[] }) {
	return (
		<div className="flex flex-col gap-5">
			{articles.map((article) => {
				return (
					<animated.a
						key={article.link}
						href={article.link}
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col gap-2"
					>
						<img
							src={article.ogUrl}
							alt={article.title}
							className="h-40 w-full object-cover"
						/>
						<h3 className="text-2xl font-bold">{article.title}</h3>
						<p className="text-lg">{article.description}</p>
						<p className="text-sm">{article.date}</p>
					</animated.a>
				);
			})}
		</div>
	);
}

export function ArticleList({ articles }: { articles: Article[] }) {
	return (
		<>
			{articles.map((article) => {
				return (
					<a
						key={article.link}
						className="shadow-3 flex w-[min(70rem,100%)] flex-col gap-3 rounded-md border-2 border-gray-400 p-4 shadow-md transition duration-150 hover:scale-105 sm:flex-row"
						href={article.link}
					>
						<Image
							src={article.ogUrl}
							alt={article.title}
							width={200}
							inferSize={true}
							class="object-contain"
						/>
						<div className="flex flex-col">
							<p className="text-xl font-bold">{article.title}</p>
							<p>{article.date}</p>
						</div>
					</a>
				);
			})}
		</>
	);
}
