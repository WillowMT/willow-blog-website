// import { PortableText } from "@portabletext/react";
import SyntaxHighlighter from "react-syntax-highlighter";

export default function CodeBlock({ node }: any) {
    if (!node || !node.code) return null;
    const { language, code } = node;
    return (
        <SyntaxHighlighter language={language || "text"}>
            {code}
        </SyntaxHighlighter>
    );
}

export function Test({name}:{name:string}) {
    return <p>test, {name}</p>;
}
