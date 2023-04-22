"use client"

import React from "react";
import axios from "axios";
import Link from "next/link";

export const getAllPosts = async () => {
    const allPosts = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );
    return allPosts;
};

export default async function BlogPage() {
    const allPosts = await getAllPosts();
    console.log(allPosts)

    return <div className="max-w-4xl m-auto py-10 px-20">
        {allPosts?.data?.map((post: { id: string, title: string, body: string }) => (
            <div className="mb-10" key={post?.id}>
                <Link href={`/blog/${post?.id}`}>
                    <h1 className="text-2xl font-semibold">{post?.id}) {post.title}</h1>
                </Link>
                {/* <p className="text-blue-500">{post.body}</p> */}
            </div>
        ))}
    </div>;
}
