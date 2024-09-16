import React from "react";
import Pagination from "../Components/Pagination";

export default function Home({ posts }) {
    return (
        <>
            <h1 className="title">Hello User</h1>
            {posts.data.map((post, index) => (
                <div key={index}>
                    <p>{post.title}</p>
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
