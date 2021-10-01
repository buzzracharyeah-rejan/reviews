import React, {useState} from 'react';
import Review from './Review';
import data from './data';
function App() {
  const [reviews, setReviews] = useState(data);
  const [index, setIndex] = useState(0);
  const checkNumber = number => {
    if (number < 0 ) {
      return reviews.length - 1;
    }
    if(number > reviews.length - 1) {
      return 0;
    }
    return number;

  }
  const prevPerson = () => {
    setIndex(prevValue => {
      let newValue = checkNumber(prevValue + 1);
      return newValue;
    });
  }; 
  const nextPerson = () => {
    setIndex(prevValue => {
      let newValue = checkNumber(prevValue - 1);
      return newValue;
    });
  }

  const randomPerson = () => {
    const len = reviews.length - 1; 
    setIndex(prevValue => {
      let index = Math.floor(Math.random() * (len - 0 + 1) + 0);
      // console.log(`prevValue`, prevValue);
      // console.log(`index`, index);
      if(prevValue === index) {
        return checkNumber(index + 1);
      }
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
