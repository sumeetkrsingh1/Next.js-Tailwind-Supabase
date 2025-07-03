import { FaBell } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white">
      {/* Title */}
      <h1 className="text-xl font-semibold text-gray-800">Store Settings</h1>

      {/* Right Section: Search + Icons */}
      <div className="flex items-center space-x-4">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <svg
            className="w-4 h-4 absolute left-3 top-2.5 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </div>

        {/* Notification Icon */}
        <div className="relative">
          <FaBell className="w-5 h-5 text-gray-500" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Avatar */}
        <img
          src="/avatar.png"
          alt="User Avatar"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </header>
  );
}
