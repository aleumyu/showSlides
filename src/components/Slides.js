import React, { useState } from 'react';

function Slides({ slides }) {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={() => setCounter(0)}
          disabled={counter === 0 ? true : false}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={() => setCounter(counter - 1)}
          disabled={counter === 0 ? true : false}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={() => setCounter(counter + 1)}
          disabled={counter === slides.length - 1 ? true : false}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[counter].title}</h1>
        <p data-testid="text">{slides[counter].text}</p>
      </div>
    </div>
  );
}

export default Slides;
