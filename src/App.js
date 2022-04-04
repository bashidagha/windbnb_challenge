import "./App.scss";
import Navbar from "./components/Navbar";
import Homes from "./components/Homes";
import { useState, useEffect } from "react";

function App() {
  const [homes, setHomes] = useState("");

  useEffect(() => {
    //fake API Created via mocki
    fetch("https://mocki.io/v1/e02342ba-c005-479b-912c-816aabb52552")
      .then((response) => response.json())
      .then((json) => setHomes(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>

      


      <Navbar />
      <main className="container">
        <div className="title d-flex justify-content-between w-100 align-items-center">
          <h1>Stays in Finland</h1> <p>12+ stays</p>
        </div>
        <Homes homes={homes} />
      </main>
      <p className="w100 footer_text text-center">
        created by&nbsp;
        <a href="https://github.com/bashidagha" style={{ fontWeight: "700" }}>bashidagha</a> -{" "}
        <a href="https://devchallenges.io/">devChallenges.io</a>
      </p>
    </div>
  );
}

export default App;
