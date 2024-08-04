import { imagesData } from '@/data/data';

export const ImageGallery = () => {
  return (

    <div className="container mx-auto px-4 py-8 w-full h-full">
      <div className="grid grid-cols-1 feature:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imagesData.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <img
              loading='lazy'
              src={image.src}
              alt={image.alt || "Gallery Image"}
              className="w-full h-64 object-cover object-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                {image.caption}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};