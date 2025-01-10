import Image from "next/image"
export default function Header() {
    return (
        <>
            <header>
                <div className="p-1 bg-black text-white text-center">Blogs website</div>
                <div className="p-3  text-white flex items-center justify-between">
                    <h1 className="text-[30px] text-green-700 font-extrabold">BLOGNEST</h1>
                    <Image 
                    src="/ham.png" 
                    alt="hamburger" 
                    width={25}
                     height={25}
                     className="sm:hidden"/>
                    <ul className="max-sm:hidden text-black flex gap-x-5 text-[19px]  ">
                        <li>About</li>
                        <li>Blogs</li>
                        <li>Contact</li>
                    </ul>
                    <button className= "max-sm:hidden text-black py-2 px-4 bg-green-700 rounded-lg hover:bg-green-600">SignUp</button>
                </div>
            </header>
        </>
    )
}
