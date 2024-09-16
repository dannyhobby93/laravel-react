import { Head, Link, usePage } from "@inertiajs/react";

import { useState } from "react";
import { useRoute } from "ziggy-js";
import Pagination from "../Components/Pagination";

export default function Home({ posts }) {
    const route = useRoute();
    const { flash } = usePage().props;

    const [flashMessage, setFlashMessage] = useState(flash.message);

    setTimeout(() => {
        setFlashMessage(null);
    }, 2000);

    return (
        <>
            <Head title="Home" />
            <h1 className="title">Hello User</h1>
            {flashMessage && (
                <div className="absolute top-24 right-6 bg-green-500 rounded-md shadow-lg text-sm text-white p-4">
                    {flashMessage}
                </div>
            )}
            {posts.data.map((post, index) => (
                <div key={index}>
                    <div>
                        <Link href={route("posts.show", post.id)}>
                            {post.title}
                        </Link>
                    </div>
                    <span className="text-sm text-gray-400">
                        Posted @{" "}
                        {new Date(post.created_at).toLocaleTimeString()}
                    </span>
                </div>
            ))}
            <Pagination links={posts.links} />
        </>
    );
}
