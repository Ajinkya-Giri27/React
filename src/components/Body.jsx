import resList1 from "../utils/config";
import Restrocard from "./RestroCard";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState(resList1);

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
        {restaurantList.map((info, i) => (
          <Restrocard key={info.info.id} resData={info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
