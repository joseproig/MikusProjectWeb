import {Button} from 'react-bootstrap'
import './styles.css'


function SubMenuButton (props) {
    const {color, backgroundColor, children} = props;
    let cssProperties = {}
    cssProperties['background-color'] = backgroundColor;
    cssProperties['color'] = color;
    cssProperties['border-radius'] = "20px";
    cssProperties['border-color'] = "white";

    return (
        <Button variant="default" style={cssProperties} >{children}</Button>
    );
}



export default SubMenuButton;