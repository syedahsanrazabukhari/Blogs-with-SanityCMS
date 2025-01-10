import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CommentForm from '@/app/components/Submit';
interface Props {
    params: {
        blog: string;
    };
}
export default async function page({ params }: { params: { blog: string } }) {
    const data = await client.fetch(`*[_type == "blogs" && slug.current == "${params.blog}"]{
    "imageUrl": image1.asset->url,
    "slug": slug.current,
    heading,
    intoduction, 
    description,
    conclusion
  }`);
    const blogs = data[0];
    return (
        <>
            <Header />
            <div className=" py-10 px-10 bg-black text-white  space-y-3">
                <div className=" ">
                    {blogs.imageUrl && (
                        <div className="">
                            <Image
                                src={blogs.imageUrl}
                                alt={blogs.heading}
                                width={400}
                                height={300}
                                className="rounded-3xl object-cover w-full h-auto "
                            />
                        </div>
                    )}
                </div>
                <div className=" space-y-16">
                    <h1 className="text-4xl font-bold hover:text-green-600 mt-10">{blogs.heading}</h1>
                    <p className='text-lg hover:text-green-600'><b>INTRODUCTION:</b> {blogs.intoduction}</p>
                    <p className="text-lg mt-2 hover:text-green-600"><b>BLOG:</b>{blogs.description}</p>
                    <p className='hover:text-green-600'><b>CONCLUSION:</b>{blogs.conclusion}</p>
                </div>
            <CommentForm />
            </div>
            <Footer />
        </>
    );
}