"use client"; // Make this a client-side component

import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

interface Props {
    params: {
        blog: string;
    };
}

const BlogPage = ({ params }: Props) => {
    const [blogs, setBlogs] = useState<any>(null);  
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);

    // Fetch blog data when component mounts
    useEffect(() => {
        const fetchData = async () => {
            const data = await client.fetch(`*[_type == "blogs" && slug.current == "${params.blog}"]{
                "imageUrl": image1.asset->url,
                "slug": slug.current,
                heading,
                intoduction, 
                description,
                conclusion
            }`);
            setBlogs(data[0]);
        };

        fetchData();
    }, [params.blog]); 

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && comment) {
            setComments((prevComments) => [...prevComments, { name, comment }]);
            setName('');
            setComment('');
        }
    };

    if (!blogs) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
            <div className="py-10 px-10 bg-black text-white space-y-3">
                <div>
                    {blogs.imageUrl && (
                        <div>
                            <Image
                                src={blogs.imageUrl}
                                alt={blogs.heading}
                                width={500}
                                height={300}
                                className="rounded-3xl object-cover w-full h-auto"
                            />
                        </div>
                    )}
                </div>

                <div className="space-y-16">
                    <h1 className="text-4xl font-bold hover:text-green-600 mt-10">{blogs.heading}</h1>
                    <p className="text-lg hover:text-green-600"><b>INTRODUCTION:</b> {blogs.intoduction}</p>
                    <p className="text-lg mt-2 hover:text-green-600"><b>BLOG:</b>{blogs.description}</p>
                    <p className="hover:text-green-600"><b>CONCLUSION:</b>{blogs.conclusion}</p>
                </div>

                {/* Comment Section */}
                <div className="mt-16 bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Leave a Comment</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-900 text-white"
                                required
                            />
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Your Comment"
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-900 text-white"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>

                    {/* Displaying Comments */}
                    <div className="mt-8">
                        {comments.length > 0 && (
                            <div>
                                <h3 className="text-xl font-semibold text-white">Comments</h3>
                                <div className="space-y-4 mt-4">
                                    {comments.map((comment, index) => (
                                        <div key={index} className="bg-gray-900 p-4 rounded-lg">
                                            <p className="text-lg font-semibold text-green-500">{comment.name}</p>
                                            <p className="text-white">{comment.comment}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BlogPage;
