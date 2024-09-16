import React from "react";

export default function Show({ post }) {
    return (
        <div>
            <h1 className="title">{post.title}</h1>
            <span className="text-sm text-gray-400">
                Posted @ {new Date(post.created_at).toLocaleTimeString()}
            </span>
            <p className="body">{post.body}</p>
        </div>
    );
}
