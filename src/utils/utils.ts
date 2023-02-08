import {
    useSanityClient,
    groq,
    createImageBuilder,
    portableTextToHtml,
} from "astro-sanity";
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
            code: ({ value }: any) => {
                return `<pre><code class="rounded-lg language-${value.language}">${value.code}</code></pre>`;
            },
        },
        block: {
            h2: ({ value, children }: any) => {
                return `<h2 class="text-4xl">${children}</h2>`;
            },
            code: ({ value, children }: any) => {
                return `<pre><code class="rounded-lg language-${value.language}">${value.code}</code></pre>`;
            },
        },
    });
}
