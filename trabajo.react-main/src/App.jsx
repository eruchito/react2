import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemCount from './components/ItemCount/ItemCount.jsx';

function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting={'Bienvenidos'} />
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
        </div>
    );
}

export default App;
