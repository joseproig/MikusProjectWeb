import {Button} from 'react-bootstrap'
import './styles.css'
import { buyItem } from "../logic/rest-api-communication";

function SubMenuButton (props) {
    const {positionInVertical,color, backgroundColor, children, type, userId, token} = props;
    let cssProperties = {}
    cssProperties['background-color'] = backgroundColor;
    cssProperties['color'] = color;
    cssProperties['border-radius'] = "20px";
    cssProperties['border-color'] = "white";
    
    function functionOnClick () {
        console.log('clicked');
        buyItem(userId, type, token);
        console.log('clicked2');
    }

    let classesToUse = "subbotonAbsoluto " + positionInVertical;
    return (
        <Button variant="default" className={classesToUse} style={cssProperties} onClick={functionOnClick} >{children}</Button>   
    );
}



export default SubMenuButton;