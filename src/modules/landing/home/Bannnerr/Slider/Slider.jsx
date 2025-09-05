"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SearchInput from "../../../../../components/SearchInput";

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
      <div className="absolute inset-0  bg-black/60 flex  items-cente justify-center rounded-3xl text-white py-10 border border-red-500">
        <div>
          <div className="text-center space-y-4 border">
            <h2 className="text-2xl font-black">
              Find Your Dream Home in One Click!
            </h2>

            <p className=" text-sm md:text-base">
              Discover, Buy, or Rent Verified Properties with Ease.
            </p>
          </div>
          <div className="flex  items-center gap-4 justify-between border border-green-500 w-full">
            <SearchInput />
            <button className="badge w-fit rounded-full  px-3 py-4 ">
              List Your Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
