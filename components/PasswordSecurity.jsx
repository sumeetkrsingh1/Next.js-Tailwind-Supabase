export default function PasswordSecurity() {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Password & Security</h2>
  
        <div className="space-y-4">
          {/* Current Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Password</label>
            <input
              type="password"
              placeholder="Enter current password"
              className="w-full mt-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
  
          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full mt-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
  
          {/* Confirm New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full mt-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
  
          {/* Save Button */}
          <div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              Save Changes
            </button>
          </div>
  
          {/* Password Requirements */}
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Password Requirements:</p>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Minimum 8 characters</li>
              <li>At least one uppercase letter</li>
              <li>At least one number</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  