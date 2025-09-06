const PropertyCard = ({ service: property }) => {
  return (
    <div className="card max-w-[340px] shadow-sm bg-[#F1F1F1] h-full">
      <figure className="p-2">
        <img src={property.image} alt={property.title} className="rounded-xl" />
      </figure>

      {/* Make card-body a flex column with space-between */}
      <div className="card-body flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[#979797] mb-2">
            <div className="flex items-center gap-1">
              <img src={property.locationIcon} alt="location" />
              <p>{property.location}</p>
            </div>
            <div className="flex items-center gap-1">
              <img src={property.starIcon} alt="star" />
              <p>{property.rating}</p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-[#222222]">
            {property.title}
          </h2>
        </div>

        {/* Fixed bottom section */}
        <div className="card-actions flex items-center justify-between mt-4">
          <button className="btn btn-primary rounded-full px-8">Buy Now</button>
          <span className="text-xl text-[#222222]">{property.price}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
