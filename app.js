import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

/* 
 - Header
   - logo
   - Nav-items
 - Body
   - Search Bar
   - Resto Container
       -Resto Card-cointainer
          - Img
          - Star Rating
          - Name of res
          - cuisine
          - Delivery time


*/

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://penji.co/wp-content/uploads/2024/01/1.-Grubhub.jpg'
        ></img>
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Restrocard = ({ name, cuisine, rating, time }) => {
  return (
    <div className='res-card'>
      <img
        className='res-logo'
        src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eohdm5sdnq6e2u46xeux'
      ></img>
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{time} </h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='restro-container'>
        <Restrocard
          name='Ajinkya Foods'
          cuisine='Pizza, Burger, Sandwitch'
          rating='4.7 stars'
          time='40 Minutes'
        />
        <Restrocard
          name='KFC'
          cuisine='Buger, cococola, Frenchfries'
          rating='4.8'
          time='20 Minutes'
        />
        <Restrocard />
        <Restrocard />
        <Restrocard />
        <Restrocard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
