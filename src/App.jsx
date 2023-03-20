import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  function clearList() {
    setPeople = [];
  }

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          BY THE POWER VESTED IN ME
        </button>
      </section>
    </main>
  );
}
export default App;
