import { XMLParser } from "fast-xml-parser";
import { Articles, type Article } from "@/components/Articles";

const zennUrl = "https://zenn.dev/reyalka/feed?all=1";
const parser = new XMLParser({
    ignoreAttributes: false,
});

export async function fetchZennArticles(): Promise<Article[]> {
    const response = await fetch(zennUrl);
    const xml = await response.text();
    const data = parser.parse(xml);
    return data?.rss?.channel?.item.map(
        (item: {
            title: string;
            link: string;
            pubDate: string;
            description: string;
            enclosure: { "@_url": string };
        }) => {
            return {
                title: item?.title,
                link: item?.link,
                description: item?.description,
                rawPubDate: item?.pubDate,
                pubDate: new Date(Date.parse(item?.pubDate)).toLocaleDateString(
                    "ja-JP",
                ),
                ogUrl: item?.enclosure["@_url"],
            } satisfies Article;
        },
    );
}

