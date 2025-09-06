import ServiceCard from "./ServiceCard";
import location from "./locationIcon.png";
import star from "./starIcon.png";
import serviceImage1 from "./serviceImage1.png";
import serviceImage2 from "./serviceImage2.png";
import serviceImage3 from "./serviceImage3.png";
import serviceImage4 from "./serviceImage4.png";

const services = [
  {
    id: 1,
    title: "Spacious 3BHK apartment in a prime location with modern amenities.",
    location: "New York, NY",
    rating: "4.5/5",
    price: "$450,000",
    image: serviceImage1,
    locationIcon: location,
    starIcon: star,
  },
  {
    id: 2,
    title: "Luxury villa with a private pool and garden.",
    location: "Los Angeles, CA",
    rating: "4.8/5",
    price: "$1,200,000",
    image: serviceImage2,
    locationIcon: location,
    starIcon: star,
  },
  {
    id: 3,
    title: "Modern studio apartment near downtown.",
    location: "Chicago, IL",
    rating: "4.3/5",
    price: "$320,000",
    image: serviceImage3,
    locationIcon: location,
    starIcon: star,
  },
  {
    id: 4,
    title: "Cozy 2BHK apartment with great city views.",
    location: "Miami, FL",
    rating: "4.6/5",
    price: "$600,000",
    image: serviceImage4,
    locationIcon: location,
    starIcon: star,
  },
];

const Services = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-sm:justify-items-center">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
