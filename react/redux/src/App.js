import CounterContainer from "./containers/CounterContainer";
import ToDosContatiner from "./containers/ToDosContatiner";

function App() {
  return (
    <div>
      <CounterContainer number={0} />
      <hr />
      <ToDosContatiner />
    </div>
  );
}

export default App;
