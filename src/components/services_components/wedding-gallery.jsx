import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { weddingGalleryData } from '@/data/data';
import { CalendarDays, MapPin, Users, IndianRupee, Play } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {weddingGalleryData.map((wedding) => (
          <Card key={wedding.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={wedding.photos[0]}
                  alt={`${wedding.coupleName} wedding`}
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{wedding.coupleName}</h3>
                <ScrollArea className="h-24 mb-4">
                  <div className="flex flex-wrap gap-2">
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
                      {wedding.totalCharges.toLocaleString()}
                    </Badge>
                  </div>
                </ScrollArea>
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
                            <AspectRatio ratio={1}>
                              <img
                                src={photo}
                                alt={`${wedding.coupleName} wedding photo ${index + 1}`}
                                className="w-full h-full object-cover rounded cursor-pointer hover:opacity-80 transition-opacity duration-300"
                                onClick={() => setActiveMedia({ type: 'image', src: photo })}
                              />
                            </AspectRatio>
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
                            <AspectRatio ratio={16 / 9}>
                              <div className="relative w-full h-full bg-gray-200 rounded cursor-pointer hover:bg-gray-300 transition-colors duration-300 overflow-hidden">
                                <img
                                  src={video.thumbnail}
                                  alt={`Video thumbnail ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                                  <Play className="w-12 h-12 text-white" />
                                </div>
                              </div>
                            </AspectRatio>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <video src={video.url} controls className="w-full" />
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