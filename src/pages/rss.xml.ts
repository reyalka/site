import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

// biome-ignore lint/suspicious/noExplicitAny: <よくわからない>
export async function GET(context: any) {
	const blogArticles = await getCollection("blog");
	const zennArticles = await getCollection("zenn");

	const articles = [...blogArticles, ...zennArticles].sort((a, b) => {
		const aDate = new Date(a.data.date);
		const bDate = new Date(b.data.date);
		return bDate.getTime() - aDate.getTime();
	});
	return rss({
		title: "れやかボックス",
		description: "ブログやZennの記事をまとめています。",
		site: context.site,
		items: articles.map((entry) => {
			return entry.collection === "zenn"
				? {
						title: entry.data.title,
						link: entry.data.link,
						pubDate: new Date(entry.data.date),
						enclosure: {
							url: entry.data.ogUrl,
							length: 0,
							type: "image/png",
						},
					}
				: {
						title: entry.data.title,
						link: `/blog/${entry.id}`,
						pubDate: new Date(entry.data.date),
						content: entry.body ?? "",
					};
		}),
		customData: "<language>ja-jp</language>",
	});
}
