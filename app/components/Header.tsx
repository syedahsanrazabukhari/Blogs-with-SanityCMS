"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <header>
                <div className="p-1 bg-black text-white text-center">Blogs website</div>
                <div className="p-3 text-white flex items-center justify-between">
                    <h1 className="text-[30px] text-green-700 font-extrabold">BLOGNEST</h1>

                    {/* Hamburger Icon */}
                    <Image
                        src="/ham.png"
                        alt="hamburger"
                        width={25}
                        height={25}
                        className="sm:hidden cursor-pointer"
                        onClick={toggleDropdown}
                    />

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <ul className="absolute right-4 top-14 bg-white text-black shadow-lg rounded-md p-4 flex flex-col gap-y-3 text-[18px]">
                            <li>About</li>
                            <Link href="/blogs">
                                <li>Blogs</li>
                            </Link>
                            <li>Contact</li>
                        </ul>
                    )}

                    {/* Navigation for larger screens */}
                    <ul className="max-sm:hidden text-black flex gap-x-5 text-[21px]">
                        <li>About</li>
                        <Link href="/blogs">
                            <li>Blogs</li>
                        </Link>
                        <li>Contact</li>
                    </ul>

                    <button className="max-sm:hidden text-black py-2 px-4 bg-green-700 rounded-lg hover:bg-green-600">
                        SignUp
                    </button>
                </div>
            </header>
        </>
    );
}
