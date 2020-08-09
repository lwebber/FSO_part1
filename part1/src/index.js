import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  console.log('Hello from component')
  const now = new Date();
  const a = 10
  const b = 20
  return (
    <div>
      <p>Hello world, it is now {now.toString()}</p>
      <p>{a} plus {b} = {a + b}</p>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
