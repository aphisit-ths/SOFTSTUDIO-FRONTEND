import "./App.scss";
import NavBar from "./components/navbar/index";
function App({ children }) {
  return (
    <div className="App">
      <NavBar />
      {children}
    </div>
  );
}

export default App;
