import { Link } from "@inertiajs/react";
import React from "react";

export default function Pagination({ links }) {
    return (
        <div className="mt-4">
            {links.map((link, index) =>
                link.url ? (
                    <Link
                        key={index}
                        href={link.url}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`p-1 mx-1 text-blue-500 hover:text-blue-700 ${
                            link.active ? "font-bold" : ""
                        }`}
                    />
                ) : (
                    <span
                        key={index}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className="p-1 mx-1 text-gray-300"
                    />
                )
            )}
        </div>
    );
}
