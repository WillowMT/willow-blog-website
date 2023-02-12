// ---
// const { category, date, title, description, trending, slug } = Astro.props;
// ---
export default function MiniBlog({category, date, title, description, trending, slug}) {
    return (

<div className="py-8 flex flex-wrap md:flex-nowrap">
    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-white"
            >{
                category.map((c) => (
                    <span className="mr-2 bg-slate-500 px-2 py-1 rounded-lg font-mono text-center">
                        {c}
                    </span>
                ))
            }</span
        >
        <span className="mt-1 text-gray-500 text-sm">{date}</span>
    </div>
    <div className="md:flex-grow">
        <h2
            className="text-2xl font-medium text-white title-font mb-2 inline-flex place-items-center"
        >
            {title}
            {
                trending && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="black"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-trending-up ml-2"
                    >
                        <>
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                            <polyline points="17 6 23 6 23 12" />
                        </>
                    </svg>
                )
            }
        </h2>
        <p className="leading-relaxed">
            {description}
        </p>
        <a
            href={`/blog/${slug}`}
            className="text-indigo-400 inline-flex items-center mt-4 cursor-pointer"
            >Learn More
            <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
            </svg>
        </a>
    </div>
</div>
    )
}
