import { useEffect, useState } from 'react';
import reviews from './data';

const App = () => {
  const [index, setIndex] = useState(1);
  const [person, setPerson] = useState({});

  const findPerson = () => {
    setPerson(reviews.find((review) => review.id === index));
  };

  useEffect(() => {
    findPerson();
  }, []);

  return (
    <main>
      <section>
        <h2>{person.name}</h2>
        <p>{person.job}</p>,
        <img src={person.image} alt={person.name} width={'50px'} />
        <p>{person.text}</p>
        <button>anterior</button>
        <button>seguinte</button>
      </section>
    </main>
  );
};
export default App;
