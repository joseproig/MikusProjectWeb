import './styles.css';
import SubMenuButton from '../submenubutton'
import { IoShirtSharp} from "react-icons/io5";
import {GiSunglasses } from "react-icons/gi"
import {useQuery } from 'react-query';
import { obtainAPIToken } from "../logic/rest-api-communication";

function InfoCharacter (props) {
    const {name, points} = props;
    return (
        <div className='containeroGeneral'>
            <div>
                <div className='texto'>Name </div>
                <div className='texto'>___</div>
                <div className='numbero'>{name}</div>
            </div>

            <div>
                <div className='texto'>Points </div>
                <div className='texto'>___</div>
                <div className='numbero'>{points}</div>
            </div>
        </div>
    );
  }
  
  export default InfoCharacter;