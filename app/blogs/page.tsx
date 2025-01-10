import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default async function blogs() {
  const data = await client.fetch(`*[_type == "blogs"]{
  "imageUrl": image1.asset->url, 
  "slug": slug.current,
  heading,  
}
`);

  return (
    <>
      <Header />
      <div className="bg-black grid grid-cols-1 sm:grid-cols-2 items-center py-10">
        {data.map((item: any) => {
          return (
            <Link href={`/blogs/${item.slug}`} key={item._id} className="shadow-lg p-5 hover:scale-105 transition-transform duration-300 ease-in-out">
              <Image
                src={item.imageUrl}
                alt={item.heading}
                height={400}
                width={700}
                className="max-h-72 object-cover rounded mt-2"
              />
              <h1 className="text-white text-[18px] mt-5">{item.heading}</h1>
            </Link>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
