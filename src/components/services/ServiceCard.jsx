const ServiceCard = ({ service }) => {
  return (
    <div className="card max-w-[340px] shadow-sm bg-[#F1F1F1] h-full">
      <figure className="p-2">
        <img src={service.image} alt={service.title} className="rounded-xl" />
      </figure>

      {/* Make card-body a flex column with space-between */}
      <div className="card-body flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[#979797] mb-2">
            <div className="flex items-center gap-1">
              <img src={service.locationIcon} alt="location" />
              <p>{service.location}</p>
            </div>
            <div className="flex items-center gap-1">
              <img src={service.starIcon} alt="star" />
              <p>{service.rating}</p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-[#222222]">
            {service.title}
          </h2>
        </div>

        {/* Fixed bottom section */}
        <div className="card-actions flex items-center justify-between mt-4">
          <button className="btn btn-primary rounded-full px-8">Buy Now</button>
          <span className="text-xl text-[#222222]">{service.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
