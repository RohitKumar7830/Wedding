import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { videosData } from '@/data/data'
import { Play, Heart, Eye } from 'lucide-react';

export const VideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Wedding Video Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videosData.map((video) => (
          <Card key={video.id} className="overflow-hidden group">
            <CardContent className="p-0 relative">
              <img
                src={video.thumbnail}
                loading='lazy'
                alt={video.title || 'video-title'}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Dialog>
                  <DialogTrigger>
                    <Play className="w-16 h-16 text-white cursor-pointer" onClick={() => setActiveVideo(video)} />
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    {activeVideo && (
                      <div>
                        <video src={activeVideo.src} controls className="w-full" />
                        <h3 className="text-xl font-semibold mt-4">{activeVideo.title}</h3>
                        <p className="text-gray-600 mt-2">{activeVideo.description}</p>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
              <Badge className="absolute top-2 right-2 bg-blue-500">{video.duration}</Badge>
            </CardContent>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 truncate">{video.title}</h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{video.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>{video.views}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4" />
                  <span>{video.likes}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
