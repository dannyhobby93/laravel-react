import { Head, useForm } from "@inertiajs/react";

import React from "react";
import { useRoute } from "ziggy-js";

export default function Edit({ post }) {
    const route = useRoute();
    const { data, setData, put, errors, processing } = useForm({
        title: post.title,
        body: post.body,
    });

    function submit(e) {
        e.preventDefault();
        put(route("posts.update", post.id));
    }

    return (
        <>
            <Head title="Edit Post" />
            <div>
                <h1 className="title">Edit a Post</h1>
                <div className="w-1/2 mx-auto">
                    <form onSubmit={submit}>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className={errors.title && "!ring-red-500"}
                        />
                        {errors.title && (
                            <p className="error">{errors.title}</p>
                        )}
                        <textarea
                            rows="10"
                            className={`mt-4 resize-none ${
                                errors.body && "!ring-red-500"
                            }`}
                            name="body"
                            value={data.body}
                            onChange={(e) => setData("body", e.target.value)}
                        ></textarea>
                        {errors.body && <p className="error">{errors.body}</p>}
                        <button
                            type="submit"
                            className="primary-btn mt-4"
                            disabled={processing}
                        >
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
