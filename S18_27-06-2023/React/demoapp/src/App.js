import "./App.css";
import Header from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="App">
      <h2>Welcome to React JS</h2>
      <Main />
      {Header()}
      <Header />
      <Header />
      <Main />
    </div>
  );
}

export default App;
