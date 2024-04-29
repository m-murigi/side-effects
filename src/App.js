import { useEffect, useState } from "react";

// import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //fetching data from the server using an Api
    //Avoid using network requests
    fetch("http://jsonplaceholder.typicode.com/todos/2")
      //awaiting the response
      .then((res) => res.json())
      .then((data) => console.log(data));
    // the empty array is put to say only run useEffect once the page loads
  }, []);
  // console.log("Use effect has run"),[])

  return (
    <div className="App">
      <h1>React useEffect</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>

      <p>{count}</p>
    </div>
  );
}

export default App;
