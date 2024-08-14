import { ReviewCarousel } from '@/components/Review'
import { Button } from "@/components/ui/button";

export const Stories = () => {
  return (
    <div className="space-y-16 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="flex-grow border-t-2 border-gray-300"></div>
          <h2 className="px-4 text-3xl md:text-4xl font-serif text-center">We Create Stories</h2>
          <div className="flex-grow border-t-2 border-gray-300"></div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <ReviewCarousel />
      </div>

      <div className="relative  h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Wedding"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-40">
          <h3 className="text-3xl md:text-5xl font-serif mb-4 px-4">
            Make your wedding dreams come true
          </h3>
          <p className="text-lg md:text-xl mb-8 px-4 max-w-2xl">
            We will take care of everything for you — from event planning and curation to design and production
          </p>
          <Button size="lg" variant="secondary" className="font-semibold transition-all hover:bg-black hover:text-white duration-800 ease-in-out  ">
            GET IN TOUCH
          </Button>
        </div>
      </div>
    </div>
  )
}