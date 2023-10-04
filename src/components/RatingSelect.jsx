import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function RatingSelect({ select }) {
  const { feedbackEdit } = useContext(FeedbackContext);
  const [selected, setSelected] = useState(10);
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    //console.log(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      console.log('Rating Selected on Edit');
      setSelected(feedbackEdit.item.rating);
    }
    // Perform side effects here
  }, [feedbackEdit]); // Dependency array can control when the effect runs

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
      <li>
        <input
          type="radio"
          id="num11"
          name="rating"
          value="11"
          onChange={handleChange}
          checked={selected === 11}
        />
        <label htmlFor="num11">11</label>
      </li>
    </ul>
  );
}

export default RatingSelect;
