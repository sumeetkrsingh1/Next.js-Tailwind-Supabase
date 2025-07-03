import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import SecurityLogs from "./SecurityLogs"; // ⬅️ Import here

export default function StoreSidebarRight() {
  return (
    <div className="w-full lg:w-1/3 space-y-6">
      {/* Store Logo */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Store Logo</h2>
        <div className="flex flex-col items-center border border-dashed border-gray-300 p-6 rounded-lg">
          <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-2xl mb-4">
            🖼️
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm rounded-md">
            Upload Logo
          </button>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Recommended: 512x512px, PNG or JPG
          </p>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Social Media</h2>
        <div className="space-y-3">
          <InputWithIcon icon={<FaFacebookF />} placeholder="facebook.com/techgearshop" />
          <InputWithIcon icon={<FaInstagram />} placeholder="instagram.com/techgearshop" />
          <InputWithIcon icon={<FaTwitter />} placeholder="twitter.com/techgearshop" />
          <button className="text-sm text-green-600 hover:underline mt-1">+ Add More</button>
        </div>
      </div>

      {/* Security Logs */}
      <SecurityLogs />
    </div>
  );
}

function InputWithIcon({ icon, placeholder }) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-2.5 text-gray-400 text-sm">
        {icon}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-10 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}
