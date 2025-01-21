import React from "react";

const Newscard = ({ title, imgUrl, description, url }) => {
  const defaultImage =
    "https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5ld3N8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="relative flex flex-col gap-2 sm:min-h-[420px] xs:min-h-[440px] lg:min-h-[380px] min-w-64 rounded-md px-4 py-3 max-w-sm bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Truncate long titles */}
      <h4
        className="text-base font-semibold text-left line-clamp-2"
        title={title} // Display full title on hover
      >
        {title}
      </h4>
      <img
        src={imgUrl || defaultImage}
        alt={title || "News Image"} 
        className="h-36 rounded-md"
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = defaultImage; 
        }}
      />
      <p className="text-sm text-[#495057]">{description}</p>
      <a href={url}>
        <button className="bg-[#22223b] w-28 absolute bottom-4 left-[50%] transform -translate-x-[50%] py-2 rounded-3xl text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          Read more
        </button>
      </a>
    </div>
  );
};

export default Newscard;
