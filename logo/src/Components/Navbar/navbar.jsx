import React from 'react';
import './navbar.css';
import { toggleFilter } from './navbar.js';


import Search from '../Assets/Searchicon.png';
import Wish from '../Assets/wishlist icon.png';
import Shop from '../Assets/shop icon.png';
import Login from '../Assets/login icon.png';
import Eng from '../Assets/English icon.png';
import bag1 from '../Assets/bag1.jpg';
import bag2 from '../Assets/bag2.jpg';
import bag3 from '../Assets/bag3.jpg';
import bag4 from '../Assets/bag4.jpg';
import bag5 from '../Assets/bag5.jpg';
import bag6 from '../Assets/bag6.jpg';
import bag7 from '../Assets/bag7.jpg';
import insta from '../Assets/insta.png';
import link from '../Assets/linkdln.png';
import master from '../Assets/Master.png';
import gpay from '../Assets/gpay.png';
import apple from '../Assets/applepay.png';
import american from '../Assets/american.png';
import flag from '../Assets/flag.png';

const navbar = () => {
  return (
    <div>
    
      <div className="top-bar">
        <span className="filter-toggle" onClick={toggleFilter}>&#9776; FILTER</span>
        <span className="items-count">3425 ITEMS</span>
        <span className="hide-filter" onClick={toggleFilter}>HIDE FILTER</span>
      </div>

      <div id="filter-sidebar" className="filter-sidebar">
        <div className="filter-group">
          <label className="checkbox-container">
            <input type="checkbox"/> CUSTOMIZABLE
          </label>
        </div>

        <div className="filter-group dropdown">
          <div className="dropdown-toggle">IDEAL FOR</div>
          <ul className="dropdown-content">
            <li><label className="checkbox-container"><input type="checkbox"/> Men</label></li>
            <li><label className="checkbox-container"><input type="checkbox"/> Women</label></li>
            <li><label className="checkbox-container"><input type="checkbox"/> Baby & Kids</label></li>
          </ul>
        </div>

        
        <div className="filter-group dropdown">
         <button><div className="dropdown-toggle">OCCASION</div></button> 
          <ul className="dropdown-content">
            
          </ul>
        </div>
        <div className="filter-group dropdown">
         <button><div className="dropdown-toggle">WORK</div></button> 
          <ul className="dropdown-content">
            
          </ul>
        </div>
        <div className="filter-group dropdown">
        <button><div className="dropdown-toggle">FABRIC</div></button>
          <ul className="dropdown-content">
            
          </ul>
        </div>
        <div className="filter-group dropdown">
        <button> <div className="dropdown-toggle">SEGMENT</div></button>
          <ul className="dropdown-content">
            
          </ul>
        </div>
        <div className="filter-group dropdown">
          <button><div className="dropdown-toggle">SUITABLE FOR</div></button>
          <ul className="dropdown-content">
            
          </ul>
        </div>
        <div className="filter-group dropdown">
        <button> <div className="dropdown-toggle">RAW MATERIAL</div></button>
          <ul className="dropdown-content">
            
          </ul>
        </div>
        <div className="filter-group dropdown">
        <button><div className="dropdown-toggle">PATTERN</div></button>
          <ul className="dropdown-content">
           
          </ul>
        </div>
      </div>
    


       
    



<div class="topnav">
   <div class="logo-button">
    <div class="logo">
       <p>LOGO</p>
    </div>
    

    


    <div class="bnav">
        <a href="#shop">SHOP</a>
        <a href="#skills">SkILLS</a>
        <a href="#stories">STORIES</a>
        <a href="#about">ABOUT</a>
        <a href="#contact us">CONTACT US</a>
    </div>
   </div>
    <div class="icon-container">
        <a href="#search">
            <img src={Search} alt="Search"/>
        </a>
        <a href="#wish">
            <img src={Wish} alt="wish"/>
        </a>
        <a href="#shop">
            <img src={Shop} alt="shop"/>
        </a>
        <a href="#login">
            <img src={Login} alt="login"/>
        </a>
            <a href="#Eng">
                <img src={Eng} alt="Language"/>
            </a>
           
         
    </div>
</div>
<div class="intro">
    <h1>DISCOVER OUR PRODUCTS</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A eum deleniti modi unde temporibus quaerat mollitia quis? Vitae saepe eos sapiente </p>
</div>






<div class="main-content">
    <div class="product-grid">
    <div class="product-box">
            <img src={bag6} alt="Product 2"/>
            <h2>Keywest</h2>
            <p>₹775</p>
            <button>Add to Cart</button>
        </div>
       
        <div class="product-box">
            <img src={bag1}alt="Product 1"/>
            <h2>PPXOC MILKYWAY DRESS IN</h2>
            <p>₹260</p>
            <button>Add to Cart</button>
        </div>
       
        <div class="product-box">
            <img src={bag2} alt="Product 2"/>
            <h2>Isle Locada by Hidesign</h2>
            <p>₹399.00</p>
            <button>Add to Cart</button>
        </div>
        <div class="product-box">
            <img src={bag7} alt="Product 2"/>
            <h2>SXF SPEED X FASHION</h2>
            <p>₹609 </p>
            <button>Add to Cart</button>
        </div>
        
        <div class="product-box">
            <img src={bag3} alt="Product 2"/>
            <h2>Miraggio</h2>
            <p>₹3,399</p>
            <button>Add to Cart</button>
        </div>
        <div class="product-box">
            <img src={bag4} alt="Product 2"/>
            <h2>EXOTIC</h2>
            <p>₹1,376</p>
            <button>Add to Cart</button>
        </div>
        <div class="product-box">
            <img src={bag5} alt="Product 2"/>
            <h2>Fostelo</h2>
            <p>₹569</p>
            <button>Add to Cart</button>
        </div>
        <div class="product-box">
            <img src={bag1}alt="Product 1"/>
            <h2>PPXOC MILKYWAY DRESS IN</h2>
            <p>₹260</p>
            <button>Add to Cart</button>
        </div>
        <div class="product-box">
            <img src={bag1}alt="Product 1"/>
            <h2>PPXOC MILKYWAY DRESS IN</h2>
            <p>₹260</p>
            <button>Add to Cart</button>
        </div>
        <div class="product-box">
            <img src={bag6} alt="Product 2"/>
            <h2>Keywest</h2>
            <p>₹775</p>
            <button>Add to Cart</button>
        </div>
        <div class="product-box">
            <img src={bag7} alt="Product 2"/>
            <h2>SXF SPEED X FASHION</h2>
            <p>₹609 </p>
            <button>Add to Cart</button>
        </div>
        
        <div class="product-box">
            <img src={bag3} alt="Product 3"/>
            <h2>creeper</h2>
            <p>₹482</p>
            <button>Add to Cart</button>
        </div>
       
    </div>
</div>


<footer>
        <div class="footer-container">
            <div class="footer-section subscribe">
                <h3>BE THE FIRST TO KNOW</h3>
                <p>Sign up for updates from mettà muse.</p>
                <form>
                    <input type="email" placeholder="Enter your e-mail..." required/>
                    <button type="submit">SUBSCRIBE</button>
                </form>
            </div>

            <div class="footer-section contact">
                <h3>CONTACT US</h3>
                <p>+44 221 133 5360</p>
                <p>customercare@mettamuse.com</p>
                <h3>CURRENCY</h3>
                <p><img src={flag} alt="indian Flag"/> INR</p>
                <p>Transactions will be completed in Euros and<br/> a currency reference is available on hover.</p>
            </div>

            <div class="footer-section links">
                <h3>mettà muse</h3>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Stories</a></li>
                    <li><a href="#">Artisans</a></li>
                    <li><a href="#">Boutiques</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">EU Compliances Docs</a></li>
                </ul>
            </div>

            <div class="footer-section quick-links">
                <h3>QUICK LINKS</h3>
                <ul>
                    <li><a href="#">Orders & Shipping</a></li>
                    <li><a href="#">Join/Login as a Seller</a></li>
                    <li><a href="#">Payment & Pricing</a></li>
                    <li><a href="#">Return & Refunds</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                </ul>
            </div>

            <div class="footer-section-social">
                <h3>FOLLOW US</h3>
                <p>
                    <a href="#"><img src={insta} alt="Instagram"/></a>
                    <a href="#"><img src={link} alt="LinkedIn"/></a>
                </p>
                <h3>mettà muse ACCEPTS</h3>
                <p>
                    <img src= {gpay} alt="gpay"/>
                    <img src={master} alt="Mastercard"/>
                    <img src={apple} alt="American Express"/>
                    <img src={american}alt="Apple Pay"/>
                </p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 mettà muse. All rights reserved.</p>
        </div>
    </footer>

</div>
 

    
  );

  
}


export default navbar;