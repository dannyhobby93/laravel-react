import { Link } from "@inertiajs/react";
import React from "react";
import { useRoute } from "ziggy-js";
import Pagination from "../Components/Pagination";

export default function Home({ posts }) {
    const route = useRoute();

    return (
        <>
            <h1 className="title">Hello User</h1>
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
