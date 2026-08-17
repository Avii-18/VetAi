const Card = ({ heading, imgSrc, paragraph, icon, children }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer transform hover:scale-[1.03]">
    <div className="overflow-hidden">
      <img
        src={imgSrc}
        alt={heading}
        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h4 className="text-lg font-semibold mb-2 text-gray-900">{heading}</h4>
      <p className="text-gray-700 mb-4 line-clamp-3">{paragraph}</p>
      <div className="flex items-center justify-between text-teal-600 font-semibold">
        {icon}
        <div>{children}</div>
      </div>
    </div>
  </div>
);

export default Card;
