import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [fact, setFact] = useState();
  const fetchFact = async () => {
    const res = await fetch("https://meowfacts.herokuapp.com");

    const data = await res.json();
    console.log("🚀 ~ data:", data);

    setFact(data.data[0]);
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Deployed my first application 🥳🥳🥳🥳🥳</h1>
      <h1>Application running by docker</h1>
      <div className="card">
        <h3>{fact}</h3>
        <button onClick={fetchFact}>Fetch Fact</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
