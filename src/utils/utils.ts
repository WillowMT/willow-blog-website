import {
    useSanityClient,
    groq,
    createImageBuilder,
    portableTextToHtml,
} from "astro-sanity";
import SyntaxHighlighter from "react-syntax-highlighter";

export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(src: string) {
    return imageBuilder.image(src);
}

export async function getAllBlogPost() {
    const query = groq`*[_type == "post"]`;
    const firstPost = await useSanityClient().fetch(query);
    return firstPost;
}

export function sanityPortableText(portabletext: any) {
    return portableTextToHtml(portabletext, {
        types: {
            image: ({ value }: any) =>
                `<img src=${urlForImage(value).url().toString()} />`,
            myCodeField: ({ value }: any) => {
                // console.log(e);
                return `<code>${JSON.stringify(value)}</code>`;
            },
        },
        block: {
            h2: ({ value, children }: any) => {
                return `<h2 class="text-4xl">${children}</h2>`;
            },
            code: ({ value, children }: any) => {
                return `<code class="text-red-100">${children}</code>`;
            },
        },
    });
}
