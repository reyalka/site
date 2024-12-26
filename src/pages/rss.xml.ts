import { fetchZennArticles } from "@/utils/zenn";
import rss from "@astrojs/rss";

// biome-ignore lint/suspicious/noExplicitAny: <よくわからない>
export async function GET(context: any) {

	return rss({
		title: "れやかボックス",
		description: "ブログやZennの記事をまとめています。",
		site: context.site,
		items: (await fetchZennArticles()).map(({title, link, rawPubDate, ogUrl }) => {
            return {
                title,
                link,
                pubDate: new Date(rawPubDate),
                enclosure: {
                    url: ogUrl,
                    length: 0,
                    type: "image/png",
                }
            }
        }),
		customData: "<language>ja-jp</language>",
	});
}
