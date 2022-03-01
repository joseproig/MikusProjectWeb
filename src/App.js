import './App.css';
import NavBaro from './components/navbaro';
import CanvasThree from './pages/canvasthree';
import MenuButton from './components/menubutton'
import { BsFillBasketFill} from "react-icons/bs";
import { IoShirtSharp} from "react-icons/io5";

function App() {
  return (
    <div className="App">
      <NavBaro nameOfNavBar="Mikus Interactive" imageLink="https://cdn-icons-png.flaticon.com/512/124/124575.png"/>
      <CanvasThree></CanvasThree>
      <MenuButton positionInVertical='25%' color = "white" backgroundColor="#204380"><BsFillBasketFill size="70"></BsFillBasketFill></MenuButton>
      <MenuButton positionInVertical='50%' color = "white" backgroundColor="#204380"><IoShirtSharp size="70"></IoShirtSharp></MenuButton>
    </div>
  );
}

export default App;
