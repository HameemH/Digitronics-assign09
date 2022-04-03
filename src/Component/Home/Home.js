import React from 'react';
import './Home.css'

const Home = () => {
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
                <h1>Reviews</h1>
            </div>
            
        </div>
    );
};

export default Home;