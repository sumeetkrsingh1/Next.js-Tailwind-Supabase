export default function BusinessHours() {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Business Hours</h2>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Days and Times */}
          <div className="space-y-3">
            {[
              { day: "Monday - Friday", open: "09:00", close: "18:00" },
              { day: "Saturday", open: "10:00", close: "16:00" },
              { day: "Sunday", closed: true },
            ].map((item, idx) => (
              <div key={idx}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{item.day}</label>
                {item.closed ? (
                  <p className="text-sm text-gray-500 italic">Closed</p>
                ) : (
                  <div className="flex items-center gap-4">
                    <input
                      type="time"
                      defaultValue={item.open}
                      className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <span className="text-sm text-gray-600">to</span>
                    <input
                      type="time"
                      defaultValue={item.close}
                      className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
  
          {/* Right: Holiday Schedule */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Holiday Schedule</label>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex justify-between">
                <span>New Year’s Day</span>
                <span className="text-gray-500">Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Independence Day</span>
                <span className="text-gray-500">Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Thanksgiving</span>
                <span className="text-gray-500">Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Christmas Day</span>
                <span className="text-gray-500">Closed</span>
              </li>
            </ul>
  
            <button className="text-sm text-green-600 hover:underline mt-2">+ Add Holiday</button>
          </div>
        </div>
      </div>
    );
  }
  