import { Button } from 'bootstrap';
import React from 'react';

import Review from '../Review/Review'

import './Home.css'
import { Link } from 'react-router-dom';


const Home = () => {
    const reviews =[
         {id:1, name:"Sogir", ratings:4.4, review:'this laptop in amazing,very bright screen'},
         {id:2, name:"kabir", ratings:4.6, review:'using this for two weeks now,really satisfied'},
         {id:3, name:"Abir", ratings:4.8, review:'battery backup is very nice.5 hours with full load'},
         {id:4, name:"Boshir", ratings:5.0, review:'great device for multitasking and gaming'},
        {id:5, name:"Moshiur", ratings:5.0, review:'got this today.packaging was very good'},
        {id:6, name:"Ziaur", ratings:4.2, review:'performance is  actually very good but the price is too much'},
    ];
  
   
    return (
        <div className='container'>
            <div className="container row mt-5 ">
              <div className="text-section col-6 ">
                    <h1>Your Next </h1>
                    <h1>Productivity Beast</h1>
                    <p>In the new world of web3 and crypto and new other new technology,you really need to keep up with that race.And for that we have the best device for you.</p>
              </div>
              <div className="img-section col-6 ">
                  <img src="https://lappyvalley.com/wp-content/uploads/2021/08/61OvV27-44L._AC_SL1500_.jpg" alt="" />
              </div>
            </div>
            <div className="review-container mt-5">
                <h1 className='mb-3'>Reviews</h1>
               <div className='row g-2'>
               {
                    reviews.slice(0,3).map(review => <Review key={review.id} review={review}></Review>)
                }
               </div>
           <Link to='/reviews' >
           <button className='btn btn-success mt-5'> See all Reviews</button>
           </Link>
            </div>
            
        </div>
    );
};

export default Home;