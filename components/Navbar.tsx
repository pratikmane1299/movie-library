import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="w-full py-4">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <span className="text-xl font-semibold">Movie Library</span>
        </Link>

        <a
          rel="noopener norefferer nofollow"
          href="https://github.com/pratikmane1299"
          target="_blank"
          className="flex items-center text-sm font-medium hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
          Github
        </a>
      </div>
    </div>
  );
}

export default Navbar;
