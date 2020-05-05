import React, { useState } from 'react';

function Counter() {
    
    const [count, setCount] = useState(null);
  
    return (
      <div>
        <input 
        onChange={event => setCount (Number(event.target.value))} 
        placeholder="Set Counter" 
        type="number" 
        />
        <p>Le compteur est à : {count} </p>
        <button onClick={() => setCount(count + 1)}>
          +1
        </button>
        <button onClick={() => setCount(count - 1)}>
          -1
        </button>
      </div>
    );
  }

  export default Counter