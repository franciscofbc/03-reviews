import { useEffect, useState } from 'react';
import reviews from './data';
import { FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const [review, setReview] = useState({});

  const findReview = (index) => {
    setReview(reviews[index]);
  };

  const previous = () => {
    if (index === 0) {
      setIndex(reviews.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  const next = () => {
    if (index < reviews.length - 1) {
      setIndex(index + 1);
      return;
    }
    setIndex(0);
  };

  const surprise = () => {
    // Math.random() * (max - min) + min;
    setIndex(Math.round(Math.random() * (reviews.length - 1 - 0) + 0));
  };

  useEffect(() => {
    findReview(index);
  }, [index]);

  return (
    <main>
      <section className="container">
        <div className="img-complete">
          <div className="img-back"></div>
          <img src={review.image} alt={review.name} className="img avatar" />
          <span className="quote">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="name">{review.name}</h4>
        <p className="job">{review.job}</p>
        <p className="text-review">{review.text}</p>
        <div>
          <button onClick={previous} className="btn btn-pre-next">
            &lt;
          </button>
          <button onClick={next} className="btn btn-pre-next">
            &gt;
          </button>
        </div>
        <button onClick={surprise} className="btn btn-hipster">
          surprise me
        </button>
      </section>
    </main>
  );
};
export default App;
