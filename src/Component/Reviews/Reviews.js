import React from 'react';
import Review from './../Review/Review';

const Reviews = () => {
    const reviews =[
        {id:1, name:"Sogir", ratings:4.4, review:'this laptop in amazing,very bright screen'},
        {id:2, name:"kabir", ratings:4.6, review:'using this for two weeks now,really satisfied'},
        {id:3, name:"Abir", ratings:4.8, review:'battery backup is very nice.5 hours with full load'},
        {id:4, name:"Boshir", ratings:5.0, review:'great device for multitasking and gaming'},
       {id:5, name:"Moshiur", ratings:5.0, review:'got this today.packaging was very good'},
       {id:6, name:"Ziaur", ratings:4.2, review:'performance is  actually very good but the price is too much'},
   ];
 
    return (
        <div className='mt-5 container'>
            <div className='row g-2'>
               {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
               </div>
        </div>
    );
};

export default Reviews;