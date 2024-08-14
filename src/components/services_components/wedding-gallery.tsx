import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { weddingGalleryData } from '@/data/data';
import { CalendarDays, MapPin, Users, IndianRupee, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const WeddingGallery = () => {
  const formatDate = (dateString: string) => {
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
                    <Carousel className="w-full">
                      <CarouselContent className="-ml-2 md:-ml-4">
                        {wedding.photos.map((photo, index) => (
                          <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4">
                            <Dialog>
                              <DialogTrigger asChild>
                                <AspectRatio ratio={1} className="cursor-pointer">
                                  <img
                                    src={photo}
                                    alt={`${wedding.coupleName} wedding photo ${index + 1}`}
                                    className="w-full h-full object-cover rounded hover:opacity-80 transition-opacity duration-300"
                                  />
                                </AspectRatio>
                              </DialogTrigger>
                              <DialogContent className="max-w-3xl">
                                <img src={photo} alt="Wedding photo" className="w-full" />
                              </DialogContent>
                            </Dialog>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2 bg-white/80 hover:bg-white hover:scale-125 ease-in-out duration-200 transition flex items-center justify-center">
                        <ChevronLeft className="w-6 h-6 hover:scale-125" />
                      </CarouselPrevious>
                      <CarouselNext className="right-2 bg-white/80 hover:bg-white hover:scale-125 ease-in-out duration-200 transition flex items-center justify-center">
                        <ChevronRight className="w-6 h-6 hover:scale-125" />
                      </CarouselNext>
                    </Carousel>
                  </TabsContent>
                  <TabsContent value="videos" className="mt-4">
                    <Carousel className="w-full">
                      <CarouselContent className="-ml-2 md:-ml-4">
                        {wedding.videos.map((video, index) => (
                          <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4">
                            <Dialog>
                              <DialogTrigger asChild>
                                <AspectRatio ratio={1} className="cursor-pointer group">
                                  <div className="relative w-full h-full overflow-hidden rounded">
                                    <img
                                      src={video.thumbnail}
                                      alt={`Video thumbnail ${index + 1}`}
                                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                                      <Play className="w-8 h-8 feature:h-12 feature:w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100" />
                                    </div>
                                  </div>
                                </AspectRatio>
                              </DialogTrigger>
                              <DialogContent className="max-w-3xl">
                                <video src={video.url} controls className="w-full" />
                              </DialogContent>
                            </Dialog>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2 bg-white/80 hover:bg-white hover:scale-125 ease-in-out duration-200 transition flex items-center justify-center">
                        <ChevronLeft className="w-6 h-6 hover:scale-125" />
                      </CarouselPrevious>
                      <CarouselNext className="right-2 bg-white/80 hover:bg-white hover:scale-125 ease-in-out duration-200 transition flex items-center justify-center">
                        <ChevronRight className="w-6 h-6 hover:scale-125" />
                      </CarouselNext>
                    </Carousel>
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