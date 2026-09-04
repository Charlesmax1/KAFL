import { Team } from '@/types'

interface TeamCardProps {
  team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6 text-center">
        {/* Team Logo */}
        <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
          {team.logo_url ? (
            <img 
              src={team.logo_url} 
              alt={team.name} 
              className="w-20 h-20 object-contain"
            />
          ) : (
            <span className="text-4xl">⚽</span>
          )}
        </div>
        
        {/* Team Name */}
        <h3 className="text-xl font-bold text-gray-800 mb-1">
          {team.name}
        </h3>
        
        {/* City */}
        {team.city && (
          <p className="text-gray-500 text-sm mb-3">
            📍 {team.city}
          </p>
        )}
        
        {/* View Button */}
        <button className="mt-2 bg-kafl-green text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-800 transition-colors">
          View Team →
        </button>
      </div>
    </div>
  )
}