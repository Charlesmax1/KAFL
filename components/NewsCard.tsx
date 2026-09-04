import { News } from '@/types'

interface NewsCardProps {
  news: News;
}

export default function NewsCard({ news }: NewsCardProps) {
  // Get the image URL from either field
  const imageUrl = news.featured_image || news.image_url || ''

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Image */}
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={imageUrl}
            alt={news.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {news.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-3">
          {news.excerpt || news.content}
        </p>
        <div className="flex justify-between items-center text-xs text-gray-400">
          {news.author && (
            <span>✍️ {news.author}</span>
          )}
          <span>
            📅 {new Date(news.published_at).toLocaleDateString('en-AU', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
          </span>
        </div>
      </div>
    </div>
  )
}