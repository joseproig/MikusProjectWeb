import {Button} from 'react-bootstrap'
import styles from './styles.css';


function MenuButton (props) {
    const {positionInVertical, children} = props;
    let cssProperties = {}
    cssProperties['--position'] = positionInVertical;

    return (
        <Button variant="primary botonAbsoluto rounded-circle" style={cssProperties} >{children}</Button>
    );
}



export default MenuButton;