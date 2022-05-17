import {Button} from 'react-bootstrap'
import './styles.css'
import  {useState } from "react";
import AnimatedImage from '../animatedimage';



function MenuButton (props) {
    const {positionInVertical,color, backgroundColor, children, userId, token} = props;

    const [isAnimated, setAnimation] = useState(false);

    let cssProperties = {}
    cssProperties['--position'] = positionInVertical;
    cssProperties['background-color'] = backgroundColor;
    cssProperties['color'] = color;
    cssProperties['border-radius'] = "20px";
    cssProperties['border-color'] = "white";
    
    
    const functionOnClick = () => setAnimation(
        
        (isAnimated) => !isAnimated
    
    )

    return (
        <div>
            <Button variant="default" className="botonAbsoluto" onClick={functionOnClick} style={cssProperties} >{children}</Button>
            <AnimatedImage width="200" height="200" imageLink={"https://cdn-icons-png.flaticon.com/512/190/190276.png"} classes="d-inline-block align-top imagenAbsolute" animate={isAnimated} userId={userId} token={token}></AnimatedImage>
        </div>
    );
}



export default MenuButton;