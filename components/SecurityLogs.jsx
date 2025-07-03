export default function SecurityLogs() {
    const logs = [
      {
        icon: "🔒",
        message: "Login from new device (Chrome - Delhi, India)",
        time: "Today at 09:23 AM",
      },
      {
        icon: "✅",
        message: "Password successfully changed",
        time: "Yesterday at 07:12 PM",
      },
      {
        icon: "❌",
        message: "OTP verification failed (Mobile App)",
        time: "2 days ago at 06:45 PM",
      },
    ];
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Security Logs</h2>
          <a
            href="#"
            className="text-sm text-green-600 hover:underline"
          >
            View All
          </a>
        </div>
  
        <ul className="space-y-4 text-sm text-gray-700">
          {logs.map((log, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <span className="text-xl">{log.icon}</span>
              <div>
                <p>{log.message}</p>
                <p className="text-xs text-gray-500">{log.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  