import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type SearchBarPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

function SearchBar(props: SearchBarPropsType) {
  return (
    <div className="p-2 flex items-center bg-gray-700 rounded">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input
        type="search"
        className="w-full border-0 outline-0 bg-transparent text-white placeholder:text-gray-400"
        {...props}
      />
    </div>
  );
}

export default SearchBar;
