interface ComingSoonProps {
  title?: string;
  description?: string;
  icon?: string;
  features?: string[];
}

export default function ComingSoon({ 
  title = "Coming Soon",
  description = "We're working on something exciting!",
  icon = "🚧",
  features = []
}: ComingSoonProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        {/* Icon */}
        <div className="text-6xl mb-6">{icon}</div>
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {title}
        </h1>
        
        {/* Description */}
        <p className="text-gray-600 text-lg mb-6">
          {description}
        </p>
        
        {/* Features List */}
        {features.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="font-semibold text-gray-700 mb-3">Coming Features:</p>
            <ul className="text-left max-w-xs mx-auto space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <span className="text-kafl-green">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Notification Button */}
        <button className="bg-kafl-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
          🔔 Notify Me
        </button>
      </div>
    </div>
  )
}