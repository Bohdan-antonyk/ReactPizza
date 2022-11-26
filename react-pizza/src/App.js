import './App.css'
import Header from "./Components/Header/Header";
import FilterBtn from "./Components/Filter/FilterBtn";
import PizzaCard from "./Components/PizzaCard/PizzaCard";

function App() {
    return (
        <div className="App">
            <div className="backgroundOrange">
                <div className="container">
                    <Header/>
                    <FilterBtn/>
                    <h2>Всі піцци</h2>
                    <div className="wrapperPizzaCard">
                        <PizzaCard/>
                        <PizzaCard/>
                        <PizzaCard/>
                        <PizzaCard/>
                        <PizzaCard/>
                        <PizzaCard/>
                        <PizzaCard/>
                        <PizzaCard/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
