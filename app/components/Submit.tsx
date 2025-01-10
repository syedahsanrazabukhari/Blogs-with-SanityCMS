"use client"; // Make this a client-side component

import { useState } from 'react';

const CommentForm = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && comment) {
            setComments((prevComments) => [...prevComments, { name, comment }]);
            setName('');
            setComment('');
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Leave a Comment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-800 text-white"
                    required
                />
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Your Comment"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-800 text-white"
                    required
                />
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                    Submit
                </button>
            </form>

            {/* Displaying Comments */}
            <div className=" space-y-4">
                {comments.map((comment, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-lg font-semibold text-green-500">{comment.name} Review</p>
                        <p className="text-white">{comment.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentForm;
