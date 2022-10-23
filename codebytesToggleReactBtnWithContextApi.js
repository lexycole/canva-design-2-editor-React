import React, { useState } from 'react';
import ReactDOM from 'react-dom';


function Toggle() {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>
                {toggle ? 'ON' : 'OFF'}
            </button>
            {toggle && <h1>ON</h1>}
        </div>
    );
}
//   function handleClick() {
//       setShow(!show);
//       console.log(show);
//   }
//     // todo


ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);