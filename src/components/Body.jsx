import resList1 from "../utils/config";
import Restrocard from "./RestroCard";

const Body = () => {
  return (
    <div className='body'>
      <div className='filter'>
        <button className='filter_btn'>Top-Rated Restaurants</button>
      </div>
      <div className='restro-container'>
        {resList1.map((info) => (
          <Restrocard key={info.info.id} resData={info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
