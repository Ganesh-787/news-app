import React, { useContext } from "react";
import Newscard from "./Newscard";
import { Context } from "../Context";

const Newsboard = () => {
  const { response, loading } = useContext(Context);

  return loading ? (
    <div className="flex justify-center items-center h-screen bg-gray-50">
    <div className="flex space-x-2">
      <div className="w-4 h-4 bg-gray-800 rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-gray-800 rounded-full animate-bounce delay-200"></div>
      <div className="w-4 h-4 bg-gray-800 rounded-full animate-bounce delay-400"></div>
    </div>
  </div>
  ) : (
    <div className="p-10 py-20 grid grid-cols-4 gap-8 flex-wrap xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {response.map((item, i) => (
        <Newscard
          key={i}
          title={item.title}
          imgUrl={item.urlToImage}
          description={item.description}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default Newsboard;
