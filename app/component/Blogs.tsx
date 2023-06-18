'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { Client, Databases, ID } from "appwrite";

const client = new Client();

const databases = new Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('648dedd51748d651d1ae');
const Blogs = () => {

    const [posts, setPosts] = useState([{}])
    useEffect(() => {
        const promise = databases.listDocuments('648df03255fe64615051', '648df03b4b66dffd3a7d');

        promise.then(function (response) {
            return setPosts(response.documents);
        }, function (error) {
            console.log(error);
        });
    }, [])

    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-10 py-24 mx-auto">
                <div className="flex flex-wrap lg:divide-x-2 divide-gray-700 -mx-4 -my-8">
                    {posts.map((post: any) => (
                        <div className="py-8 px-4 lg:w-1/3">
                            <div className="h-full flex items-start">
                                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                    <span className="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">
                                        {new Date(post.date).toLocaleString('default', { month: 'short' })}
                                    </span>
                                    <span className="font-medium text-lg leading-none text-gray-300 title-font">
                                        {new Date(post.date).toLocaleString('default', { day: '2-digit' })}
                                    </span>
                                </div>
                                <div className="flex-grow pl-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-400 mb-1">{post.category}</h2>
                                    <h1 className="title-font text-xl font-medium text-white mb-3">{post.title}</h1>
                                    <p className="leading-relaxed mb-5">
                                        {post.meta}...
                                    </p>
                                    <Link href={`/blog/${post.slug}`} className="text-indigo-400 inline-flex items-center mt-4">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blogs;