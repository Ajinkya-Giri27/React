import { CDN_URL } from "../utils/config";

const Restrocard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, costForTwo, avgRating, cuisines } =
    resData?.info;
  return (
    <div className='res-card'>
      <img className='res-logo' src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h6>{cuisines.join(", ")}</h6>
      <h6>{costForTwo}</h6>
      <h6>{avgRating} Rating </h6>
      {/* <h6>{resData.info.deliveryTime} Minutes</h6> */}
    </div>
  );
};

export default Restrocard;
