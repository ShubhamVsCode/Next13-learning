import React from 'react'
import axios from 'axios'

type Params = {
    params: {
        blogId: string
    }
}

const getPost = async (blogId: string) => {
    const allPosts = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${blogId}`
    );
    return allPosts;
};

const BlogPage = async ({ params: { blogId } }: Params) => {
    const post = await getPost(blogId)
    return (
        <div className='px-10 py-5 text-center'>
            <h1 className="text-2xl font-semibold">{post.data.title}</h1>
            <p className="text-blue-500 mt-5">{post.data.body}</p>
        </div>
    )
}

export default BlogPage
