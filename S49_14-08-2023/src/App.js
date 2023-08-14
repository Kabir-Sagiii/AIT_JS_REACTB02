import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";
import Portal from "./components/Portal";
import Modal from "./components/modal";
import Profile from "./components/Profile";
import ErrorBoundary from "./components/Errorboundary";
import ErrorMsg from "./components/ErrorMsg";

function App() {
  return (
    <div className="App">
      {/* <User /> */}
      {/* <Portal /> */}
      {/* <Modal /> */}
      <ErrorBoundary fallback={<ErrorMsg />}>
        <Profile
          name="Ritik Sharma"
          image="https://cdn-icons-png.flaticon.com/512/610/610120.png"
        />
        <Profile name={null} image={null} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
