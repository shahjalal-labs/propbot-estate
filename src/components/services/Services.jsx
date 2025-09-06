import location from "./locationIcon.png";
import star from "./starIcon.png";
const Services = () => {
  return (
    <div>
      <h1>Services</h1>
      <div className="card  max-w-[340px] shadow-sm bg-[#F1F1F1]">
        <figure className="p-2 border rounded-xl">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between text-[#979797]">
            <div className="flex items-center gap-1">
              <img src={location} alt="location" />
              <p>New York, NY</p>
            </div>
            <div className="flex items-center gap-1">
              <img src={star} alt="star" className="" />
              <p>4.5/5</p>
            </div>
          </div>
          <h2 className="card-title">
            Card Title Spacious 3BHK apartment in a prime location with modern
            amenities.
          </h2>
          <div className="card-actions items-center justify-between">
            <button className="btn btn-primary rounded-full px-8 ">
              Buy Now
            </button>
            <span className="text-exl text-black">$450,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
