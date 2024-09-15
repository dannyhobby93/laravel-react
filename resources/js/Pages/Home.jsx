import { Link } from "@inertiajs/react";
import React from "react";

export default function Home() {
    return (
        <div>
            <h1 className="title">Hello User</h1>

            <Link preserveScroll href="/" className="title block mt-[1000px]">
                {new Date().toLocaleTimeString()}
            </Link>
        </div>
    );
}
