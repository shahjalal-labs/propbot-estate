import location from "./locationIcon.png";
import star from "./starIcon.png";
const Services = () => {
  return (
    <div>
      <h1>Services</h1>
      <div className="card  max-w-[340px] shadow-sm bg-[#F1F1F1]">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="text-[#979797]">
            <div className="flex items-center gap-1">
              <img src={location} alt="location" />
              <p>New York, NY</p>
            </div>
            <div className="flex items-center gap-1">
              <img src={star} alt="star" />
              <p>4.5/5</p>
            </div>
          </div>
          <h2 className="card-title">
            Card Title
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
