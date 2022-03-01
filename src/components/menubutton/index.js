import {Button} from 'react-bootstrap'



function MenuButton (props) {
    const {positionInVertical,color, backgroundColor, children} = props;
    let cssProperties = {}
    cssProperties['--position'] = positionInVertical;
    cssProperties['background-color'] = backgroundColor;
    cssProperties['color'] = color;
    cssProperties['border-radius'] = "20px";

    return (
        <Button variant="default" className="botonAbsoluto" style={cssProperties} >{children}</Button>
    );
}



export default MenuButton;