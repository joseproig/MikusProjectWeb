import './App.css';
import NavBaro from './components/navbaro';
import CanvasThree from './pages/canvasthree';


function App() {
  return (
    <div className="App">
      <NavBaro nameOfNavBar="Mikus Interactive" imageLink="https://cdn-icons-png.flaticon.com/512/124/124575.png"/>
      <CanvasThree></CanvasThree>
    </div>
  );
}

export default App;
