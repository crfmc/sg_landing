import logo from './logo.svg';
import './App.css';

// Importing Navigation component and Screens
import Navigation from './components/Navigation';
import Screen1 from './screens/Screen1.js';
import Screen2 from './screens/Screen2.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Navigation />
      <Screen1 />
      <Screen2 />
    </div>
  );
}

export default App;
