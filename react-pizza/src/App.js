import './App.css'
import Header from "./Components/Header/Header";
import FilterBtn from "./Components/Filter/FilterBtn";
function App() {
  return (
    <div className="App">
      <div className="backgroundOrange">
          <div className="container">
            <Header/>
              <FilterBtn/>
          </div>
      </div>
    </div>
  );
}

export default App;
