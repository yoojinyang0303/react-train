import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";

function App() {
  // const getGreetingMessage = (name) => {
  //   if (name === "muumi") return `Hello, ${name}! Learn React`;
  //   return `Welcome! Learn React`;
  // };

  return (
    <div className="App">
      <Header text={"Learn React Props A"} />
      <Header text={"Learn React Props B"} />
    </div>
  );
}

export default App;
