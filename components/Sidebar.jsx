import { FaUser, FaCog, FaChartBar, FaBox, FaShoppingCart, FaMoneyCheck, FaBullhorn, FaHeadset, FaUsers, FaHome, FaSlidersH } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* Logo / Brand */}
        <div className="p-6 text-2xl font-bold text-gray-800">Admin Panel</div>

        {/* Navigation */}
        <nav className="mt-4 flex flex-col space-y-1">
          <SidebarLink icon={<FaHome />} label="Dashboard" />
          <SidebarLink icon={<FaUsers />} label="Users" />
          <SidebarLink icon={<FaUser />} label="Vendors" />
          <SidebarLink icon={<FaBox />} label="Products" />
          <SidebarLink icon={<FaShoppingCart />} label="Orders" />
          <SidebarLink icon={<FaMoneyCheck />} label="Payouts" />
          <SidebarLink icon={<FaChartBar />} label="Analytics" />
          <SidebarLink icon={<FaBullhorn />} label="Promotions" />
          <SidebarLink icon={<FaHeadset />} label="Support" />
          <SidebarLink icon={<FaSlidersH />} label="Settings" active />
        </nav>
      </div>
 
    

      {/* Bottom Section */}
      <div className="p-4 border-t">
        <div className="flex items-center space-x-3">
          <img
            src="/avatar.png"
            alt="Admin"
            width={25} 
            height={25} 
            className="rounded-full object-cover shadow-md border-4 border-white"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">John Smith</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
          <FaCog className="ml-auto text-gray-400 cursor-pointer hover:text-gray-600" />
        </div>
      </div>
    </div>
  );
}

// Reusable Link Item
function SidebarLink({ icon, label, active = false }) {
  return (
    <a
      href="#"
      className={`flex items-center px-6 py-2 text-sm font-medium ${
        active
          ? 'bg-green-100 text-green-700'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <span className="mr-3 text-lg">{icon}</span>
      {label}
    </a>
  );
}
