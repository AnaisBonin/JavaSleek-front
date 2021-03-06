import React, { useState } from 'react';
// import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header.jsx"
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import './Home.css';
import painting from '../../assets/images/painting.jpg'
import Shelf from '../../assets/images/Shelf.jpg'
import WoodenFloor from '../../assets/images/WoodenFloor.jpg'
import kitchen from '../../assets/images/kitchen.jpg'
import bathroom from '../../assets/images/bathroom.jpg'
import carpentry from '../../assets/images/carpentry.jpg'
import garden from '../../assets/images/garden.jpg'
import { Link } from "react-router-dom";

const Home = () => {
  // const history = useHistory();

  const [term, setTerm] = useState("");
  const handleChange = (event) => setTerm(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // /\d/.test(term)
      // ? history.push(`/Product/${term}`)
      // : history.push(`/ProductList/${term}`);
  };

  return <main>
    <div className='recipes-all'>
      
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <h1>Choose your daily recipes</h1>
      <div className='daily-recipes'>
        <div className='recipes'>
          <Link to="/project/29">
            <img
              className='recipes-img'
              src={painting}
              alt='recipes-img'/>
            <p>Painting</p>
          </Link>
        </div>
        <div className='recipes'>
          <Link to="/project/28">
            <img
              className='recipes-img'
              src={Shelf}
              alt='recipes-img'/>
            <p>Shelf</p>
          </Link>
        </div>
        <div className='recipes'>
          <Link to="/project/30">
            <img
              className='recipes-img'
              src={WoodenFloor}
              alt='recipes-img'/>
            <p>Wooden Floor</p>
          </Link>
        </div>
      </div>
      <h1>Choose your project</h1>
      <div className='productClass'>
        <div className='product'>
        {/* <Link to=""> */}
          <img
            className='product-img'
            src={kitchen}
            alt='kitchen'/>
          <p>Kitchen</p>
        {/* </Link> */}
        </div>
        <div className='product'>
        {/* <Link to=""> */}
          <img
            className='product-img'
            src={bathroom}
            alt='bathroom'/>
          <p>Bathroom</p>
        {/* </Link> */}
        </div>
        <div className='product'>
        {/* <Link to=""> */}
        <img
            className='product-img'
            src={carpentry}
            alt='carpentry'/>
          <p>Carpentry</p>
        {/* </Link> */}
        </div>
        <div className='product'>
        {/* <Link to=""> */}
        <img
            className='product-img'
            src={garden}
            alt='garden'/>
          <p>Garden</p>
        {/* </Link> */}   
        </div>             
        </div>
    </div>
  </main>;
};

export default Home;
