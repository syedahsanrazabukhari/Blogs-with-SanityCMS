import Header from "./components/Header";
import Footer from "./components/Footer";

import Link from "next/link";
export default function Home() {
  return (
    <>
      <Header />
      {/* hero section */}
      <main>
        <section className="bg-green-700 w-full">
          <div className="py-20 sm:py-40 px-18 sm:px-44 text-center space-y-3">
            <h1 className="text-[60px] "><b>Welcome to BLOGNEST</b></h1>
            <p className="text-[20px]">Your daily dose of inspiration, knowledge, and creativity!Explore captivating stories, insightful articles, and expert tips on topics like technology, lifestyle, design, or your blog niche.</p>
            <Link href="/blogs"><button className="py-3 px-4 bg-black  mt-4 text-white rounded-2xl w-36 hover:text-green-600">Blogs</button></Link>
          </div>
        </section>
      </main>
      <Footer />
    
    </>
  );

}