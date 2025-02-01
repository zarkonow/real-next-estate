import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">
            <span className="text-slate-500">Real</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none w-24 sm:w-64 "
          />
          <button className=" text-white  rounded-lg ml-5">
            <FaSearch className="text-slate-600  " />
          </button>
        </form>
        <ul>
          <li className="inline-block mx-2">
            <Link href="/">Home</Link>
          </li>
          <li className="inline-block mx-2">
            <Link href="/about">About</Link>
          </li>
          <li className="inline-block mx-2">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
