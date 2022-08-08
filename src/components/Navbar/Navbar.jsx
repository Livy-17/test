import React from 'react';
import "./Navbar.css";
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className='Navbar--container'>
      <div className='Navbar--upper'>
        <div className='logo--container'>
          <p className='MUJI--logo'>MUJI</p>
        </div>
        <div className='icons--container'>
          <AiOutlineUser size='35px' />
          <AiOutlineHeart size='35px' />
          <BsCart size='35px' />
        </div>
      </div>
      <div className='divider'></div>
      <div className='Navbar--lower'>
        <p>Garments and Accessories</p>
        <p>Furniture</p>
        <p>Storage</p>
        <p>Home Living</p>
        <p>Stationery</p>
        <p>Beauty &#38; Skincare</p>
        <p>Travel</p>
        <p>Food</p>
        <p>Sale</p>
      </div>
      <div className='divider'></div>
    </div>
  )
};

export default Navbar;