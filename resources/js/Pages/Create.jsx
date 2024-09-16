import { useForm } from "@inertiajs/react";
import React from "react";

export default function Create() {
    const { data, setData, post, errors, processing } = useForm({
        title: "",
        body: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/posts");
    }

    console.log(errors);

    return (
        <div>
            <h1 className="title">Create a Post</h1>
            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        className={errors.body && "!ring-red-500"}
                    />
                    {errors.title && <p className="error">{errors.title}</p>}
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
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
