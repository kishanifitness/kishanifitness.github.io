'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Video = {
  id: string
  title: string
  category: string
  thumbnail: string
  reelUrl: string
}

export function WorkoutVideos() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const categories = ['All', 'Full body', 'Amrap', 'EMOM', 'HIIT', 'Hyrox', 'AB']

  const videos: Video[] = [
    {
      id: '1',
      title: 'Med Ball Full Body Friday Workout',
      category: 'Full body',
      thumbnail: '/images/chest-workout-gym.jpg',
      reelUrl: 'https://www.instagram.com/reel/DL-cC-0JKh2/',
    },
    {
      id: '2',
      title: 'Leg Day Domination',
      category: 'Lower Body',
      thumbnail: '/images/leg-workout-squat.jpg',
      reelUrl: 'https://www.instagram.com/reel/C8example2/',
    },
    {
      id: '3',
      title: 'Core Crusher',
      category: 'Core',
      thumbnail: '/images/core-ab-workout.jpg',
      reelUrl: 'https://www.instagram.com/reel/C8example3/',
    },
    {
      id: '4',
      title: 'HIIT Cardio Burn',
      category: 'Cardio',
      thumbnail: '/images/hiit-cardio-workout.png',
      reelUrl: 'https://www.instagram.com/reel/C8example4/',
    },
    {
      id: '5',
      title: 'Back & Biceps',
      category: 'Upper Body',
      thumbnail: '/images/back-workout-pullups.jpg',
      reelUrl: 'https://www.instagram.com/reel/C8example5/',
    },
    {
      id: '6',
      title: 'Glute Gains',
      category: 'Lower Body',
      thumbnail: '/images/glute-workout.jpg',
      reelUrl: 'https://www.instagram.com/reel/C8example6/',
    },
  ]

  const filteredVideos =
    selectedCategory === 'All'
      ? videos
      : videos.filter((v) => v.category === selectedCategory)

  const featuredVideo = selectedVideo || videos[0]

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video)
    setIsPlaying(false)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-4">
          Workout Videos
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Get a taste of the training style
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={
                selectedCategory === category
                  ? 'bg-black text-white hover:bg-gray-800'
                  : ''
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Video Player */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative aspect-[9/16] max-h-[600px] mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
            {isPlaying ? (
              <iframe
                src={`${featuredVideo.reelUrl}embed`}
                title={featuredVideo.title}
                className="w-full h-full"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div 
                className="relative w-full h-full group cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                <img
                  src={featuredVideo.thumbnail || "/placeholder.svg"}
                  alt={featuredVideo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-black ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            )}
          </div>
          <h3 className="text-2xl font-bold text-black mt-4">
            {featuredVideo.title}
          </h3>
          <p className="text-gray-600">{featuredVideo.category}</p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {filteredVideos.map((video) => (
            <button
              key={video.id}
              onClick={() => handleVideoSelect(video)}
              className={`relative aspect-video rounded-lg overflow-hidden shadow-lg group cursor-pointer transition-all ${
                selectedVideo?.id === video.id ? 'ring-4 ring-black' : ''
              }`}
            >
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                  <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-white text-sm font-semibold line-clamp-1">
                  {video.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
