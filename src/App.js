import React, {useState} from 'react';
import Review from './Review';
import data from './data';
function App() {
  const [reviews, setReviews] = useState(data);
  let [index, setIndex] = useState(0);
  const prevPerson = () => {
    if(index > 0) {
      setIndex(prevValue => {
        return prevValue - 1;
      });
    }
  }; 
  const nextPerson = () => {
    if(index < reviews.length - 1) {
      setIndex(prevValue => {
        return prevValue + 1;
      });

    }
  }

  const randomPerson = () => {
    const len = reviews.length - 1; 
    setIndex(prevValue => {
      const index = Math.floor(Math.random() * (len - 0 + 1) + 0);
      return index;
    });
  } 

  const review = () => {
    return reviews[index];
  }
  return (
    <main>
      <section className="container">
        <div className="title">
        <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
       <Review review={review()} prev={prevPerson} next={nextPerson} rand={randomPerson}/>
      </section>
    </main>
    
    )
}

export default App;
