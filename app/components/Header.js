"use client";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import Image from "next/image";
export default function Header() {
  return (
    <header className="bg-neutral-100 p-4 fixed w-full left-0 top-0 z-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="/"
          aria-current="page"
          className="transition transform hover:scale-105 duration-200 flex items-center"
        >
          <Image
            src="/logo.svg"
            alt="Emailer X Webflow Template - Logo"
            loading="eager"
            width={298}
            height={66}
          />
          <div className="w-px min-h-14 bg-neutral-300 mx-8"></div>
        </a>
        <nav className="mr-auto">
          <ul className="flex space-x-4">
            <li>
              <Link
                className="cursor-pointer text-neutral-600 transition-colors duration-200 hover:text-primary text-lg mr-8"
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer text-neutral-600 transition-colors duration-200 hover:text-primary text-lg mr-8"
                to="section1"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer text-neutral-600 transition-colors duration-200 hover:text-primary text-lg mr-8"
                to="section1"
                smooth={true}
                duration={500}
              >
                Archive
              </Link>
            </li>
          </ul>
        </nav>
        <button className="btn-primary rounded-xl flex items-center">
          <EnvelopeIcon className="size-6 font-medium text-neutral-100 pr-1" />
          Subscribe
        </button>
      </div>
    </header>
  );
}
