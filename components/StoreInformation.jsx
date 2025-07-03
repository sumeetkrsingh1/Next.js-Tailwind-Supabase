export default function StoreInformation() {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Store Information</h2>
          <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-md">
            Save Changes
          </button>
        </div>
  
        <div className="space-y-4">
          {/* Store Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Store Name</label>
            <input
              type="text"
              defaultValue="TechGear Shop"
              className="w-full mt-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
  
          {/* Store URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Store URL</label>
            <div className="flex items-center mt-1">
              <span className="px-3 py-2 bg-gray-100 border border-r-0 rounded-l-md text-sm text-gray-600">https://</span>
              <input
                type="text"
                defaultValue="techgear.shopmarket.com"
                className="w-full px-3 py-2 border border-l-0 rounded-r-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
  
          {/* Store Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Store Description</label>
            <textarea
              rows="3"
              defaultValue="TechGear Shop is your one-stop destination for premium tech accessories and gadgets. We offer a wide range of high-quality products at competitive prices with excellent customer service."
              className="w-full mt-1 px-3 py-2 border rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
  
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                defaultValue="contact@techgearshop.com"
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="text"
                defaultValue="+1 (555) 123-4567"
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
  
          {/* Store Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Store Address</label>
            <input
              type="text"
              defaultValue="123 Tech Avenue, Suite 456"
              className="w-full mt-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 mb-2"
            />
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                defaultValue="San Francisco"
                placeholder="City"
                className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                defaultValue="California"
                placeholder="State"
                className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                defaultValue="94107"
                placeholder="ZIP"
                className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  