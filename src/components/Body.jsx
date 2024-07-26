import resList1 from "../utils/config";
import Restrocard from "./RestroCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState(resList1);

  useEffect(() => {
    console.log("use effect called");
  }, []);

  console.log("body Rendered");
  return (
    <div className='body'>
      <div className='filter'>
        <button
          className='filter_btn'
          onClick={() => {
            const filterList = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(restaurantList);
            setrestaurantList(filterList);
          }}
        >
          Top-Rated Restaurants
        </button>
      </div>
      <div className='restro-container'>
        {restaurantList.map((info) => (
          <Restrocard key={info.info.id} resData={info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
