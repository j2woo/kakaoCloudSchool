import MyComponent from "./MyComponent";
import StateComponent from "./StateComponent";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSampe";
function App() {
  return (
    <>
      <MyComponent name={3} year={1997}>
        태그 안의 내용!!!!!!
      </MyComponent>

      <StateComponent />
      <EventPractice />
    </>
  );
}

export default App;
