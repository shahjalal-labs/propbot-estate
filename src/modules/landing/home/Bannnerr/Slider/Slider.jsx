import slide1 from "./slider1.png";
import slider2 from "./slider2.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SearchInput from "../../../../../components/SearchInput";

const slides = [
  {
    id: 1,
    img: slide1,
    alt: "Property 1",
  },
  {
    id: 2,
    img: slider2,
    alt: "Property 2",
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
      <div className="absolute inset-0  bg-black/20 flex   justify-center rounded-3xl text-white py-10 border border-red-500 p-8">
        <div className=" w-full">
          <div className="text-center space-y-2 border">
            <h2 className="text-2xl font-black max-sm:text-xl">
              Find Your Dream Home in One Click!
            </h2>

            <p className=" text-sm md:text-base">
              Discover, Buy, or Rent Verified Properties with Ease.
            </p>
          </div>
          <div className="md:flex  items-center gap-4 justify-around border border-green-500 w-full flex-1 pt-8 sm:pt-44 max-md:px-8">
            <SearchInput />
            <button className="badge w-fit rounded-full  px-3 py-4 max-md:mt-2">
              List Your Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
