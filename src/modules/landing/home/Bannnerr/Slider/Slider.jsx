"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  {
    id: 1,
    img: "https://picsum.photos/1200/500?random=1",
    alt: "Property 1",
  },
  {
    id: 2,
    img: "https://picsum.photos/1200/500?random=2",
    alt: "Property 2",
  },
  {
    id: 3,
    img: "https://picsum.photos/1200/500?random=3",
    alt: "Property 3",
  },
];

export default function HeroCarousel() {
  return (
    <div className="relative h-[40vh] w-full rounded-3xl">
      {/* Carousel */}
      <Carousel
        infiniteLoop
        autoPlay
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={4000}
        className="h-full rounded-3xl"
      >
        {slides.map((slide) => (
          <div key={slide.id} className="h-[40vh] rounded-3xl">
            <img
              src={slide.img}
              alt={slide.alt}
              className="object-covef h-full w-full rounded-3xl"
            />
          </div>
        ))}
      </Carousel>

      {/* Transparent Overlay */}
      <div className="absolute inset-0  bg-black/60 flex  items-cente justify-center rounded-3xl text-white">
        <div>
          <div className="text-center space-y-4 border">
            <h2 className="text-2xl font-semibold">
              Find Your Dream Home in One Click!
            </h2>

            <p className=" text-sm md:text-base">
              Discover, Buy, or Rent Verified Properties with Ease.
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search properties..."
              className="px-4 py-2 rounded-lg border border-gray-400 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
