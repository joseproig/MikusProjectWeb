import NavBaro from '../navbaro';
import CanvasThree from '../../pages/canvasthree';
import MenuButton from '../menubutton'
import { BsFillBasketFill} from "react-icons/bs";
import { IoShirtSharp} from "react-icons/io5";
import StarfieldAnimation from 'react-starfield-animation'
import InfoCharacter from '../infocharacter';
import {useQuery } from 'react-query';
import { obtainAPIToken } from "../logic/rest-api-communication";

function Elements (props) {


    const { data } = useQuery(["334af396"],obtainAPIToken,{
        'refetchInterval':3*1000
    });

    
    let points = null;
    let characterName = null;
    let action = "Sleep";
    let userId = 1;
    let token = 2;
    if (data !== undefined) {
        points = data.user.currentPoints;
        characterName = data.user.name;
        action = data.user.currentAction;
        userId = data.user.id;
        token = data.access_token.token;
    }

   
   
    
    return (
            <div style={{
                width: '100%',
                height: '100%'
            }}>
            <StarfieldAnimation
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%'
            }}
            />
            <NavBaro nameOfNavBar="Mikus Interactive" imageLink="https://cdn-icons-png.flaticon.com/512/124/124575.png"/>
            <CanvasThree currentAction={action} ></CanvasThree>
            <MenuButton positionInVertical='40%' color = "white" backgroundColor="#175ea6" userId={userId} token={token}><BsFillBasketFill size="70"></BsFillBasketFill></MenuButton>
            <MenuButton positionInVertical='50%' color = "white" backgroundColor="#175ea6" userId={userId} token={token}><IoShirtSharp size="70"></IoShirtSharp></MenuButton>
            <InfoCharacter name={characterName} points={points}></InfoCharacter>
        </div>
    );
}
  
export default Elements;