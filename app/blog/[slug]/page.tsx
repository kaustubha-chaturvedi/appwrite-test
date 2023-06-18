'use client';
import Navbar from '@/app/component/Navbar';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Client, Databases, Query } from "appwrite";

const client = new Client();
const databases = new Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('648dedd51748d651d1ae');

interface Post {
    title: string;
    slug: string;
    date: Date;
    meta: string;
    content: string;
}

const BlogPage = ({ params }: { params: any }) => {
    const [post, setPost] = useState<Post | any>({});
    const { slug } = params;
    useEffect(() => {
        const promise = databases.listDocuments(
            '648df03255fe64615051',
            '648df03b4b66dffd3a7d',
            [Query.equal('slug', slug)]
        );

        promise.then(function (response) {
            console.log(response); // Success
            return setPost(response.documents[0]);
        }, function (error) {
            console.log(error);
        });
    }, []);
    const formattedDate = new Date(post?.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric', });
    
    return (
        <>
            <Head>
                <title>{post?.title}</title>    
                <meta name="description" content={`${post?.meta}`} />
            </Head>
            <Navbar />
            <div className="mx-auto max-w-3xl py-8 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-4">{post?.title}</h1>
                <p className="text-gray-600 mb-4">{formattedDate}</p>
                <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: post?.content }} />
            </div>
        </>
    );
};
export default BlogPage;        