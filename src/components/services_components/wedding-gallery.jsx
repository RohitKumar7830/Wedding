import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { weddingGalleryData } from '@/data/data';
import { CalendarDays, MapPin, Users, IndianRupee, Image, Video } from 'lucide-react';

const WeddingGallery = () => {
  const [activeMedia, setActiveMedia] = useState(null);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Wedding Galleries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {weddingGalleryData.map((wedding) => (
          <Card key={wedding.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <img
                src={wedding.photos[0]}
                alt={`${wedding.coupleName} wedding`}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{wedding.coupleName}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    {formatDate(wedding.weddingDate)}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {wedding.location}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {wedding.guests} guests
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <IndianRupee className="w-4 h-4" />
                    💵{wedding.totalCharges.toLocaleString()}
                  </Badge>
                </div>
                <p className="text-gray-600 mb-4">{wedding.theme}</p>
                <Tabs defaultValue="photos">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="photos">Photos</TabsTrigger>
                    <TabsTrigger value="videos">Videos</TabsTrigger>
                  </TabsList>
                  <TabsContent value="photos" className="mt-4">
                    <div className="grid grid-cols-3 gap-2">
                      {wedding.photos.map((photo, index) => (
                        <Dialog key={index}>
                          <DialogTrigger>
                            <img
                              src={photo}
                              alt={`${wedding.coupleName} wedding photo ${index + 1}`}
                              className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity duration-300"
                              onClick={() => setActiveMedia({ type: 'image', src: photo })}
                            />
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            {activeMedia && activeMedia.type === 'image' && (
                              <img src={activeMedia.src} alt="Wedding photo" className="w-full" />
                            )}
                          </DialogContent>
                        </Dialog>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="videos" className="mt-4">
                    <div className="grid grid-cols-2 gap-2">
                      {wedding.videos.map((video, index) => (
                        <Dialog key={index}>
                          <DialogTrigger>
                            <div className="relative w-full h-24 bg-gray-200 rounded cursor-pointer hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center">
                              <Video className="w-8 h-8 text-gray-500" />
                            </div>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <video src={video} controls className="w-full" />
                          </DialogContent>
                        </Dialog>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WeddingGallery;