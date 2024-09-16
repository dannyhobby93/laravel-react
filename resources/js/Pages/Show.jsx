import { Head, Link, useForm } from "@inertiajs/react";

import React from "react";
import { useRoute } from "ziggy-js";

export default function Show({ post }) {
    const route = useRoute();
    const { delete: destroy } = useForm();

    function submit(e) {
        e.preventDefault();
        destroy(route("posts.destroy", post.id));
    }

    return (
        <>
            <Head title={post.title} />
            <div>
                <h1 className="title">{post.title}</h1>
                <span className="text-sm text-gray-400">
                    Posted @ {new Date(post.created_at).toLocaleTimeString()}
                </span>
                <p className="body">{post.body}</p>

                <div className="flex items-center justify-end pt-2">
                    <form onSubmit={submit}>
                        <button className="primary-btn bg-red-500 hover:bg-red-400">
                            Delete
                        </button>
                    </form>
                    <div className="ml-1">
                        <Link
                            href={route("posts.edit", post)}
                            className="primary-btn bg-blue-500 hover:bg-blue-400"
                        >
                            Edit
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
