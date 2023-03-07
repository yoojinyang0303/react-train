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
      <Header />
    </div>
  );
}

export default App;
