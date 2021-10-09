// import { useState } from 'react';

const CheckBoxes = () => {
  //   const [seatsShown, setSeatsShown] = useState([]);

  let seats = ['Available', 'Occupied', 'All'];

  return (
    <div className="checkbox-flexbox">
      <p className="title">Showing:</p>
      <div className="seat-display-checkbox-list">
        {seats.map((result) => (
          <div>
            <input type="radio" value={result} name="seats" />
            <b style={{ fontWeight: 700, marginRight: '15px' }}>{result}</b>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckBoxes;
