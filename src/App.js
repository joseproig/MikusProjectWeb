import './App.css';
import NavBaro from './components/navbaro';
import CanvasThree from './pages/canvasthree';
import MenuButton from './components/menubutton'
import { BsFillBasketFill} from "react-icons/bs";
import { IoShirtSharp} from "react-icons/io5";
import StarfieldAnimation from 'react-starfield-animation'
import InfoCharacter from './components/infocharacter';

function App() {
  return (
    <div className="App">
      <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
      <NavBaro nameOfNavBar="Mikus Interactive" imageLink="https://cdn-icons-png.flaticon.com/512/124/124575.png"/>
      <CanvasThree></CanvasThree>
      <MenuButton positionInVertical='40%' color = "white" backgroundColor="#175ea6"><BsFillBasketFill size="70"></BsFillBasketFill></MenuButton>
      <MenuButton positionInVertical='50%' color = "white" backgroundColor="#175ea6"><IoShirtSharp size="70"></IoShirtSharp></MenuButton>
      <InfoCharacter characterName="Yogui" points="200"></InfoCharacter>
    </div>
  );
}

export default App;
