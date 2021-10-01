import React from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = (props) => {
  const { name, job, image, text} = props.review; 
  return (
  <React.Fragment>
   <article className="review">
       <div className="img-container">
         <img src={image} alt={name} className="person-img" />
         <span className="quote-icon">
           <FaQuoteRight />
           </span>
       </div>
         <h4 className="author">{name}</h4>
         <p className="job">{job}</p>
         <p className="info">{text}</p>
         <div className="div">
         <FaChevronLeft className='prev-btn' onClick={props.prev}/>
         <FaChevronRight className='next-btn' onClick={props.next}/>
         </div>
         <button className="random-btn" onClick={props.rand}>surprise me</button>
      </article>
  </React.Fragment>
  );
};

export default Review;
