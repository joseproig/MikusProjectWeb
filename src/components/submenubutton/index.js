import {Button} from 'react-bootstrap'
import './styles.css'


function SubMenuButton (props) {
    const {positionInVertical,color, backgroundColor, children} = props;
    let cssProperties = {}
    cssProperties['background-color'] = backgroundColor;
    cssProperties['color'] = color;
    cssProperties['border-radius'] = "20px";
    cssProperties['border-color'] = "white";
    
    let classesToUse = "subbotonAbsoluto " + positionInVertical;
    return (
        <Button variant="default" className={classesToUse} style={cssProperties} >{children}</Button>   
    );
}



export default SubMenuButton;